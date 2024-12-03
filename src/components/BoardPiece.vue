<template>
  <div
    class="square"
    v-bind:class="{
      isDarkClass: isDark,
      isLightClass: isLight,
      isShadedClass: isShaded,
      isIncorrectClass: incorrect,
    }"
  >
    <input
      type="text"
      aria-label="board piece"
      class="square-input"
      v-bind:class="{
        'light-starter': isLight && starter,
        'dark-starter': isDark && starter,
      }"
      @click="handleClick"
      @input="handleInput"
      :disabled="store.EMPTY_GAME || store.GAME_LOST"
      :readonly="starter"
      v-model="store.GAME_PIECES[pos]"
    />
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/game';
import { computed, toRefs } from 'vue';

const store = useGameStore();

const props = defineProps({
  starter: {
    type: Boolean,
    required: false,
    default: false,
  },
  pos: {
    type: Number,
    required: true,
  },
  row: {
    type: Number,
    required: true,
  },
  col: {
    type: Number,
    required: true,
  },
  gamePiece: {
    type: String,
    required: true,
  },
  selectedRow: {
    type: Number,
    required: false,
  },
  selectedCol: {
    type: Number,
    required: false,
  },
});
const { starter, pos, row, col, gamePiece, selectedRow, selectedCol } =
  toRefs(props);

const incorrect = computed(() => {
  return (
    store.GAME_PIECES[pos.value] !== '' &&
    store.GAME_PIECES[pos.value] !== store.SOLUTION[pos.value] &&
    !starter.value
  );
});
const isLight = computed(() => {
  return gamePiece.value === 'light';
});
const isDark = computed(() => {
  return gamePiece.value === 'dark';
});
const isShaded = computed(() => {
  return row.value === selectedRow.value || col.value === selectedCol.value;
});

const compareArrays = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);

const handleClick = () => {
  store.SELECTED_ROW = row.value;
  store.SELECTED_COL = col.value;
  store.SELECTED_POS = starter.value ? null : pos.value;
};

const handleInput = () => {
  const max_chars = 1;

  if (store.GAME_PIECES[pos.value].length > max_chars) {
    store.GAME_PIECES[pos.value] = store.GAME_PIECES[pos.value].slice(1);
  }

  store.setGameHistory({ pos: pos.value, value: store.GAME_PIECES[pos.value] });

  if (
    store.GAME_PIECES[pos.value] !== '' &&
    store.GAME_PIECES[pos.value] !== store.SOLUTION[pos.value] &&
    !starter.value
  ) {
    store.setMistakes();
  }

  if (compareArrays(store.GAME_PIECES, store.SOLUTION)) {
    store.setGameStatus(true);
  }
};
</script>

<style>
.square {
  @apply 2xl:h-[60px] xl:h-[57px] md:h-[40px] sm:h-[51px] h-[30px] 2xl:w-[60px] xl:w-[57px] md:w-[40px] sm:w-[51px] w-[30px] pb-2 rounded-[4px] lg:mx-[7px] mx-[3.5px];
}

.square-input {
  @apply bg-cover 2xl:h-[52px] xl:h-[50px] lg:h-[31px] md:h-[32px] sm:h-[45px] h-[24px] flex items-center justify-center 2xl:w-[60px] xl:w-[57px] md:w-[40px] sm:w-[51px] w-[30px] rounded-[4px] bg-no-repeat bg-transparent border-transparent text-center font-lato text-white font-semibold xl:text-[32px] lg:text-[23px] md:text-xl p-0 focus:border-solid focus:border-2 focus:border-green-1000 focus:rounded-[4px];
}

.isLightClass {
  @apply bg-blue-1400 md:shadow-4xl shadow-14xl;
}

.isDarkClass {
  @apply bg-blue-1500 md:shadow-5xl shadow-15xl;
}

.isShadedClass {
  @apply bg-shaded-1000;
}

.isIncorrectClass {
  @apply bg-orange-1000 md:shadow-8xl shadow-18xl;
}

.light-starter {
  @apply bg-[url('../assets/images/lines.png')] bg-cover;
}

.dark-starter {
  @apply bg-[url('../assets/images/line-3.png')] bg-cover;
}
</style>
