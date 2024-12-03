<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        The Evolution of Sudoku: A Confluence of Math, Architecture, and Media
      </h1>
      <p class="mt-6 text-xl leading-8">
        From the intricate mind of an 18th-century Swiss mathematician to a New
        York newspaper column, the journey of Sudoku is as fascinating as the
        puzzle itself. Inspired by the Latin square Leonhard Euler meticulously
        studied, this intriguing numbered game took a contemporary twist thanks
        to American architect Howard Garns in 1979. Initially introduced as
        "Number Place" in a New York newspaper, it didn't immediately capture
        audiences.
      </p>
      <p class="mt-6 text-xl leading-8">
        For those concerned about memory lapses and cognitive degradation,
        here's a recommendation: pick up a crossword, install a
        language-learning app, or delve into Sudoku. Termed "brain training",
        these cognitive exercises have the potential to bolster the mind against
        forgetfulness, says Arfan Ikram, head of neuroepidemiological research
        at Erasmus University Medical Center. But, he cautions, the key is to
        begin early. Once dementia manifests, these exercises can't retrieve
        what’s already been lost.
      </p>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1621440318464-72633426377b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          Fast forward to the 1980s, and enter Japan's renowned game publisher,
          Nikoli. They breathed new life into the game, rebranding it with a
          catchy title: "Suji wa dokushin ni kagiru," which was eventually
          shortened to the now-iconic "Sudoku." But the global Sudoku wave began
          when Wayne Gould, a retired New Zealand judge in Asia, stumbled upon
          the game in 1997. He crafted his own versions with a newfound passion
          and even developed a tailored computer program to aid his venture.
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
    id: 3,
    title: 'Boosting Sudoku Performance with CBD: A Mind-Body Approach',
    href: 'blog-combined-mental',
    description:
      "For those concerned about memory lapses and cognitive degradation, here's a recommendation: pick up a crossword, install a language-learning app, or delve into Sudoku.",
    imageUrl:
      'https://images.unsplash.com/photo-1579600161224-cac5a2971069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
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
    id: 14,
    title: 'Sharpen Your Mind with Sudoku: More Than Just a Puzzle',
    href: 'blog-sharpen-mind',
    description:
      'Engaging in Sudoku is a delightful pastime and a mental workout, promising a sense of accomplishment after every completed grid. This universally loved brain game is entertaining and can be a potent tool in keeping cognitive decline at bay, fostering a novel way of thinking.',
    imageUrl:
      'https://images.unsplash.com/photo-1528918230037-b8e9a8d403f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },
];
</script>

<style lang="scss" scoped></style>
