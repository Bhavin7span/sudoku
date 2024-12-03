<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Sudoku: A Timeless Brain-Teaser With Ancient Roots
      </h1>
      <p class="mt-6 text-xl leading-8">
        Imagine a puzzle that's a test of your wit and a journey through time
        and culture. Enter Sudoku: not just a grid of numbers but a testament to
        humanity's enduring love for a good challenge.
      </p>
      <p class="mt-6 text-xl leading-8">
        Picture this - a 9x9 grid split into smaller 3x3 blocks. The mission?
        Fill every row, column, and block with numbers from 1 to 9 without
        repetition. Sounds simple? The catch is that only a few cells come
        pre-filled, depending on the puzzle's difficulty, ranging from
        "beginner-friendly" to "daredevil expert".
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          The Origin of Sudoku
        </h2>
        <p class="mt-6 text-xl leading-8">
          Sudoku is an international sensation, but it's more than just a modern
          trend. It's an evolution of an ancient Chinese concept: the "magic
          squares." Dating back to -650 BC, these squares, chronicled in the
          "Book of the Luo River," had rows, columns, and diagonals summing up
          to the same number.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1587093336587-eeca6cb17cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          Our contemporary Sudoku owes its structure to Howard Garnes, an
          American puzzle enthusiast who conceptualized it in the 1970s. It took
          Japan, however, to give it the iconic name "Sudoku" in the 1980s, an
          abbreviation of "numbers must occur only once."
        </p>
        <p class="mt-6 text-xl leading-8">
          One man truly propelled Sudoku to global fame: Wayne Gould. Entranced
          by a Sudoku book in Tokyo in 1997, he dedicated years to devising a
          Sudoku-generating computer program. By 2004, he persuaded the London
          Times to publish his puzzles; the rest is history.
        </p>
      </div>
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          The cognitive benefits of Sudoku are manifold. Apart from enhancing
          analytical prowess, it bolsters concentration levels and fosters
          logical thinking. As players grapple with grid solutions, they often
          juggle multiple possibilities in their heads, inadvertently boosting
          short-term memory. Over time, this practice can even aid long-term
          retention. And for children? It's a golden opportunity to cultivate
          problem-solving skills early on.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Sudoku Captivates The World
        </h2>
        <p class="mt-6 text-xl leading-8">
          Today, Sudoku captivates minds worldwide thanks to its symmetrical
          elegance and universal appeal. Puzzlers can even compete, gauging
          their prowess against defined difficulty levels, adding an edge to the
          game. Researchers, too, have been smitten. Cognitive scientist Jeremy
          Grabbe found that Sudoku engages our working memory, suggesting that
          it might even boost memory in older individuals.
        </p>
        <p class="mt-6 text-xl leading-8">
          Now, with the game featured everywhere, from print to online
          platforms, the next Sudoku enthusiast could be anyone. Perhaps even
          you. After all, in a world full of complexities, who doesn't enjoy the
          satisfaction of solving a neat, orderly grid?
        </p>
        <p class="mt-6 text-xl leading-8">
          So, is Sudoku just a passing trend? As long as minds are eager for a
          challenge, Sudoku's allure isn't fading soon.
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
    id: 7,
    title: 'The Mathematical Mystique of Sudoku',
    href: 'blog-math-behind',
    description:
      "We've all seen those engrossed students, armed with a newspaper, busily filling Sudoku grids right before class or sometimes during. Sudoku isn't just a game—it's a compelling puzzle that intertwines with mathematics and computer science.",
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
