<template>
  <div class="py-12 px-4">
    <div class="container mx-auto w-auto md:w-3/5 flex flex-col">
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
