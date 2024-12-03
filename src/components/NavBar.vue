<template>
  <header
    class="fixed top-0 w-full py-4 mb-8 z-50 bg-blue-1000 border-b border-gray-1000"
  >
    <nav class="max-w-[1440px] 2xl:px-[72px] xl:px-[38px] md:px-6 px-4 mx-auto">
      <div class="md:hidden flex justify-between items-center mx-auto">
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.875 19.7826H5.07812C4.46875 19.7826 4 20.2908 4 20.8913C4 21.538 4.46875 22 5.07812 22H23.875C24.4844 22 25 21.538 25 20.9375C25 20.2908 24.4844 19.7826 23.875 19.7826ZM23.875 5H5.07812C4.46875 5 4 5.50815 4 6.1087C4 6.66304 4.46875 7.21739 5.07812 7.21739H23.875C24.4844 7.21739 25 6.75543 25 6.15489C25 5.60054 24.4844 5 23.875 5ZM23.875 12.3913H5.07812C4.46875 12.3913 4 12.8995 4 13.5C4 14.1467 4.46875 14.6087 5.07812 14.6087H23.875C24.4844 14.6087 25 14.1467 25 13.5C25 12.8995 24.4844 12.3913 23.875 12.3913Z"
              fill="white"
            />
          </svg>
        </button>
        <router-link :to="{ name: 'Home' }">
          <div class="text-xl text-green-1000 sm:justify-end">iHeartSudoku</div>
        </router-link>
      </div>
      <div
        class="items-center justify-between hidden md:flex w-full"
        id="navbar-cta"
      >
        <router-link :to="{ name: 'Home' }">
          <div class="text-xl text-green-1000 sm:justify-end">iHeartSudoku</div>
        </router-link>
        <ul class="flex flex-col md:flex-row">
          <li class="mx-8">
            <router-link
              :to="{ name: 'Instructions' }"
              class="block md:my-0 my-3 font-lato text-white font-medium lg:text-lg text-sm tracking-wider"
            >
              Instructions
            </router-link>
          </li>
          <li class="mx-8">
            <router-link
              :to="{ name: 'Blog' }"
              class="block md:my-0 my-3 font-lato text-white font-medium lg:text-lg text-sm tracking-wider"
            >
              Blog
            </router-link>
          </li>
          <li class="mx-8">
            <router-link
              :to="{ name: 'Home' }"
              class="block md:my-0 my-3 font-lato text-white font-medium lg:text-lg text-sm tracking-wider"
            >
              Home
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>
