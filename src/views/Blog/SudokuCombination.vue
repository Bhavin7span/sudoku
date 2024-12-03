<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        The Intricacies of Sudoku: From Puzzles to Combinatorics
      </h1>
      <p class="mt-6 text-xl leading-8">
        The classic number puzzle, Sudoku, intertwines with computer science
        research through its combinatorial essence. There are countless
        potential combinations to consider, whether to solve or create a grid.
      </p>
      <p class="mt-6 text-xl leading-8">
        Yet, combinatorial challenges extend beyond playful puzzles. For
        instance, scheduling hospital nursing shifts, managing delivery routes,
        or planning a construction project all share a combinatorial backbone.
        The objective? Finding the optimal combination, whether it's based on
        time, cost, or another criterion.
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Dissecting Combinatorial Problems
        </h2>
        <p class="mt-6 text-xl leading-8">
          These are considered discrete problems, given their dependence on
          integer variables. Surprisingly, they're often trickier than
          continuous problems with actual variables. While derivatives are
          robust tools for continuous optimization, discrete problems need more
          mathematical tools.
        </p>
        <p class="mt-6 text-xl leading-8">
          Fortunately, digital techniques like linear, dynamic, and constraint
          programming (PPC) can tackle these challenges, drawing parallels
          between constraint programming and Sudoku.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1530026454774-50cce722a1fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Sudoku's Rise in Popularity
        </h2>
        <p class="mt-6 text-xl leading-8">
          Since 2005, 9X9 Sudoku grids have proliferated across newspapers and
          online platforms. Originating in the U.S. in 1979 and inspired by the
          Latin square concept, the game got its Japanese moniker after gaining
          popularity in Japan in 1986.
        </p>
        <p class="mt-6 text-xl leading-8">
          Its allure lies in its simplicity. The sole rule? Every row, column,
          and 3x3 square must feature 1 to 9. Today, myriad variations exist,
          from 4X4 grids for novices to the colossal 16X16 Monster Sudoku. Other
          adaptations, like the Kakuro from Japan, blend digital crosswords with
          sums and can also be tackled using constraint programming techniques.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Deciphering Sudoku: Techniques and Tactics
        </h2>
        <p class="mt-6 text-xl leading-8">
          For many, Sudoku's appeal is in devising personal problem-solving
          strategies. Yet, these strategies mirror those used in constraint
          programming. Broadly, they fall into two groups:
        </p>
        <ol class="list-decimal pl-6 mt-6">
          <li class="mb-1">
            Techniques placing a value within a row, column, or sub-square.
          </li>
          <li class="mb-1">
            Techniques pinpointing a value for a specific box.
          </li>
        </ol>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1600079037643-41a1407acdb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iheartsudoku image"
      />
      <p class="mt-6 text-xl leading-8">
        Advanced Sudokus often requires iterative refinement of the second
        technique, considering potential value sets for a square. These thought
        processes mirror constraint solvers and are recognized as filtering or
        consistency maintenance in constraint programming. For elite puzzles,
        hypotheses become essential, mirroring classical constraint programming
        approaches.
      </p>
      <p class="mt-6 text-xl leading-8">
        Given the textbook nature of Sudoku in constraint programming, its
        problem-solving framework has been meticulously mapped out. Using tools
        like the Koalog Constraint Solver, a regular PC can solve a Sudoku in
        milliseconds.
      </p>
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Crafting Sudoku Puzzles
        </h2>
        <p class="mt-6 text-xl leading-8">
          While some enthusiasts still craft Sudokus manually, most grids today
          are computer-generated. The goal is to produce a grid with one
          distinct solution—a "well-formed" Sudoku. Furthermore, it should be
          locally minimal, meaning the puzzle would have multiple solutions if
          any given clue is removed.
        </p>
        <p class="mt-6 text-xl leading-8">
          A typical algorithm for generating such a Sudoku includes:
        </p>
        <ol class="list-decimal pl-6 mt-6">
          <li class="mb-1">Randomly spawning a grid.</li>
          <li class="mb-1">
            Initiating a list of boxes to clear with all Sudoku squares.
          </li>
          <li class="mb-1">Randomly selecting and erasing a box value.</li>
          <li class="mb-1">
            Check if the Sudoku still has a unique solution; if not, the value
            is restored.
          </li>
          <li class="mb-1">Repeating until the list is exhausted.</li>
        </ol>
        <p class="mt-6 text-xl leading-8">
          Using constraint programming ensures the above algorithm always finds
          a solution.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Evaluating Difficulty Levels
        </h2>
        <p class="mt-6 text-xl leading-8">
          The crux of Sudoku creation lies in defining difficulty. A puzzle's
          level must match the player's expectation to be satisfying. The
          disparity in these expectations often distinguishes Sudoku creators.
          One method involves establishing a set of rules, ranked by difficulty,
          and classifying Sudokus based on the complexity of the required
          solution rules. For instance, placing a value in a square is simpler
          than identifying the exact value for a specific box. As such, Sudokus
          solvable with only the former rule are considered more straightforward
          than those requiring both.
        </p>
      </div>
      <div class="mt-16">
        <ReadMore :posts="posts"></ReadMore>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReadMore from '../../components/ReadMore.vue';
const posts = [
  {
    id: 2,
    title: 'Can brain training slow cognitive decline?',
    href: 'blog-can-brain',
    description:
      'Is there any truth to the idea that daily sudoku could be a defense against dementia? According to expert Arfan Ikram, these mental exercises should not be dismissed.',
    imageUrl:
      'https://images.unsplash.com/photo-1629709305580-5a833dc72d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 7,
    title: 'The Mathematical Mystique of Sudoku',
    href: 'blog-math-behind',
    description:
      "We've all seen those engrossed students, armed with a newspaper, busily filling Sudoku grids right before class or sometimes during. Sudoku isn't just a game—it's a compelling puzzle that intertwines with mathematics and computer science.",
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 13,
    title: 'Brain Boosters: The Scientifically Proven Benefits of Sudoku',
    href: 'blog-brain-boosters',
    description:
      'Sudoku more than just a numbers game, is a cerebral powerhouse. At its core, it stimulates neuron activity, demanding intense concentration and memory skills. The following delves into the science-backed benefits of this captivating puzzle.',
    imageUrl:
      'https://images.unsplash.com/photo-1543599723-86e84893ebba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
  },
];
</script>

<style lang="scss" scoped></style>
