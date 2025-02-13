<template>
  <div :class="[
    'py-12 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-base-300' : 'bg-base-200'
  ]">
    <div class="container mx-auto w-3/5 border-b-2 border-base-100 pb-8 flex flex-col">
      <h2 class="text-2xl font-semibold text-center">{{ waitingList.title }}</h2>
      <p class="text-center my-6 w-full">{{ waitingList.subtitle }}</p>
      <WaitingList :cta="waitingList.cta" :isDarkMode="isDarkMode" />
    </div>
  </div>
</template>

<script setup>
  import { useLanguage } from '@/composables/useLanguage.js'
  import waitingListContent from '@/data/waitingListContent.json'
  import { computed } from 'vue'
  import WaitingList from '@/components/WaitingList.vue'  
  
  const { language } = useLanguage()

  const waitingList = computed(() => waitingListContent[language.value])

  const { isDarkMode } = defineProps(['isDarkMode'])
</script>
