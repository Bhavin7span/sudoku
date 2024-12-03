<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Sharpen Your Mind with Sudoku: More Than Just a Puzzle
      </h1>
      <p class="mt-6 text-xl leading-8">
        Engaging in Sudoku is a delightful pastime and a mental workout,
        promising a sense of accomplishment after every completed grid. This
        universally loved brain game is entertaining and can be a potent tool in
        keeping cognitive decline at bay, fostering a novel way of thinking.
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Mastering Sudoku: A Quick Guide
        </h2>
        <p class="mt-6 text-xl leading-8">
          You've likely stumbled upon Sudoku puzzles in newspapers or online
          platforms. At its core, Sudoku tests your logic as you strategically
          place numbers within a grid, ensuring no repetitions. It balances
          deduction and intuition to determine the correct number for each slot.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1600445568616-f7fa64f89be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iHeartSudoku image"
      />
      <div class="mt-10">
        <p class="mt-6 text-xl leading-8">
          Here's a brief overview of the Sudoku rules:
        </p>
        <ul class="list-disc pl-6 mt-6">
          <li>Populate every box with numbers ranging from one to nine.</li>
          <li>
            Within each 9x9 square, refrain from using the same number more than
            once.
          </li>
          <li>Avoid number repetition within any given column.</li>
          <li>Ensure no number is repeated across any row.</li>
        </ul>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1635241161466-541f065683ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Sudoku: Logic Over Arithmetic
        </h2>
        <p class="mt-6 text-xl leading-8">
          Sudoku puzzles are designed to be accessible to everyone. Unlike
          crosswords, which might require specific knowledge or cultural
          familiarity, Sudoku's essence lies in logic, not trivia.
        </p>
        <p class="mt-6 text-xl leading-8">
          It's a common misconception that Sudoku is about mathematics. In
          reality, the game's numerical nature is just a facade. Consider
          Sudoku's numbers as nine unique symbols that must be arranged
          logically. Arithmetic plays no role in solving these puzzles.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          The Profound Benefits of Sudoku
        </h2>
        <p class="mt-6 text-xl leading-8">
          Embracing brain-challenging games like Sudoku and crosswords, or even
          other cognitive activities such as reading, writing, and learning, has
          been linked to reduced risks of dementia and Alzheimer's disease.
          These activities serve as protective measures against cognitive
          decline.
        </p>
        <p class="mt-6 text-xl leading-8">
          Every Sudoku grid you tackle, every new challenge you take on,
          requires diverse parts of your brain to collaborate, ensuring it
          remains agile and sharp. As you dive into Sudoku and immerse yourself
          in its logical intricacies, you're not just solving a puzzle but
          investing in your cognitive well-being.
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
    id: 1,
    title: '5 Outstanding Reasons to Dive into Sudoku Regularly',
    href: 'blog-5-outstanding-reasons',
    description:
      "Sudoku is not just any ordinary game. It's a mind challenge, a brain teaser, and a logic enhancer. If you're seeking a pastime that sharpens your intellect while providing relaxation, Sudoku is your answer. Let’s delve into the top reasons why Sudoku should be your game of choice.",
    imageUrl:
      'https://images.unsplash.com/photo-1640537702474-3e503c21eefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&auto=format&fit=crop&w=3603&q=80',
  },
  {
    id: 5,
    title: 'Sudoku: A Timeless Brain-Teaser With Ancient Roots',
    href: 'blog-history-sudoku',
    description:
      "Imagine a puzzle that's a test of your wit and a journey through time and culture. Enter Sudoku: not just a grid of numbers but a testament to humanity's enduring love for a good challenge.",
    imageUrl:
      'https://images.unsplash.com/photo-1518534249708-e8f3537753ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 10,
    title: 'Sudoku for Kids: A Fun Puzzle Activity',
    href: 'blog-sudoku-children',
    description:
      'If your child is a puzzle enthusiast, they\'ll love the classic game of Sudoku tailored for their age! But first, a brief history lesson: although "Sudoku" might sound Japanese, its inventor was, surprisingly, French.',
    imageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  },
];
</script>

<style lang="scss" scoped></style>
