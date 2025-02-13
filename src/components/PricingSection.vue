<template>
  <!-- Pricing Section -->
  <section id="pricing" class="py-24 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">{{ pricing.title }}</h2>
      <h3 class="text-xl md:text-2xl font-semibold text-center mb-10">{{ pricing.subtitle }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="plan in pricing.plans" :key="plan.name" :class="[
          'p-6 rounded-lg flex flex-col transition-colors duration-300',
          isDarkMode ? 'bg-base-300' : 'bg-base-100 border-2 border-base-200 shadow-2xl'
        ]">
          <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
          <p :class="isDarkMode ? 'text-primary-100' : 'text-base-300'" class="mb-4">{{ plan.description }}</p>
          <p class="text-4xl font-bold mb-6">{{ plan.price }}</p>
          <ul class="mb-8 flex-grow">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center mb-2">
              <CheckIcon class="w-5 h-5 text-primary-200 mr-2" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <button class="bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors">
            {{ pricing.buttonText}}
          </button>
        </div>
      </div>
      <div>
        <p class="text-center mt-12 text-xl">{{ pricing.cta.title }} <a class="underline underline-offset-8" href="#hero">{{ pricing.cta.button }}</a></p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { CheckIcon } from 'lucide-vue-next'
  import pricingContent from '@/data/pricingContent.json'
  import { useLanguage } from '@/composables/useLanguage';
import { computed } from 'vue';

  const { language } = useLanguage()
  const { isDarkMode } = defineProps(['isDarkMode'])

  const pricing = computed(() => pricingContent[language.value])
</script>
