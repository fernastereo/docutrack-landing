<template>
  <div :class="[
    'min-h-screen transition-colors duration-300',
    isDarkMode ? 'bg-[#111111] text-white' : 'bg-white text-[#111111]'
  ]">
    <HeaderComponent :isDarkMode="isDarkMode" @switchTheme="toggleTheme"/>

    <HeroSection :isDarkMode="isDarkMode" />

    <FeaturesSection :isDarkMode="isDarkMode" />

    <ProblemsSection :isDarkMode="isDarkMode" />

    <FaqSection :isDarkMode="isDarkMode" />

    <PricingSection :isDarkMode="isDarkMode" />

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
import { CheckIcon } from 'lucide-vue-next'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProblemsSection from '@/components/ProblemsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import PricingSection from '@/components/PricingSection.vue'

const isDarkMode = ref(true) // Default to dark mode

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>