<template>
  <section id="features" :class="[
    'py-20 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
  ]">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.title" :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-[#111111]' : 'bg-white'
        ]">
          <component :is="feature.icon" class="w-12 h-12 text-[#4ade80] mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p :class="isDarkMode ? 'text-[#75e69e]' : 'text-[#2a2a2a]'">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { isDarkMode } = defineProps(['isDarkMode'])

  const features = [
    { title: 'Centralized Storage', description: 'Keep all your documents in one secure place', icon: 'FolderIcon' },
    { title: 'Easy Collaboration', description: 'Work together seamlessly with your team', icon: 'UsersIcon' },
    { title: 'Version Control', description: 'Track changes and revert to previous versions', icon: 'HistoryIcon' },
    { title: 'Advanced Search', description: 'Find any document in seconds', icon: 'SearchIcon' }
  ]
</script>
