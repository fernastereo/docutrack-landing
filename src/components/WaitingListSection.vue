<template>
  <div :class="[
    'py-12 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-base-300' : 'bg-base-200'
  ]">
    <div class="flex flex-col">
      <h2 class="text-2xl font-semibold text-center">Ready to see through the legal fog?</h2>
      <p class="text-center my-6">Sign up now to join our waiting list and be the first to experience legal clarity like never before!</p>
      <WaitingList :isDarkMode="isDarkMode" />
    </div>
  </div>
</template>

<script setup>
  import WaitingList from '@/components/WaitingList.vue'  
  
  const { isDarkMode, navItems } = defineProps(['isDarkMode', 'navItems'])
</script>
