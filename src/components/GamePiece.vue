<template>
  <li
    class="square"
    :class="{
      light: isLight,
      dark: isDark,
      wrong: isWrong,
    }"
  >
    <input class="square-input" />
  </li>
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

const correct = computed(() => {
  return (
    store.GAME_PIECES[pos.value] !== '' &&
    store.GAME_PIECES[pos.value] === store.SOLUTION[pos.value] &&
    !starter.value
  );
});
const isWrong = computed(() => {
  return (
    store.GAME_PIECES[pos.value] !== '' &&
    store.GAME_PIECES[pos.value] !== store.SOLUTION[pos.value] &&
    !starter.value
  );
});
const isLight = computed(() => {
  return gamePiece.value === 'light' && !starter.value && !correct.value;
});
const isDark = computed(() => {
  return gamePiece.value === 'dark' && !starter.value && !correct.value;
});
</script>

<style scoped>
.square {
  padding-bottom: 0.5rem;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  margin-left: 3.5px;
  margin-right: 3.5px;
}

.square-input {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: transparent;
  height: 24px;
}

.light {
  --tw-bg-opacity: 1;
  background-color: rgb(96 97 188 / var(--tw-bg-opacity));
  --tw-shadow: inset 0px -8px 0px #414395;
  --tw-shadow-colored: inset 0px -8px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark {
  --tw-bg-opacity: 1;
  background-color: rgb(66 67 146 / var(--tw-bg-opacity));
  --tw-shadow: inset 0px -6px 0px #313377;
  --tw-shadow-colored: inset 0px -6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.wrong {
  --tw-bg-opacity: 1;
  background-color: rgb(255 144 144 / var(--tw-bg-opacity));
}

.dark.wrong,
.light.wrong {
  --tw-shadow: inset 0px -8px 0px #d97878;
  --tw-shadow-colored: inset 0px -8px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.square-input.light-given {
  background-image: url('../public/images/lines.png');
}

.square-input.dark-given {
  background-image: url('../public/images/line-3.png');
}

@media (min-width: 575px) {
  .square {
    height: 51px;
    width: 51px;
  }

  .square-input {
    height: 45px;
    width: 51px;
  }
}

@media (min-width: 744px) {
  .square {
    height: 40px;
    width: 40px;
  }

  .square-input {
    height: 32px;
    width: 40px;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 992px) {
  .square {
    margin-left: 7px;
    margin-right: 7px;
  }

  .square-input {
    height: 31px;
    font-size: 23px;
  }
}

@media (min-width: 1200px) {
  .square {
    height: 57px;
    width: 57px;
  }

  .square-input {
    height: 50px;
    width: 57px;
    font-size: 32px;
  }
}

@media (min-width: 1400px) {
  .square {
    height: 60px;
    width: 60px;
  }

  .square-input {
    height: 52px;
    width: 60px;
  }
}
</style>
