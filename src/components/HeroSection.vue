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
        isDarkMode ? 'bg-black opacity-70' : 'bg-white opacity-50'
      ]"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto text-center relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="isDarkMode ? 'text-white' : 'text-[#111111]'">
        Streamline Your Document Management
      </h1>
      <p class="text-xl mb-8" :class="isDarkMode ? 'text-[#c9c9c9]' : 'text-[#2a2a2a]'">
        Docutrack helps you organize, track, and collaborate on your documents effortlessly.
      </p>
      <button class="bg-[#4ade80] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#26cf64] transition-colors">
        Get Started
      </button>
    </div>
  </section>
</template>

<script setup>

const { isDarkMode } = defineProps(['isDarkMode'])
</script>
