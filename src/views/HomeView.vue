<template>
  <div :class="[
    'min-h-screen transition-colors duration-300',
    isDarkMode ? 'bg-base-400 text-base-100' : 'bg-base-100 text-base-400'
  ]">
    <HeaderComponent :isDarkMode="isDarkMode" :navItems="navItems" @switchTheme="toggleTheme"/>
    <HeroSection :isDarkMode="isDarkMode" />
    <FeaturesSection :isDarkMode="isDarkMode" />
    <ProblemsSection :isDarkMode="isDarkMode" />
    <FaqSection :isDarkMode="isDarkMode" />
    <PricingSection :isDarkMode="isDarkMode" />
    <WaitingListSection :isDarkMode="isDarkMode" />
    <FooterComponent :isDarkMode="isDarkMode" :navItems="navItems" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import navLinks from '@/data/navLinks.json'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProblemsSection from '@/components/ProblemsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import WaitingListSection from '@/components/WaitingListSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const { language } = useLanguage()
const isDarkMode = ref(false) // Default to light mode

const navItems = computed(() => navLinks[language.value])

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>