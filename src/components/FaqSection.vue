<template>
  <!-- FAQ Section -->
  <section id="faq" :class="[
      'py-20 px-4 transition-colors duration-300',
      isDarkMode ? 'bg-base-300' : 'bg-base-200']">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ faqs.title }}</h2>
      <div class="space-y-6">
        <div v-for="(faq, index) in faqs.faqs" :key="index" :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-base-400' : 'bg-base-100'
        ]">
          <button @click="toggleFaq(index)" class="flex justify-between items-center w-full text-left">
            <span class="text-xl font-semibold">{{ faq.question }}</span>
            <ChevronDownIcon :class="['w-6 h-6 transition-transform', { 'transform rotate-180': faq.isOpen }]" />
          </button>
          <p v-show="faq.isOpen" class="mt-4" :class="isDarkMode ? 'text-primary-100' : 'text-base-300'">
            {{ faq.answer }}
          </p>
        </div>
      </div>
      <div>
        <p class="text-center mt-12 text-2xl">{{ faqs.cta.title }} <a class="underline underline-offset-8" href="#hero">{{ faqs.cta.button }}</a></p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { watch, ref } from 'vue'
  import { ChevronDownIcon } from 'lucide-vue-next'
  import faqContent from '@/data/faqContent.json'
  import { useLanguage } from '@/composables/useLanguage';

  const { language } = useLanguage()
  const { isDarkMode } = defineProps(['isDarkMode'])

  const faqs = ref(faqContent[language.value])

  const toggleFaq = (index) => {    
    faqs.value.faqs[index].isOpen = !faqs.value.faqs[index].isOpen
  }

  watch(language, (newLanguage) => {
    faqs.value = faqContent[newLanguage]
  })
</script>
