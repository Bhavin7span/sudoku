import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    STARTER_PIECES: [],
    GAME_PIECES: [],
    SOLUTION: [],
    SELECTED_ROW: null,
    SELECTED_COL: null,
    SELECTED_POS: null,
    MISTAKES: 0,
    GAME_DIFFICULTY: null,
    DIGITS: '123456789', // Allowed DIGITS
    ROWS: 'ABCDEFGHI', // Row labels
    COLS: '123456789', // Column labels
    SQUARES: null, // Square IDs
    UNITS: null, // All units (row, column, or box)
    SQUARE_UNITS_MAP: null, // Squares -> units map
    SQUARE_PEERS_MAP: null, // Squares -> peers map
    MIN_GIVENS: 17, // Minimum number of givens
    NR_SQUARES: 81, // Number of squares
    DIFFICULTY: {
      easy: 38,
      medium: 30,
      hard: 25,
      expert: 23,
      insane: 19,
      inhuman: 17,
    },
    BLANK_CHAR: '.',
    BLANK_BOARD:
      '.................................................................................',
    GAME_WON: false,
    GAME_LOST: false,
    SHOW_LOST_GAME_MODAL: false,
    EMPTY_GAME: false,
    GAME_HISTORY: [],
  }),
  getters: {},
  actions: {
    setGameStatus(status) {
      this.GAME_WON = status;
    },
    setMistakes() {
      this.MISTAKES = this.MISTAKES + 1;
      if (this.MISTAKES >= 3) {
        this.GAME_LOST = true;
        this.GAME_DIFFICULTY = null;
      }
    },
    setShowLostGameModal(newVal) {
      this.SHOW_LOST_GAME_MODAL = newVal;
    },
    startGame(difficulty) {
      this.EMPTY_GAME = false;
      this.GAME_WON = false;
      this.GAME_LOST = false;
      this.SELECTED_ROW = null;
      this.SELECTED_COL = null;
      this.SHOW_LOST_GAME_MODAL = false;
      this.MISTAKES = 0;
      this.GAME_HISTORY = [];
      if (difficulty === 'empty') {
        this.EMPTY_GAME = true;
        this.STARTER_PIECES = Array(81).fill('');
        this.GAME_PIECES = Array(81).fill('');
        this.SOLUTION = Array(81).fill('');
        return;
      }

      this.initialize();

      this.GAME_DIFFICULTY = difficulty ? difficulty : 'easy';
      const board = this.generate(difficulty);
      this.STARTER_PIECES = board
        .split('')
        .map((entry) => (entry === '.' ? '' : entry));
      this.GAME_PIECES = board
        .split('')
        .map((entry) => (entry === '.' ? '' : entry));
      const SOLUTION = this.solve(board);
      this.SOLUTION = SOLUTION.split('');
    },
    setGameHistory(newEntry) {
      this.GAME_HISTORY.push(newEntry);
    },
    undoGameHistory() {
      const lastPlay = this.GAME_HISTORY.pop();
      if (lastPlay) {
        this.GAME_PIECES[lastPlay.pos] = '';
      }
    },
    initialize() {
      this.SQUARES = this._cross(this.ROWS, this.COLS);
      this.UNITS = this._get_all_units(this.ROWS, this.COLS);
      this.SQUARE_UNITS_MAP = this._get_square_units_map(
        this.SQUARES,
        this.UNITS
      );
      this.SQUARE_PEERS_MAP = this._get_square_peers_map(
        this.SQUARES,
        this.SQUARE_UNITS_MAP
      );
    },
    generate(difficulty) {
      if (typeof difficulty === 'string' || typeof difficulty === 'undefined') {
        difficulty = this.DIFFICULTY[difficulty] || this.DIFFICULTY.easy;
      }

      // Force difficulty between 17 and 81 inclusive
      difficulty = this._force_range(
        difficulty,
        this.NR_SQUARES + 1,
        this.MIN_GIVENS
      );

      // Get a set of squares and all possible candidates for each square
      let blank_board = '';
      for (let i = 0; i < this.NR_SQUARES; ++i) {
        blank_board += '.';
      }
      let candidates = this._get_candidates_map(blank_board);

      // For each item in a shuffled list of squares
      let shuffled_squares = this._shuffle(this.SQUARES);
      for (let si in shuffled_squares) {
        let square = shuffled_squares[si];

        // If an assignment of a random choice causes a contradiction, give
        // up and try again
        let rand_candidate_idx = this._rand_range(candidates[square].length);
        let rand_candidate = candidates[square][rand_candidate_idx];
        if (!this._assign(candidates, square, rand_candidate)) {
          break;
        }

        // Make a list of all single candidates
        let single_candidates = [];
        for (let si in this.SQUARES) {
          let square = this.SQUARES[si];

          if (candidates[square].length == 1) {
            single_candidates.push(candidates[square]);
          }
        }

        // If we have at least difficulty, and the unique candidate count is
        // at least 8, return the puzzle!
        if (
          single_candidates.length >= difficulty &&
          this._strip_dups(single_candidates).length >= 8
        ) {
          let board = '';
          let givens_idxs = [];
          for (let i in this.SQUARES) {
            let square = this.SQUARES[i];
            if (candidates[square].length == 1) {
              board += candidates[square];
              givens_idxs.push(i);
            } else {
              board += this.BLANK_CHAR;
            }
          }

          // If we have more than `difficulty` givens, remove some random
          // givens until we're down to exactly `difficulty`
          let nr_givens = givens_idxs.length;
          if (nr_givens > difficulty) {
            givens_idxs = this._shuffle(givens_idxs);
            for (let i = 0; i < nr_givens - difficulty; ++i) {
              let target = parseInt(givens_idxs[i]);
              board =
                board.substring(0, target) +
                this.BLANK_CHAR +
                board.substring(target + 1);
            }
          }

          // Double check board is solvable
          // TODO: Make a standalone board checker. Solve is expensive.
          if (this.solve(board)) {
            return board;
          }
        }
      }

      // Give up and try a new puzzle
      return this.generate(difficulty);
    },
    solve(board, reverse) {
      /* Solve a sudoku puzzle given a sudoku `board`, i.e., an 81-character
        string of DIGITS, 1-9, and spaces identified by '.', representing the
        squares. There must be a minimum of 17 givens. If the given board has no
        SOLUTIONs, return false.

        Optionally set `reverse` to solve "backwards", i.e., rotate through the
        possibilities in reverse. Useful for checking if there is more than one
        SOLUTION.
        */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
        throw report;
      }

      // Check number of givens is at least MIN_GIVENS
      let nr_givens = 0;
      for (let i in board) {
        if (board[i] !== this.BLANK_CHAR && this._in(board[i], this.DIGITS)) {
          ++nr_givens;
        }
      }
      if (nr_givens < this.MIN_GIVENS) {
        throw 'Too few givens. Minimum givens is ' + this.MIN_GIVENS;
      }

      // Default reverse to false
      reverse = reverse || false;

      let candidates = this._get_candidates_map(board);
      let result = this._search(candidates, reverse);

      if (result) {
        let SOLUTION = '';
        for (let square in result) {
          SOLUTION += result[square];
        }
        return SOLUTION;
      }
      return false;
    },
    get_candidates(board) {
      /* Return all possible candidates for each square as a grid of
        candidates, returning `false` if a contradiction is encountered.

        Really just a wrapper for _get_candidates_map for programmer
        consumption.
        */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
        throw report;
      }

      // Get a candidates map
      let candidates_map = this._get_candidates_map(board);

      // If there's an error, return false
      if (!candidates_map) {
        return false;
      }

      // Transform candidates map into grid
      let rows = [];
      let cur_row = [];
      let i = 0;
      for (let square in candidates_map) {
        let candidates = candidates_map[square];
        cur_row.push(candidates);
        if (i % 9 == 8) {
          rows.push(cur_row);
          cur_row = [];
        }
        ++i;
      }
      return rows;
    },
    _get_candidates_map(board) {
      /* Get all possible candidates for each square as a map in the form
        {square: DIGITS} using recursive constraint propagation. Return `false`
        if a contradiction is encountered
        */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
        throw report;
      }

      let candidate_map = {};
      let squares_values_map = this._get_square_vals_map(board);

      // Start by assigning every digit as a candidate to every square
      for (let si in this.SQUARES) {
        candidate_map[this.SQUARES[si]] = this.DIGITS;
      }

      // For each non-blank square, assign its value in the candidate map and
      // propagate.
      for (let square in squares_values_map) {
        let val = squares_values_map[square];

        if (this._in(val, this.DIGITS)) {
          let new_candidates = this._assign(candidate_map, square, val);

          // Fail if we can't assign val to square
          if (!new_candidates) {
            return false;
          }
        }
      }

      return candidate_map;
    },
    _search(candidates, reverse) {
      /* Given a map of squares -> candidates, using depth-first search,
        recursively try all possible values until a SOLUTION is found, or false
        if no SOLUTION exists.
        */

      // Return if error in previous iteration
      if (!candidates) {
        return false;
      }

      // Default reverse to false
      reverse = reverse || false;

      // If only one candidate for every square, we've a solved puzzle!
      // Return the candidates map.
      let max_nr_candidates = 0;
      // let max_candidates_square = null;
      for (let si in this.SQUARES) {
        let square = this.SQUARES[si];

        let nr_candidates = candidates[square].length;

        if (nr_candidates > max_nr_candidates) {
          max_nr_candidates = nr_candidates;
          // max_candidates_square = square;
        }
      }
      if (max_nr_candidates === 1) {
        return candidates;
      }

      // Choose the blank square with the fewest possibilities > 1
      let min_nr_candidates = 10;
      let min_candidates_square = null;
      for (let si in this.SQUARES) {
        let square = this.SQUARES[si];

        let nr_candidates = candidates[square].length;

        if (nr_candidates < min_nr_candidates && nr_candidates > 1) {
          min_nr_candidates = nr_candidates;
          min_candidates_square = square;
        }
      }

      // Recursively search through each of the candidates of the square
      // starting with the one with fewest candidates.

      // Rotate through the candidates forwards
      let min_candidates = candidates[min_candidates_square];
      if (!reverse) {
        for (let vi in min_candidates) {
          let val = min_candidates[vi];

          // TODO: Implement a non-ridiculous deep copy function
          let candidates_copy = JSON.parse(JSON.stringify(candidates));
          let candidates_next = this._search(
            this._assign(candidates_copy, min_candidates_square, val)
          );

          if (candidates_next) {
            return candidates_next;
          }
        }

        // Rotate through the candidates backwards
      } else {
        for (let vi = min_candidates.length - 1; vi >= 0; --vi) {
          let val = min_candidates[vi];

          // TODO: Implement a non-ridiculous deep copy function
          let candidates_copy = JSON.parse(JSON.stringify(candidates));
          let candidates_next = this._search(
            this._assign(candidates_copy, min_candidates_square, val),
            reverse
          );

          if (candidates_next) {
            return candidates_next;
          }
        }
      }

      // If we get through all combinations of the square with the fewest
      // candidates without finding an answer, there isn't one. Return false.
      return false;
    },
    _assign(candidates, square, val) {
      /* Eliminate all values, *except* for `val`, from `candidates` at
        `square` (candidates[square]), and propagate. Return the candidates map
        when finished. If a contradiction is found, return false.

        WARNING: This will modify the contents of `candidates` directly.
        */

      // Grab a list of candidates without 'val'
      let other_vals = candidates[square].replace(val, '');

      // Loop through all other values and eliminate them from the candidates
      // at the current square, and propagate. If at any point we get a
      // contradiction, return false.
      for (let ovi in other_vals) {
        let other_val = other_vals[ovi];

        let candidates_next = this._eliminate(candidates, square, other_val);

        if (!candidates_next) {
          //console.log("Contradiction found by _eliminate.");
          return false;
        }
      }

      return candidates;
    },
    _eliminate(candidates, square, val) {
      /* Eliminate `val` from `candidates` at `square`, (candidates[square]),
        and propagate when values or places <= 2. Return updated candidates,
        unless a contradiction is detected, in which case, return false.

        WARNING: This will modify the contents of `candidates` directly.
        */

      // If `val` has already been eliminated from candidates[square], return
      // with candidates.
      if (!this._in(val, candidates[square])) {
        return candidates;
      }

      // Remove `val` from candidates[square]
      candidates[square] = candidates[square].replace(val, '');

      // If the square has only candidate left, eliminate that value from its
      // peers
      let nr_candidates = candidates[square].length;
      if (nr_candidates === 1) {
        let target_val = candidates[square];

        for (let pi in this.SQUARE_PEERS_MAP[square]) {
          let peer = this.SQUARE_PEERS_MAP[square][pi];

          let candidates_new = this._eliminate(candidates, peer, target_val);

          if (!candidates_new) {
            return false;
          }
        }

        // Otherwise, if the square has no candidates, we have a contradiction.
        // Return false.
      }
      if (nr_candidates === 0) {
        return false;
      }

      // If a unit is reduced to only one place for a value, then assign it
      for (let ui in this.SQUARE_UNITS_MAP[square]) {
        let unit = this.SQUARE_UNITS_MAP[square][ui];

        let val_places = [];
        for (let si in unit) {
          let unit_square = unit[si];
          if (this._in(val, candidates[unit_square])) {
            val_places.push(unit_square);
          }
        }

        // If there's no place for this value, we have a contradiction!
        // return false
        if (val_places.length === 0) {
          return false;

          // Otherwise the value can only be in one place. Assign it there.
        } else if (val_places.length === 1) {
          let candidates_new = this._assign(candidates, val_places[0], val);

          if (!candidates_new) {
            return false;
          }
        }
      }

      return candidates;
    },
    _get_square_vals_map(board) {
      /* Return a map of squares -> values
       */
      let squares_vals_map = {};

      // Make sure `board` is a string of length 81
      if (board.length != this.SQUARES.length) {
        throw 'Board/squares length mismatch.';
      } else {
        for (let i in this.SQUARES) {
          squares_vals_map[this.SQUARES[i]] = board[i];
        }
      }

      return squares_vals_map;
    },
    _get_square_units_map(squares, units) {
      let square_unit_map = {};

      // For every square...
      for (let si in squares) {
        let cur_square = squares[si];

        // Maintain a list of the current square's units
        let cur_square_units = [];

        // Look through the units, and see if the current square is in it,
        // and if so, add it to the list of of the square's units.
        for (let ui in units) {
          let cur_unit = units[ui];

          if (cur_unit.indexOf(cur_square) !== -1) {
            cur_square_units.push(cur_unit);
          }
        }

        // Save the current square and its units to the map
        square_unit_map[cur_square] = cur_square_units;
      }

      return square_unit_map;
    },
    _get_square_peers_map(squares, units_map) {
      let square_peers_map = {};

      // For every square...
      for (let si in squares) {
        let cur_square = squares[si];
        let cur_square_units = units_map[cur_square];

        // Maintain list of the current square's peers
        let cur_square_peers = [];

        // Look through the current square's units map...
        for (let sui in cur_square_units) {
          let cur_unit = cur_square_units[sui];

          for (let ui in cur_unit) {
            let cur_unit_square = cur_unit[ui];

            if (
              cur_square_peers.indexOf(cur_unit_square) === -1 &&
              cur_unit_square !== cur_square
            ) {
              cur_square_peers.push(cur_unit_square);
            }
          }
        }

        // Save the current square an its associated peers to the map
        square_peers_map[cur_square] = cur_square_peers;
      }

      return square_peers_map;
    },
    _get_all_units(rows, cols) {
      let units = [];

      // Rows
      for (let ri in rows) {
        units.push(this._cross(rows[ri], cols));
      }

      // Columns
      for (let ci in cols) {
        units.push(this._cross(rows, cols[ci]));
      }

      // Boxes
      let row_squares = ['ABC', 'DEF', 'GHI'];
      let col_squares = ['123', '456', '789'];
      for (let rsi in row_squares) {
        for (let csi in col_squares) {
          units.push(this._cross(row_squares[rsi], col_squares[csi]));
        }
      }

      return units;
    },
    board_string_to_grid(board_string) {
      /* Convert a board string to a two-dimensional array
       */
      let rows = [];
      let cur_row = [];
      for (let i in board_string) {
        cur_row.push(board_string[i]);
        if (i % 9 == 8) {
          rows.push(cur_row);
          cur_row = [];
        }
      }
      return rows;
    },
    board_grid_to_string(board_grid) {
      /* Convert a board grid to a string
       */
      let board_string = '';
      for (let r = 0; r < 9; ++r) {
        for (let c = 0; c < 9; ++c) {
          board_string += board_grid[r][c];
        }
      }
      return board_string;
    },
    print_board(board) {
      /* Print a sudoku `board` to the console.
       */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
        throw report;
      }

      let V_PADDING = ' '; // Insert after each square
      let H_PADDING = '\n'; // Insert after each row

      let V_BOX_PADDING = '  '; // Box vertical padding
      let H_BOX_PADDING = '\n'; // Box horizontal padding

      let display_string = '';

      for (let i in board) {
        let square = board[i];

        // Add the square and some padding
        display_string += square + V_PADDING;

        // Vertical edge of a box, insert v. box padding
        if (i % 3 === 2) {
          display_string += V_BOX_PADDING;
        }

        // End of a line, insert horizontal padding
        if (i % 9 === 8) {
          display_string += H_PADDING;
        }

        // Horizontal edge of a box, insert h. box padding
        if (i % 27 === 26) {
          display_string += H_BOX_PADDING;
        }
      }
    },
    validate_board(board) {
      /* Return if the given `board` is valid or not. If it's valid, return
        true. If it's not, return a string of the reason why it's not.
        */

      // Check for empty board
      if (!board) {
        return 'Empty board';
      }

      // Invalid board length
      if (board.length !== this.NR_SQUARES) {
        return (
          'Invalid board size. Board must be exactly ' +
          this.NR_SQUARES +
          ' squares.'
        );
      }

      // Check for invalid characters
      for (let i in board) {
        if (!this._in(board[i], this.DIGITS) && board[i] !== this.BLANK_CHAR) {
          return (
            'Invalid board character encountered at index ' +
            i +
            ': ' +
            board[i]
          );
        }
      }

      // Otherwise, we're good. Return true.
      return true;
    },
    _cross(a, b) {
      let result = [];
      for (let ai in a) {
        for (let bi in b) {
          result.push(a[ai] + b[bi]);
        }
      }
      return result;
    },
    _in(v, seq) {
      /* Return if a value `v` is in sequence `seq`.
       */
      return seq.indexOf(v) !== -1;
    },
    _first_true(seq) {
      /* Return the first element in `seq` that is true. If no element is
        true, return false.
        */
      for (let i in seq) {
        if (seq[i]) {
          return seq[i];
        }
      }
      return false;
    },
    _shuffle(seq) {
      /* Return a shuffled version of `seq`
       */

      // Create an array of the same size as `seq` filled with false
      let shuffled = [];
      for (let i = 0; i < seq.length; ++i) {
        shuffled.push(false);
      }

      for (let i in seq) {
        let ti = this._rand_range(seq.length);

        while (shuffled[ti]) {
          ti = ti + 1 > seq.length - 1 ? 0 : ti + 1;
        }

        shuffled[ti] = seq[i];
      }

      return shuffled;
    },
    _rand_range(max, min) {
      /* Get a random integer in the range of `min` to `max` (non inclusive).
        If `min` not defined, default to 0. If `max` not defined, throw an
        error.
        */
      min = min || 0;
      if (max) {
        return Math.floor(Math.random() * (max - min)) + min;
      } else {
        throw 'Range undefined';
      }
    },
    _strip_dups(seq) {
      /* Strip duplicate values from `seq`
       */
      let seq_set = [];
      let dup_map = {};
      for (let i in seq) {
        let e = seq[i];
        if (!dup_map[e]) {
          seq_set.push(e);
          dup_map[e] = true;
        }
      }
      return seq_set;
    },
    _force_range(nr, max, min) {
      /* Force `nr` to be within the range from `min` to, but not including,
        `max`. `min` is optional, and will default to 0. If `nr` is undefined,
        treat it as zero.
        */
      min = min || 0;
      nr = nr || 0;
      if (nr < min) {
        return min;
      }
      if (nr > max) {
        return max;
      }
      return nr;
    },
  },
});
