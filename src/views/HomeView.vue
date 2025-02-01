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
    <FooterComponent :isDarkMode="isDarkMode" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProblemsSection from '@/components/ProblemsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const isDarkMode = ref(true) // Default to dark mode

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>