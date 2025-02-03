<template>
  <section id="hero" class="relative py-60 px-4 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/hero-image-01.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Overlay for better text readability -->
      <div :class="[
        'absolute inset-0',
        isDarkMode ? 'bg-base-400 opacity-70' : 'bg-base-100 opacity-50'
      ]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto text-center relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="isDarkMode ? 'text-base-100' : 'text-base-400'">
        Streamline Your Document Management
      </h1>
      <p class="text-xl mb-8" :class="isDarkMode ? 'text-base-200' : 'text-base-300'">
        Docutrack helps you organize, track, and collaborate on your documents effortlessly.
      </p>
      <button class="bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors">
        Get Started
      </button>
    </div>
  </section>
</template>

<script setup>

const { isDarkMode } = defineProps(['isDarkMode'])
</script>
