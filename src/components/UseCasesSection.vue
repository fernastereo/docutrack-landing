<template>
  <section id="use-cases" :class="[
    'py-20 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-base-300' : 'bg-base-200'
  ]">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">{{ useCases.title }}</h2>
      <h3 class="text-xl md:text-2xl font-semibold text-center mb-10">{{ useCases.subtitle }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="useCase in useCases.features" :key="useCase.title" :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-base-400' : 'bg-base-100'
        ]">
          <component :is="iconComponents[useCase.icon]" class="w-12 h-12 text-base-200 mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ useCase.title }}</h3>
          <p :class="isDarkMode ? 'text-primary-100' : 'text-base-300'">{{ useCase.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Landmark, HardHat, Building2, BaggageClaim } from 'lucide-vue-next'
  import { useLanguage } from '@/composables/useLanguage';
  import useCasesContent from '@/data/useCasesContent.json';
  import { computed } from 'vue';

  const { language } = useLanguage()
  const { isDarkMode } = defineProps(['isDarkMode'])

  const iconComponents = {
    Landmark,
    HardHat,
    Building2,
    BaggageClaim
  }

  const useCases = computed(() => useCasesContent[language.value])
</script>
