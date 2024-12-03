<template>
  <footer
    class="fixed bottom-0 w-screen z-50 py-4 mt-12 border-t bg-blue-1000 border-gray-1000"
  >
    <section class="flex justify-center items-center max-w-[1440px] mx-auto">
      <router-link :to="{ name: 'PrivacyPolicy' }">
        <div class="text-sm text-green-1000 mr-5">Privacy Policy</div>
      </router-link>
      <router-link :to="{ name: 'Disclaimer' }">
        <div class="text-sm text-green-1000 mr-5">Disclaimer</div>
      </router-link>
      <router-link :to="{ name: 'About' }">
        <div class="text-sm text-green-1000 mr-5">About Us</div>
      </router-link>
      <router-link :to="{ name: 'Terms' }">
        <div class="text-sm text-green-1000">Terms and Conditions</div>
      </router-link>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
