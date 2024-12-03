<template>
  <div class="bg-white py-2 border-gray-200 border-t pt-10">
    <div class="mx-auto">
      <div class="mx-auto lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Read More
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          More Great Article To Read...
        </p>
      </div>
      <div
        class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex flex-col items-start justify-start"
        >
          <div>
            <img
              :src="post.imageUrl"
              :alt="post.title"
              class="aspect-video rounded-xl bg-gray-50 object-cover"
            />
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-blue-1000 hover:text-blue-1400"
            >
              <router-link :to="{ name: post.href }">
                <span class="absolute inset-0" />
                {{ post.title }}
              </router-link>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
const { posts } = toRefs(props);
</script>

<style scoped></style>
