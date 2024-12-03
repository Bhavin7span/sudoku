<template>
  <Modal size="md" :escapable="false" persistent @close="emit('close')">
    <template #header>
      <div class="flex items-center">
        <h1
          class="lg:text-4xl text-[32px] font-lato font-bold text-center text-blue-1000"
        >
          Game Over!
        </h1>
      </div>
    </template>

    <template #body>
      <div class="flex">
        <p class="text-blue-1000 text-lg mb-7">
          Oops! You've made 3 mistakes. Don't worry, everyone stumbles now and
          then. Remember, every game is a new opportunity to improve.
        </p>
      </div>
      <div class="flex">
        <div class="flex-1">
          <StartButtons></StartButtons>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { Modal } from 'flowbite-vue';
import StartButtons from './StartButtons.vue';

const emit = defineEmits(['close', 'newGame']);
</script>

<style lang="scss" scoped></style>
