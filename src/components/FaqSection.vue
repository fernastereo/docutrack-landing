<template>
  <!-- FAQ Section -->
  <section id="faq" :class="[
      'py-20 px-4 transition-colors duration-300',
      isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
    ]">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div class="space-y-6">
        <div v-for="faq in faqs" :key="faq.question" :class="[
          'p-6 rounded-lg transition-colors duration-300',
          isDarkMode ? 'bg-[#111111]' : 'bg-white'
        ]">
          <button @click="faq.isOpen = !faq.isOpen" class="flex justify-between items-center w-full text-left">
            <span class="text-xl font-semibold">{{ faq.question }}</span>
            <ChevronDownIcon :class="['w-6 h-6 transition-transform', { 'transform rotate-180': faq.isOpen }]" />
          </button>
          <p v-show="faq.isOpen" class="mt-4" :class="isDarkMode ? 'text-[#75e69e]' : 'text-[#2a2a2a]'">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import { ChevronDownIcon } from 'lucide-vue-next'
  
  const { isDarkMode } = defineProps(['isDarkMode'])

  const faqs = ref([
    { question: 'What is Docutrack?', answer: 'Docutrack is a comprehensive document management system that helps businesses organize, track, and collaborate on documents efficiently and securely.', isOpen: false },
    { question: 'How secure is Docutrack?', answer: 'Docutrack uses enterprise-grade security measures, including encryption at rest and in transit, role-based access control, and regular security audits to keep your documents safe.', isOpen: false },
    { question: 'Can I integrate Docutrack with other tools?', answer: 'Yes, Docutrack offers integrations with popular productivity tools and can be connected to your existing systems through our API.', isOpen: false },
    { question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial on all our plans so you can experience the full power of Docutrack before committing.', isOpen: false }
  ])
</script>
