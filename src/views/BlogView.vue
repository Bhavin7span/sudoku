<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the Blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Puzzle Your Mind, One Number at a Time!
        </p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article
            v-for="post in posts"
            :key="post.id"
            class="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div
              class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
            >
              <img
                :src="post.imageUrl"
                alt=""
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div
                class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
              />
            </div>
            <div>
              <div class="relative max-w-xl">
                <h3
                  class="mt-3 text-xl leading-6 font-semibold text-blue-1000 hover:text-blue-1400"
                >
                  <router-link :to="{ name: post.href }">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </router-link>
                </h3>
                <p class="mt-5 text-lg leading-6 text-gray-600">
                  {{ post.description }}
                </p>
              </div>
              <div class="mt-6 flex border-t border-gray-300 pt-6">
                <router-link :to="{ name: post.href }">
                  <button
                    class="text-white flex items-center justify-center rounded-[37px] font-lato font-medium text-base bg-blue-1000 hover:bg-blue-1400 py-[8px] px-6"
                  >
                    Continue Reading
                  </button>
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    id: 2,
    title: 'Can brain training slow cognitive decline?',
    href: 'blog-can-brain',
    description:
      'Is there any truth to the idea that daily sudoku could be a defense against dementia? According to expert Arfan Ikram, these mental exercises should not be dismissed.',
    imageUrl:
      'https://images.unsplash.com/photo-1629709305580-5a833dc72d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
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
    id: 4,
    title: 'The Cognitive Power of Crosswords and Sudoku: More Than Just Games',
    href: 'blog-could-crosswords',
    description:
      "Attention, puzzle enthusiasts! Whether you're a devotee of Sudoku, a crossword enthusiast, or enjoy both, there's fascinating news for you. Recent groundbreaking research reveals the potentially remarkable impact of these brain teasers on seniors' cognitive functions.",
    imageUrl:
      'https://images.unsplash.com/photo-1631191768010-4f63af7c5a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
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
    id: 6,
    title: 'Mastering the Art of Sudoku: Advanced Techniques Explained',
    href: 'blog-how-solve',
    description:
      'Sudoku, a captivating game of logic and number placement, has been a long-standing favorite for intellectual stimulation. Originating from Japan, its objective appears simple: fill a 9x9 grid, broken down into 3x3 boxes, so each row, column, and individual 3x3 box contains the numbers 1-9 without repetition.',
    imageUrl:
      'https://images.unsplash.com/photo-1676282824476-ed6148e7c28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
    id: 8,
    title: 'Mastering Sudoku: Strategies to Elevate Your Game',
    href: 'blog-sudoku-strategies',
    description:
      "Sudoku, the enthralling logic puzzle, offers both challenge and delight. Regardless of whether you're a novice or a seasoned enthusiast, there are nuanced tactics to elevate your game play.",
    imageUrl:
      'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
    id: 10,
    title: 'Sudoku for Kids: A Fun Puzzle Activity',
    href: 'blog-sudoku-children',
    description:
      'If your child is a puzzle enthusiast, they\'ll love the classic game of Sudoku tailored for their age! But first, a brief history lesson: although "Sudoku" might sound Japanese, its inventor was, surprisingly, French.',
    imageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
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
  {
    id: 12,
    title:
      'The Evolution of Sudoku: A Confluence of Math, Architecture, and Media',
    href: 'blog-sudoku-one',
    description:
      'From the intricate mind of an 18th-century Swiss mathematician to a New York newspaper column, the journey of Sudoku is as fascinating as the puzzle itself.',
    imageUrl:
      'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
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
  {
    id: 14,
    title: 'Sharpen Your Mind with Sudoku: More Than Just a Puzzle',
    href: 'blog-sharpen-mind',
    description:
      'Engaging in Sudoku is a delightful pastime and a mental workout, promising a sense of accomplishment after every completed grid. This universally loved brain game is entertaining and can be a potent tool in keeping cognitive decline at bay, fostering a novel way of thinking.',
    imageUrl:
      'https://images.unsplash.com/photo-1528918230037-b8e9a8d403f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
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
