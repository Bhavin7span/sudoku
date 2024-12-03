<template>
  <div class="md:-mx-2.5 lg:mt-8 mt-5 md:block flex">
    <ul class="flex mb-5 md:w-auto w-full">
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('1')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          1
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('2')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          2
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('3')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          3
        </button>
      </li>
    </ul>
    <ul class="flex mb-5 md:w-auto w-full">
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('4')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          4
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('5')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          5
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('6')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          6
        </button>
      </li>
    </ul>
    <ul class="flex mb-5 md:w-auto w-full">
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('7')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          7
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('8')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          8
        </button>
      </li>
      <li class="keypad-button">
        <button
          @click="handleKeypadEntry('9')"
          class="bg-cover 2xl:h-[80px] lg:h-[74px] h-[54px] flex items-center justify-center 2xl:w-[88px] lg:w-[87px] md:w-16 w-full bg-no-repeat"
        >
          9
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/game';

const store = useGameStore();

const handleKeypadEntry = (e) => {
  if (store.SELECTED_POS !== null) {
    store.GAME_PIECES[store.SELECTED_POS] = e;
  }
};
</script>

<style lang="scss" scoped>
.keypad-button {
  @apply bg-blue-1500 hover:bg-blue-1400  2xl:h-[88px] lg:h-[82px] h-16 2xl:w-[88px] lg:w-[87px] md:w-16 w-full md:shadow-5xl shadow-15xl rounded-[4px] font-lato font-semibold xl:text-[32px] lg:text-[23px] md:text-xl text-white lg:mx-2.5 md:mx-2 mx-[3.5px];
}
</style>
