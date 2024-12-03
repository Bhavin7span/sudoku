<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Brain Boosters: The Scientifically Proven Benefits of Sudoku
      </h1>
      <p class="mt-6 text-xl leading-8">
        Sudoku more than just a numbers game, is a cerebral powerhouse. At its
        core, it stimulates neuron activity, demanding intense concentration and
        memory skills. The following delves into the science-backed benefits of
        this captivating puzzle.
      </p>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1595001918824-83250c5f0599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iHeartSudoku image"
      />
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          A Glimpse Into Sudoku's Past
        </h2>
        <p class="mt-6 text-xl leading-8">
          While many believe Sudoku's origins lie in the United States, it found
          its stride and widespread popularity upon reaching Japanese shores.
          This puzzle challenges players to fill a 9x9 grid, divided into 3x3
          sub-grids, using numbers 1 through 9. Each grid has specific numbers
          pre-filled, acting as clues to help complete the puzzle. With varying
          levels of difficulty, Sudoku appeals to beginners and pros alike.
          Interestingly, one need not be a math wizard to enjoy it - Sudoku
          tests logic more than arithmetic prowess.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1541311693815-16e1241a0381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Patience is Key
        </h2>
        <p class="mt-6 text-xl leading-8">
          As any Sudoku enthusiast knows, completing even a single puzzle can be
          time-consuming. However, with persistence and calm, proficiency speeds
          up over time.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Key Cognitive Skills Enhanced by Sudoku
        </h2>
        <ol class="list-decimal pl-6 mt-6">
          <li class="mb-1">
            <b>Perception, Memory, and Logic:</b> Beyond merely being a fun
            pastime, Sudoku hones various skills - from perception and memory to
            logic and coordination. Engaging in Sudoku also fosters patience, a
            critical asset when tackling more challenging levels.
          </li>
          <li class="mb-1">
            <b>Stimulation of Logical Thinking:</b> Logical thinking enables us
            to discern relationships, differences, and environmental patterns.
            Sudoku, with its inherent mathematical challenges, accentuates
            logical-mathematical reasoning.
          </li>
          <li class="mb-1">
            <b>Fast Thinking:</b> As you progress from simpler to intricate
            Sudoku puzzles, you'll notice an acceleration in your
            problem-solving speed, enhancing your rapid-thinking capabilities.
          </li>
          <li class="mb-1">
            <b>Enhanced Concentration:</b> A prerequisite for success in Sudoku
            is sharp concentration - which is essential to avoid number
            duplication or misplacement. Various studies have even incorporated
            Sudoku into classroom activities, observing it as an effective tool
            for boosting students' attention spans.
          </li>
          <li class="mb-1">
            <b>Problem-Solving Prowess:</b> Initial forays into Sudoku can be
            daunting. However, persistently grappling with its intricacies
            refines your problem-solving acumen.
          </li>
          <li class="mb-1">
            <b>Improved Cognitive Functions:</b> Aging can impact cognitive
            functionality. However, research involving adults aged 50-93 found
            that regular engagement with number puzzles, like Sudoku, positively
            correlates with cognitive function quality.
          </li>
          <li class="mb-1">
            <b>Stress Relief:</b> In today's bustling world, mental overwork is
            common, resulting in stress that adversely affects our overall
            health. Enter Sudoku - a simple yet profound escape. A brief Sudoku
            break can rejuvenate the mind, offering a refreshing pause before
            plunging back into daily tasks.
          </li>
        </ol>
      </div>
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Brain Workouts: An Investment in Well-being
        </h2>
        <p class="mt-6 text-xl leading-8">
          Consistent mental stimulation - like the challenge posed by Sudoku -
          enhances brain function and fortifies against cognitive decline.
          Engaging in "brain gymnastics" can offer increased resistance against
          memory issues and promote overall mental well-being.
        </p>
      </div>
      <div class="mt-16">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Sudoku: A Lifelong Cognitive Companion
        </h2>
        <p class="mt-6 text-xl leading-8">
          Aware of Sudoku's myriad brain benefits, one can only wonder about the
          compounded advantages one had started in childhood. But remember,
          there is always time to embark on this journey or introduce it to
          younger generations. Beyond merely sharpening minds, Sudoku could
          elevate the quality of life for years to come.
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
    id: 4,
    title: 'The Cognitive Power of Crosswords and Sudoku: More Than Just Games',
    href: 'blog-could-crosswords',
    description:
      "Attention, puzzle enthusiasts! Whether you're a devotee of Sudoku, a crossword enthusiast, or enjoy both, there's fascinating news for you. Recent groundbreaking research reveals the potentially remarkable impact of these brain teasers on seniors' cognitive functions.",
    imageUrl:
      'https://images.unsplash.com/photo-1631191768010-4f63af7c5a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
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
