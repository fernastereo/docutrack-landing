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
    <UseCasesSection :isDarkMode="isDarkMode" />
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
  import UseCasesSection from '@/components/UseCasesSection.vue'
  import WaitingListSection from '@/components/WaitingListSection.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import { useGtag } from "vue-gtag-next";
  import { useHead } from 'unhead'

  useHead({
    title: 'Plataforma de Gestión de Solicitudes Ciudadanas - Simplifica Trámites Gubernamentales',
    meta: [
      // Metaetiquetas básicas (Paso 1)
      { name: 'description', content: 'Plataforma integral para gestionar solicitudes ciudadanas dirigidas a oficinas gubernamentales. Simplifica trámites como permisos de construcción, quejas, reclamos y más.' },
      { name: 'keywords', content: 'gestión de solicitudes, trámites gubernamentales, permisos de construcción, quejas ciudadanas, plataforma SAAS, gobierno digital, ventanilla unica' },
      { name: 'language', content: 'es' },
      { name: 'author', content: 'CSS' },
      // Open Graph (Paso 2)
      { property: 'og:title', content: 'Plataforma de Gestión de Solicitudes Ciudadanas - Simplifica Trámites Gubernamentales - Ventnilla Unica' },
      { property: 'og:description', content: 'Plataforma integral para gestionar solicitudes ciudadanas dirigidas a oficinas gubernamentales. Simplifica trámites como permisos de construcción, quejas, reclamos y más.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://docutrack.cloud' },
      { property: 'og:image', content: 'https://docutrack.cloud/docutrack-logo-02.png' },
      { property: 'og:site_name', content: 'Docutrack AI' },

      // Twitter Card (Paso 2)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Plataforma de Gestión de Solicitudes Ciudadanas - Simplifica Trámites Gubernamentales - Ventanilla Unica' },
      { name: 'twitter:description', content: 'Plataforma integral para gestionar solicitudes ciudadanas dirigidas a oficinas gubernamentales. Simplifica trámites como permisos de construcción, quejas, reclamos y más.' },
      { name: 'twitter:image', content: 'https://docutrack.cloud/docutrack-logo-02.png' },
      { name: 'twitter:site', content: '@fernastereo' },
      { name: 'twitter:creator', content: '@fernastereo' },

      // Canonical URL (Paso 3)
      { rel: 'canonical', href: 'https://docutrack.cloud' },

      // Metaetiquetas para móviles (Paso 5)
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'MobileOptimized', content: 'width' },

      // Seguridad y privacidad (Paso 6)
      { name: 'privacy-policy', content: 'https://docutrack.cloud/politica-de-privacidad' },
      { name: 'terms-of-service', content: 'https://docutrack.cloud/terminos-y-condiciones' },
      { name: 'robots', content: 'index, follow' },

      // Verificación de Google Search Console (Paso 10)
      // { name: 'google-site-verification', content: 'CÓDIGO_DE_VERIFICACIÓN' },
    ],
    script: [
      // JSON-LD para Rich Snippets (Paso 8)
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Plataforma de Gestión de Solicitudes Ciudadanas",
          "url": "https://docutrack.cloud/",
          "description": "Plataforma integral para gestionar solicitudes ciudadanas dirigidas a oficinas gubernamentales.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://docutrack.cloud/buscar?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      }
    ]
  })

  const { pageview } = useGtag() 
  pageview({ page_path: "/" });

  const { language } = useLanguage()
  const isDarkMode = ref(false) // Default to light mode

  const navItems = computed(() => navLinks[language.value])

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
  }
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  /* Opcional: para mejorar la experiencia en móviles */
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
</style>