<template>
  <section id="hero" class="relative py-32 md:py-60 px-4 overflow-hidden">
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
        {{ content.headline }}
      </h1>
      <p class="text-lg md:text-xl mb-6" :class="isDarkMode ? 'text-base-200' : 'text-base-300'">
        {{ content.subHeadline1 }}
      </p>
      <p class="text-md md:text-xl mb-8">
        <span class="font-bold">{{ content.subHeadline2.bolded }}</span> {{ content.subHeadline2.unbolded }}</p>
      <WaitingList :isDarkMode="isDarkMode" />
    </div>
  </section>
</template>

<script setup>
  import WaitingList from '@/components/WaitingList.vue'
  import heroContent from '@/data/heroContent.json'
  import { useLanguage } from '@/composables/useLanguage';
  import { computed } from 'vue';

  const { language } = useLanguage()
  const content = computed(() => heroContent[language.value])
  
  const { isDarkMode } = defineProps(['isDarkMode'])
</script>
