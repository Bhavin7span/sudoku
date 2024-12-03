<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { onMounted, nextTick, ref } from 'vue';
import { useGameStore } from '@/stores/game';

// import AdsenseBottom from '../components/AdsenseBottom.vue';
// import AdsenseRight from '../components/AdsenseRight.vue';
// import AdsenseTop from '../components/AdsenseTop.vue';
import ConfettiExplosion from 'vue-confetti-explosion';
import GameBoard from '../components/GameBoard.vue';
import KeyPad from '../components/KeyPad.vue';
import LargeTimer from '../components/LargeTimer.vue';
import LostGameModal from '../components/LostGameModal.vue';
import SmallTimer from '../components/SmallTimer.vue';
import StartButtons from '../components/StartButtons.vue';
import UndoButtons from '../components/UndoButtons.vue';

const store = useGameStore();

const { GAME_WON, GAME_LOST, SHOW_LOST_GAME_MODAL } = storeToRefs(store);
const visible = ref(false);
const windowHeight = ref(window.innerHeight);

watch(GAME_WON, () => {
  expolode();
});

watch(GAME_LOST, (newVal) => {
  store.setShowLostGameModal(newVal);
});

onMounted(() => {
  store.startGame('empty');
  visible.value = false;
});

const expolode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

const closeLostGameModal = () => {
  store.setShowLostGameModal(false);
};
</script>

<template>
  <section class="md:mb-[66px] mb-8 h-screen">
    <div class="flex justify-center">
      <ConfettiExplosion v-if="visible" :stageHeight="windowHeight" />
    </div>
    <div
      class="max-w-[1440px] mx-auto 2xl:px-[72px] xl:px-[38px] lg:px-8 md:px-6 px-4"
    >
      <!-- <AdsenseTop></AdsenseTop> -->
      <div>
        <div class="flex flex-col justify-center items-center">
          <StartButtons></StartButtons>
          <div class="md:flex">
            <div
              class="2xl:w-[688px] xl:w-[660px] lg:w-[520px] md:w-[450px] sm:w-[545px] w-[340px]"
            >
              <SmallTimer></SmallTimer>
              <div
                class="bg-blue-1300 lg:p-[18px] sm:p-[14px] p-[11px] pb-2.5 rounded-2xl xl:mt-[30px] mt-2.5"
              >
                <!-- BOARD STARTS HERE -->
                <GameBoard> </GameBoard>
              </div>
            </div>
            <div class="lg:ml-10 md:ml-7 ml-0 md:mt-[30px] mt-5">
              <div class="md:max-w-[305px] max-w-full w-full">
                <LargeTimer></LargeTimer>
                <UndoButtons></UndoButtons>
                <KeyPad></KeyPad>
              </div>
            </div>
          </div>
          <!-- <AdsenseBottom></AdsenseBottom> -->
        </div>
        <!-- <AdsenseRight></AdsenseRight> -->
      </div>
    </div>
  </section>

  <!-- Lost Game modal -->
  <LostGameModal
    v-if="SHOW_LOST_GAME_MODAL"
    @close="closeLostGameModal"
  ></LostGameModal>
</template>

<style>
</style>
