<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Sudoku for Kids: A Fun Puzzle Activity
      </h1>
      <p class="mt-6 text-xl leading-8">
        If your child is a puzzle enthusiast, they'll love the classic game of
        Sudoku tailored for their age! But first, a brief history lesson:
        although "Sudoku" might sound Japanese, its inventor was, surprisingly,
        French. The first Sudoku grid debuted on July 6, 1895, in the newspaper
        "La France," credited to an enigmatic M.B. Mayniel. Over a century
        later, this timeless game remains popular among children and adults.
      </p>
      <p class="mt-6 text-xl leading-8">
        In this article, we'll introduce you to seven different types of Sudoku
        puzzles designed especially for kids:
      </p>
      <p class="mt-6 text-xl leading-8">
        <b>1. Classic Sudoku:</b> This is the familiar 9x9 grid version you'd
        often find in magazines.<br />
        <b>2. Easy Sudoku:</b> We've scaled it down for younger children to a
        beginner-friendly 4x4 grid.<br />
        <b>3. Medium Sudoku:</b> It is a slightly challenging 6x6 grid for those
        who've mastered the easy version.<br />
        <b>4. Difficult Sudoku:</b> For older kids ready for a challenge, the
        standard 9x9 grid awaits.<br />
        <b>5. Visual Sudoku:</b> Instead of numbers, these puzzles use images or
        colors. Each row or column must contain each visual just once.<br />
        <b>6. Thematic Sudoku:</b> For thematic events like treasure hunts,
        these Sudokus use images related to the theme of your activity.<br />
        <b>7. Color-based Sudoku:</b> A colorful twist, where each hue replaces
        a number.<br />
        <b>8. Mathematical Sudoku:</b> Introducing arithmetic, these Sudokus
        require solving simple operations (like addition or subtraction) to find
        the correct number for each box.
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Creating Visual Sudokus: A Step-by-Step Guide
        </h2>
        <ul class="list-disc pl-6 mt-6">
          <li class="mb-1">
            <b>Generate Grids:</b> Use the Sudoku generator provided above to
            generate base grids.
          </li>
          <li>
            <b>Replace Numbers with Visuals:</b> Assign an image or color to
            each number. For instance, link number "1" to a specific image, "2"
            to another, and so on.
          </li>
          <li>
            <b>Apply the Conversion:</b> Replace each number in your Sudoku with
            the corresponding image or color.
          </li>
        </ul>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1599666505327-7758b44a9985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Why Sudoku is Beneficial for Kids
        </h2>
        <p class="mt-6 text-xl leading-8">
          Beyond just being fun, Sudoku offers numerous educational perks:
        </p>
        <ul class="list-disc pl-6 mt-6">
          <li class="mb-1">
            <b>Logic Development:</b> Sudoku hones logical thinking. As defined,
            logic is the art of reasoning based on specific hypotheses.
          </li>
          <li>
            <b>Deductive Reasoning:</b>Given certain clues, kids will learn to
            make deductions to solve the puzzle.
          </li>
          <li>
            <b>Math Skills:</b>Sudoku naturally introduces kids to numbers and
            arithmetic, especially when using mathematical Sudokus.
          </li>
          <li>
            <b>Problem-Solving:</b>Sudoku teaches kids that sometimes, initial
            solutions might need re-evaluation. It's a gentle lesson in
            flexibility and re-strategizing.
          </li>
        </ul>
      </div>
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          Ready to dive in? Download our kid-friendly Sudoku templates below and
          embark on a fun, educational journey with your little ones!
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
    id: 6,
    title: 'Mastering the Art of Sudoku: Advanced Techniques Explained',
    href: 'blog-how-solve',
    description:
      'Sudoku, a captivating game of logic and number placement, has been a long-standing favorite for intellectual stimulation. Originating from Japan, its objective appears simple: fill a 9x9 grid, broken down into 3x3 boxes, so each row, column, and individual 3x3 box contains the numbers 1-9 without repetition.',
    imageUrl:
      'https://images.unsplash.com/photo-1676282824476-ed6148e7c28a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
];
</script>

<style lang="scss" scoped></style>
