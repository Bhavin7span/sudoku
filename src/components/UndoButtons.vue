<template>
  <div
    class="grid md:grid-cols-2 grid-cols-4 md:gap-4 gap-[18px] xl:mt-8 md:mt-12 mt-5"
  >
    <div>
      <button
        @click="handleUndo()"
        aria-label="Undo"
        class="font-lato font-medium xl:text-2xl lg:text-xl md:text-base bg-blue-1500 hover:bg-blue-1400 lg:w-36 md:w-[104px] w-full lg:h-14 md:h-10 h-[72px] flex items-center rounded-lg md:shadow-6xl shadow-16xl text-white justify-center pb-2"
      >
        <img
          :src="getImg('images/undo-icon.svg')"
          class="inline-block md:mr-2 w-[28px] h-[28px]"
          alt=""
        /><span class="md:block hidden">Undo</span>
      </button>
    </div>
    <div>
      <button
        aria-label="Erase"
        @click="handleErase()"
        class="font-lato font-medium xl:text-2xl lg:text-xl md:text-base bg-blue-1500 hover:bg-blue-1400 lg:w-36 md:w-[104px] w-full lg:h-14 md:h-10 h-[72px] flex items-center rounded-lg md:shadow-6xl shadow-16xl text-white justify-center pb-2"
      >
        <img
          :src="getImg('images/erase-icon.svg')"
          class="inline-block md:mr-2 w-[28px] h-[28px]"
          alt=""
        /><span class="md:block hidden">Erase</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/game';
import { getImg } from '@/utils/';

const store = useGameStore();

const handleUndo = () => {
  store.undoGameHistory();
};

const handleErase = () => {
  if (store.SELECTED_POS !== null) {
    store.GAME_PIECES[store.SELECTED_POS] = '';
  }
};
</script>

<style lang="scss" scoped></style>
