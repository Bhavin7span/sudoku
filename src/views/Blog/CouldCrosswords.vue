<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        The Cognitive Power of Crosswords and Sudoku: More Than Just Games
      </h1>
      <p class="mt-6 text-xl leading-8">
        Attention, puzzle enthusiasts! Whether you're a devotee of Sudoku, a
        crossword enthusiast, or enjoy both, there's fascinating news for you.
        Recent groundbreaking research reveals the potentially remarkable impact
        of these brain teasers on seniors' cognitive functions. Now is the
        perfect time to start if you're not a puzzle solver.
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          An Impressive Study in Numbers
        </h2>
        <p class="mt-6 text-xl leading-8">
          This massive study, the most extensive of its kind, boasts an
          impressive cohort of over 19,000 participants—all aged 50 and above.
          These individuals registered on 'Protect,' a collaborative online
          platform steered by the University of Exeter and King's College
          London. With the venue hosting over 22,000 users, it's expanding its
          research wings to the U.S. and Hong Kong.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Deciphering the Data: Sudoku
        </h2>
        <p class="mt-6 text-xl leading-8">
          Analyzed data, based on self-reported frequency, showed that those
          engaging in numerical puzzles like Sudoku regularly exhibited
          cognitive abilities on par with individuals significantly younger. For
          instance, avid puzzlers—those solving more than once daily—showcased
          grammatical reasoning abilities equivalent to someone ten years their
          junior. Similarly, their short-term memory skills outperformed their
          age by eight years!
        </p>
      </div>
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          A Deep Dive into Crosswords
        </h2>
        <p class="mt-6 text-xl leading-8">
          The second study, centering on the same participants, focused on word
          puzzles, including crosswords and word searches. As with Sudoku, those
          refraining from these word challenges displayed the lowest cognitive
          test scores. Notably, the speed of executing various cognitive tasks,
          especially in grammatical reasoning, set apart the frequent solvers.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1462947760324-15811216b688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Expert Insights
        </h2>
        <p class="mt-6 text-xl leading-8">
          Research leader Anne Corbett from the University of Exeter Medical
          School observed, "The more people immerse themselves in puzzles like
          crosswords and Sudoku, the more robust their memory, attention, and
          reasoning abilities become." She believes that habitual engagement
          with these puzzles might be the key to preserving our brain's vigor
          for an extended period.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          A Final Thought
        </h2>
        <p class="mt-6 text-xl leading-8">
          This compelling research underscores the idea that mental stimulation
          via puzzles, might be more than just fun—it's a boon for our cognitive
          health. So, why not grab a mystery and start sharpening that brain
          today?
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
    id: 6,
    title: 'Mastering the Art of Sudoku: Advanced Techniques Explained',
    href: 'blog-how-solve',
    description:
      'Sudoku, a captivating game of logic and number placement, has been a long-standing favorite for intellectual stimulation. Originating from Japan, its objective appears simple: fill a 9x9 grid, broken down into 3x3 boxes, so each row, column, and individual 3x3 box contains the numbers 1-9 without repetition.',
    imageUrl:
      'https://images.unsplash.com/photo-1676282824476-ed6148e7c28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
  {
    id: 15,
    title: 'Mastering Sudoku: From Basics to Advanced Techniques',
    href: 'blog-master-sudoku',
    description:
      "Sudoku may seem daunting due to its numerical interface, but it's not a math game. Even those who aren't arithmetically inclined can excel at Sudoku.",
    imageUrl:
      'https://images.unsplash.com/photo-1622643048696-883eafe4d8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80',
  },
];
</script>

<style lang="scss" scoped></style>
