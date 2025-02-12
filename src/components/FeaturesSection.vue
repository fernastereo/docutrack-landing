<template>
  <section id="features" :class="[
    'py-20 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-base-300' : 'bg-base-200'
  ]">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ features.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features.features" :key="feature.title" :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-base-400' : 'bg-base-100'
        ]">
          <component :is="iconComponents[feature.icon]" class="w-12 h-12 text-base-200 mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p :class="isDarkMode ? 'text-primary-100' : 'text-base-300'">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Folder, FileClock, Bot, BellRing, UsersRound, Share2, ChartColumnDecreasing, AppWindow } from 'lucide-vue-next'
  import { useLanguage } from '@/composables/useLanguage';
  import featuresContent from '@/data/featuresContent.json';
  import { computed } from 'vue';

  const { language } = useLanguage()
  const { isDarkMode } = defineProps(['isDarkMode'])

  const iconComponents = {
    Folder,
    FileClock,
    Bot,
    BellRing, 
    UsersRound, 
    Share2, 
    ChartColumnDecreasing, 
    AppWindow
  }

  const features = computed(() => featuresContent[language.value])
</script>
