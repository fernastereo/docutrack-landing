<template>
  <footer :class="[
    'py-8 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
  ]">
    <div class="container mx-auto text-center">
      <p>&copy; {{ new Date().getFullYear() }} Docutrack. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
  const isDarkMode = defineProps(['isDarkMode'])
</script>
