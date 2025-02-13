<template>
  <section id="solution" class="py-40 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">{{ problems.title }}</h2>
      <h3 class="text-xl md:text-2xl font-semibold text-center mb-10">{{ problems.subtitle }}</h3>
      <div class="mx-10 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-base-300' : 'bg-base-100 border-2 border-base-200 shadow-2xl'
        ]">
          <h3 class="text-2xl font-semibold mb-4">{{ problems.without.title }}</h3>
          <ul class="space-y-2">
            <li v-for="problem in problems.without.list" :key="problem.title" class="flex items-start">
              <XCircleIcon class="w-6 h-6 text-red mr-2 flex-shrink-0" />
              <p class="flex flex-col mb-2"><span class="font-semibold text-lg">{{ problem.title }}</span><span class="text-xs md:text-sm">{{ problem.body }}</span></p>
            </li>
          </ul>
        </div>
        <div :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-base-300' : 'bg-base-100 border-2 border-base-200 shadow-2xl'
        ]">
          <h3 class="text-2xl font-semibold mb-4">{{ problems.with.title }}</h3>
          <ul class="space-y-2">
            <li v-for="problem in problems.with.list" :key="problem.title" class="flex items-start">
              <CheckCircleIcon class="w-6 h-6 text-primary-200 mr-2 flex-shrink-0" />
              <p class="flex flex-col mb-2"><span class="font-semibold text-lg">{{ problem.title }}</span><span class="text-xs md:text-sm">{{ problem.body }}</span></p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p class="text-center mt-12 text-2xl">{{ problems.cta.title }} <a class="underline underline-offset-8" href="#hero">{{ problems.cta.button }}</a></p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useLanguage } from '@/composables/useLanguage';
  import problemsContent from '@/data/problemsContent.json'
  import { CheckCircleIcon, XCircleIcon } from 'lucide-vue-next'
  import { computed } from 'vue';
  
  const { isDarkMode } = defineProps(['isDarkMode'])

  const { language } = useLanguage()
  const problems = computed(() => problemsContent[language.value])

</script>
