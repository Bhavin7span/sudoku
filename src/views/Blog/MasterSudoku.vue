<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Mastering Sudoku: From Basics to Advanced Techniques
      </h1>
      <p class="mt-6 text-xl leading-8">
        Sudoku may seem daunting due to its numerical interface, but it's not a
        math game. Even those who aren't arithmetically inclined can excel at
        Sudoku. Think of it as a puzzle where numbers could easily be swapped
        out for letters or symbols without affecting their nature. If you're
        beginning, it's essential to understand the foundational system before
        diving into intricate techniques.
      </p>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1595001918824-83250c5f0599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iHeartSudoku image"
      />
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Understanding the Basics
        </h2>
        <ol class="list-decimal pl-8 mt-6">
          <li>
            <b>Get Acquainted with the Grid:</b> A traditional Sudoku features a
            9x9 grid subdivided into nine larger squares containing nine boxes.
            Initially, some squares have numbers between 1 and 9. The difficulty
            level determines the number of prefilled squares. Distinct, bold
            lines often separate these larger squares, and lighter lines define
            the smaller squares. Some variations even use colors for
            differentiation.
          </li>
          <li>
            <b>Mind the Rows and Columns:</b> Every column and row should have
            numbers from 1 to 9 without repetition.
          </li>
          <li>
            <b>Focus on the Larger Squares:</b> Each 3x3 square should hold
            numbers 1 to 9 without repetition.
          </li>
          <li>
            <b>Use a Pencil:</b> Beginners will inevitably make mistakes. Using
            a pencil makes corrections easier.
          </li>
        </ol>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1541311693815-16e1241a0381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Basic Strategies
        </h2>
        <ol class="list-decimal pl-8 mt-6">
          <li>
            <b>Single Possibility within a Large Square</b> Check if a large
            square has only one box left unfilled. Deduce the missing number
            between 1 and 9 and fill it in.
          </li>
          <li>
            <b>Single Possibility in a Row or Column</b> Examine rows and
            columns for any with just one empty box. Identify the missing number
            and complete it.
          </li>
          <li>
            <b>Scanning Rows of Large Squares</b> Examine a set of three large
            squares vertically or horizontally. If a number is missing in one
            and appears in the other two, it can give clues about its potential
            placement.
          </li>
          <li>
            <b>Traversing the Grid</b> Once comfortable scanning in one
            direction (rows or columns), practice doing both simultaneously.
            This will allow you to cross-reference and determine the correct
            placement.
          </li>
          <li>
            <b>Focus on Frequently Appearing Numbers:</b> If a particular number
            is recurrent, it might be advantageous to start using the
            abovementioned methods.
          </li>
        </ol>
      </div>
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Advanced Techniques
        </h2>
        <ol class="list-decimal pl-6 mt-6">
          <li class="mb-1">
            <b>Analyze Rows of Large Squares:</b> Concentrate on a set of three
            large squares either vertically or horizontally. Pick a number and
            try determining its possible placements based on its existing
            positions in the grid.
          </li>
          <li class="mb-1">
            <b>Note Down Possibilities:</b> For challenging grids, jot down
            potential numbers for each box in pencil. This might lead to
            multiple possibilities in one box, but you'll discern the correct
            number as you progress.
          </li>
          <li class="mb-1">
            <b>Regularly Revisit Boxes</b> As you fill in numbers, periodically
            review the grid. Placing some numbers may shed light on earlier
            uncertainties. When revisiting, employ the techniques mentioned
            above to make educated decisions.
          </li>
        </ol>
      </div>
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          Remember, Sudoku is a game of logic, patience, and strategy. You'll
          find yourself seamlessly navigating even the most complex grids with
          practice.
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
    id: 6,
    title: 'Mastering the Art of Sudoku: Advanced Techniques Explained',
    href: 'blog-how-solve',
    description:
      'Sudoku, a captivating game of logic and number placement, has been a long-standing favorite for intellectual stimulation. Originating from Japan, its objective appears simple: fill a 9x9 grid, broken down into 3x3 boxes, so each row, column, and individual 3x3 box contains the numbers 1-9 without repetition.',
    imageUrl:
      'https://images.unsplash.com/photo-1676282824476-ed6148e7c28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 11,
    title: 'The Intricacies of Sudoku: From Puzzles to Combinatorics',
    href: 'blog-sudoku-combination',
    description:
      'The classic number puzzle, Sudoku, intertwines with computer science research through its combinatorial essence. There are countless potential combinations to consider, whether to solve or create a grid.',
    imageUrl:
      'https://images.unsplash.com/photo-1550527882-b71dea5f8089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];
</script>

<style lang="scss" scoped></style>
