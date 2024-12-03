<template>
  <div
    class="xl:hidden flex justify-between items-center md:mt-[33px] mt-[18px]"
  >
    <div>
      <div
        class="font-lato font-semibold xl:text-[32px] lg:text-[23px] md:text-xl flex items-center justify-center text-white"
      >
        <img
          v-if="!stopwatch.isRunning && GAME_DIFFICULTY"
          :src="getImg('images/play-btn.svg')"
          class="inline-block mr-3 cursor-pointer"
          alt="start timer"
          @click="stopwatch.start()"
        />
        <img
          v-if="stopwatch.isRunning"
          :src="getImg('images/paused-btn.svg')"
          class="inline-block mr-3 cursor-pointer"
          alt="pause timer"
          @click="stopwatch.pause()"
        />
        <span>{{ stopwatch.hours.toString().padStart(2, '0') }}</span
        >:<span>{{ stopwatch.minutes.toString().padStart(2, '0') }}</span
        >:<span>{{ stopwatch.seconds.toString().padStart(2, '0') }}</span>
      </div>
    </div>
    <div>
      <ul class="flex justify-center items-center">
        <li class="mx-1">
          <h6
            class="font-lato font-medium xl:text-2xl lg:text-xl md:text-base text-gray-1100"
          >
            Mistakes
          </h6>
        </li>
        <li class="mx-1">
          <img
            v-if="MISTAKES >= 1"
            :src="getImg('images/fill-heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
          <img
            v-else
            :src="getImg('images/heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
        </li>
        <li class="mx-1">
          <img
            v-if="MISTAKES >= 2"
            :src="getImg('images/fill-heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
          <img
            v-else
            :src="getImg('images/heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
        </li>
        <li class="mx-1">
          <img
            v-if="MISTAKES >= 3"
            :src="getImg('images/fill-heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
          <img
            v-else
            :src="getImg('images/heart.svg')"
            class="inline-block w-[28px] h-[28px]"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStopwatch } from 'vue-timer-hook';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { getImg } from '@/utils/';

const store = useGameStore();
const { GAME_DIFFICULTY, GAME_WON, GAME_LOST, MISTAKES } = storeToRefs(store);

watch(GAME_DIFFICULTY, () => {
  stopwatch.value.reset(false, 0);
  stopwatch.value.start();
});
watch(GAME_WON, () => {
  stopwatch.value.pause();
});
watch(GAME_LOST, () => {
  stopwatch.value.pause();
});

const stopwatch = ref(useStopwatch(false, 0));
</script>

<style lang="scss" scoped></style>
