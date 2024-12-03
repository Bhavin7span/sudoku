<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Can Brain Training Combat Cognitive Decline?
      </h1>
      <p class="mt-6 text-xl leading-8">
        Is there any truth to the idea that daily sudoku could be a defense
        against dementia? According to expert
        <a
          href="https://www.hsph.harvard.edu/profile/mohammad-arfan-ikram/"
          target="_blank"
          >Arfan Ikram</a
        >, these mental exercises should not be dismissed.
      </p>
      <p class="mt-6 text-xl leading-8">
        For those concerned about memory lapses and cognitive degradation,
        here's a recommendation: pick up a crossword, install a
        language-learning app, or delve into Sudoku. Termed "brain training,"
        these cognitive exercises have the potential to bolster the mind against
        forgetfulness, says Arfan Ikram, head of neuroepidemiological research
        at Erasmus University Medical Center. But, he cautions, the key is to
        begin early. Once dementia manifests, these exercises can't retrieve
        what's already lost.
      </p>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1595001918824-83250c5f0599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iHeartSudoku image"
      />
      <p class="mt-6 text-xl leading-8">
        Ikram explains this using the principle of 'cognitive reserve.' Think of
        it as the brain's safety net, shielding it from the wear and tear of
        life. "Much like physical exertion builds muscles, cognitive challenges
        fortify the brain. This fortification, or reserve, developed early in
        life, provides resilience against dementia in later years," elucidates
        Ikram.
      </p>
      <div class="mt-10">
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          The Role of Mental Stimulation
        </h2>
        <p class="mt-6 text-xl leading-8">
          So, what does 'brain training' entail? Apart from formal education,
          which Ikram identifies as foundational, it can range from learning
          musical instruments like the piano to mastering multiple languages.
          Even an intellectually demanding profession, akin to a taxi driver who
          has committed an entire city's streets to memory or a mechanic
          proficient in engine assembly, contributes to this.
        </p>
      </div>
      <img
        class="aspect-video rounded-xl bg-gray-50 object-cover mt-16"
        src="https://images.unsplash.com/photo-1541311693815-16e1241a0381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="iheartsudoku image"
      />
      <div class="mt-16">
        <p class="mt-6 text-xl leading-8">
          In the EU-funded ORACLE project, Ikram analyzed the brains of over
          40,000 individuals, searching for early indicators of cognitive
          decline. He emphasizes, "Any activity that intellectually engages you
          bolsters your cognitive reserve. The more reserves you possess, the
          better cognitive performance you can expect as you grow older." And
          starting early is vital.
        </p>
        <p class="mt-6 text-xl leading-8">
          "Engaging in physical or mental exercises at 70 doesn't yield the same
          dividends as starting at 20," Ikram points out. However, he also
          stresses the importance of taking up brain training at any age. He
          parallels physical fitness and investment, saying, "It's always better
          late than never." What's critical is being proactive in brain
          training. After all, while it can shield the mind from further loss,
          it can't retrieve memories or skills that have vanished.
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
    id: 8,
    title: 'Mastering Sudoku: Strategies to Elevate Your Game',
    href: 'blog-sudoku-strategies',
    description:
      "Sudoku, the enthralling logic puzzle, offers both challenge and delight. Regardless of whether you're a novice or a seasoned enthusiast, there are nuanced tactics to elevate your game play.",
    imageUrl:
      'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
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
