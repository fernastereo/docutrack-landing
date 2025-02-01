<template>
  <div :class="[
    'min-h-screen transition-colors duration-300',
    isDarkMode ? 'bg-[#111111] text-white' : 'bg-white text-[#111111]'
  ]">
    <HeaderComponent :isDarkMode="isDarkMode" @switchTheme="toggleTheme"/>

    <HeroSection :isDarkMode="isDarkMode" />

    <FeaturesSection :isDarkMode="isDarkMode" />

    <ProblemsSection :isDarkMode="isDarkMode" />

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

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="plan in pricingPlans" :key="plan.name" :class="[
            'p-6 rounded-lg flex flex-col transition-colors duration-300',
            isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
          ]">
            <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
            <p :class="isDarkMode ? 'text-[#75e69e]' : 'text-[#2a2a2a]'" class="mb-4">{{ plan.description }}</p>
            <p class="text-4xl font-bold mb-6">{{ plan.price }}</p>
            <ul class="mb-8 flex-grow">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center mb-2">
                <CheckIcon class="w-5 h-5 text-[#4ade80] mr-2" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button class="bg-[#4ade80] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#26cf64] transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer :class="[
      'py-8 px-4 transition-colors duration-300',
      isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#c9c9c9]'
    ]">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Docutrack. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon, CheckIcon } from 'lucide-vue-next'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProblemsSection from '@/components/ProblemsSection.vue'

const isDarkMode = ref(true) // Default to dark mode

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const faqs = ref([
  { question: 'What is Docutrack?', answer: 'Docutrack is a comprehensive document management system that helps businesses organize, track, and collaborate on documents efficiently and securely.', isOpen: false },
  { question: 'How secure is Docutrack?', answer: 'Docutrack uses enterprise-grade security measures, including encryption at rest and in transit, role-based access control, and regular security audits to keep your documents safe.', isOpen: false },
  { question: 'Can I integrate Docutrack with other tools?', answer: 'Yes, Docutrack offers integrations with popular productivity tools and can be connected to your existing systems through our API.', isOpen: false },
  { question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial on all our plans so you can experience the full power of Docutrack before committing.', isOpen: false }
])

const pricingPlans = [
  {
    name: 'Basic',
    description: 'For small teams',
    price: '$9/month',
    features: ['Up to 5 users', '10GB storage', 'Basic document tracking', 'Email support']
  },
  {
    name: 'Pro',
    description: 'For growing businesses',
    price: '$29/month',
    features: ['Up to 20 users', '100GB storage', 'Advanced document tracking', 'Priority support', 'Custom branding']
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    features: ['Unlimited users', 'Unlimited storage', 'Advanced security features', '24/7 phone support', 'Dedicated account manager']
  }
]
</script>