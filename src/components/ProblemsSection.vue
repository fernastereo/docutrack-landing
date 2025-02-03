<template>
  <section id="solution" class="py-20 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">The Problem We Solve</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
        ]">
          <h3 class="text-2xl font-semibold mb-4">Without Docutrack</h3>
          <ul class="space-y-2">
            <li v-for="problem in problems" :key="problem" class="flex items-start">
              <XCircleIcon class="w-6 h-6 text-red-500 mr-2 flex-shrink-0" />
              <span>{{ problem }}</span>
            </li>
          </ul>
        </div>
        <div :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
        ]">
          <h3 class="text-2xl font-semibold mb-4">With Docutrack</h3>
          <ul class="space-y-2">
            <li v-for="solution in solutions" :key="solution" class="flex items-start">
              <CheckCircleIcon class="w-6 h-6 text-[#4ade80] mr-2 flex-shrink-0" />
              <span>{{ solution }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { CheckCircleIcon, XCircleIcon } from 'lucide-vue-next'
  
  const { isDarkMode } = defineProps(['isDarkMode'])

  const problems = [
    'Lost documents and wasted time searching',
    'Inconsistent version control',
    'Security risks from scattered files',
    'Inefficient collaboration processes'
  ]

  const solutions = [
    'Centralized, easily searchable document repository',
    'Automated version control and change tracking',
    'Enhanced security with role-based access control',
    'Streamlined collaboration with real-time editing'
  ]
</script>
