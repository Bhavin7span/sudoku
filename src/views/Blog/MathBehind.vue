<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        The Mathematical Mystique of Sudoku
      </h1>
      <p class="mt-6 text-xl leading-8">
        We've all seen those engrossed students, armed with a newspaper, busily
        filling Sudoku grids right before class or sometimes during. Sudoku
        isn't just a game—it's a compelling puzzle that intertwines with
        mathematics and computer science.
      </p>
      <p class="mt-6 text-xl leading-8">
        For the curious mind, several pressing questions arise:
      </p>
      <ul class="list-disc pl-6">
        <li class="mb-1">How many unique Sudoku puzzles exist out there?</li>
        <li class="mb-1">
          Can we always complete a partially filled grid uniquely?
        </li>
        <li class="mb-1">
          Is there a computer algorithm that can crack every Sudoku challenge?
        </li>
        <li class="mb-1">
          How do newspapers and magazines continuously source their Sudoku
          puzzles?
        </li>
      </ul>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        alt="iheartsudoku image"
      />
      <p class="mt-16 text-xl leading-8">
        While we aim to address these captivating queries, let's also delve into
        history. The world of Sudoku, or at least games similar in nature, owes
        a debt to the French mathematician Gaston Tarry. Tarry was a self-taught
        math enthusiast born in 1843 and hailing from Villefranche-de-Rouergue
        in Aveyron. His explorations spanned Arithmetic, Combinatorics, and
        Geometry. Impressively, he answered challenges that even the legendary
        L. Euler left unanswered.
      </p>
      <p class="mt-6 text-xl leading-8">
        Despite Tarry's low profile in mainstream mathematical circles,
        especially in the Midi-Pyrénées region, his work undeniably resonates
        with today's grid-based games like Sudoku. So, let's take a moment to
        appreciate Tarry's legacy and delve deeper into the fascinating bridge
        between Sudoku and the world of mathematics.
      </p>
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
    id: 3,
    title: 'Boosting Sudoku Performance with CBD: A Mind-Body Approach',
    href: 'blog-combined-mental',
    description:
      "For those concerned about memory lapses and cognitive degradation, here's a recommendation: pick up a crossword, install a language-learning app, or delve into Sudoku.",
    imageUrl:
      'https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  },
  {
    id: 9,
    title: 'Sudoku Exercises Will Not Make You Smarter',
    href: 'blog-sudoku-exercises',
    description:
      'Is there any truth to the idea that daily sudoku could be a defense against dementia? According to expert Arfan Ikram these mental exercises should not be dismissed.',
    imageUrl:
      'https://images.unsplash.com/photo-1621508638997-e30808c10653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
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
