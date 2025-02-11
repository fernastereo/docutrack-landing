<script setup>
  import { RouterLink } from 'vue-router';

</script>
<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-32 ">
    <div class="text-center">
      <h2 class="text-5xl font-semibold text-green-600">404</h2>
      <h1 class="mt-4 text-7xl font-semibold text-gray-900">Page not found</h1>
      <p class="mt-6 text-lg font-medium text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10">
        <RouterLink to="/" class="rounded-md bg-green-600 px-3 py-3 font-semibold text-white hover:bg-green-500">Go back home</RouterLink>
      </div>
    </div>
  </main>
</template>
