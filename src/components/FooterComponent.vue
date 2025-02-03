<template>
  <footer :class="[
    'py-8 px-4 transition-colors duration-300',
    isDarkMode ? 'bg-base-300' : 'bg-base-200'
  ]">
    <div class="container mx-auto flex flex-col justify-center items-center md:flex-row flex-wrap">
      <div class="flex flex-col gap-8 md:container md:flex-row md:items-center md:justify-between my-4 p-2">
        <a class="text-2xl underline-offset-1" mailto="hello@docutrack.cloud">hello@docutrack.cloud</a>
        <div class="flex flex-row justify-center gap-8">
          <a href="https://instagram.com/docutrack" target="_blank" rel="noopener noreferrer" class="text-xl">
            <Instagram class="h-6 w-auto"/>
          </a>
          <a href="https://linkedin.com/company/docutrack" target="_blank" rel="noopener noreferrer" class="text-xl">
            <Linkedin class="h-6 w-auto"/>
          </a>
        </div>
      </div>
      <div class="py-6 px-2 flex flex-col md:flex-row md:container md:items-center md:justify-between">
        <div class="py-4">
          <nav class="flex flex-col items-center gap-6 text-md font-semibold md:flex-row">
            <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`">{{ item }}</a>
          </nav>
        </div>
        <div class="my-4 py-4 text-center text-sm flex flex-row justify-start gap-2">
          <span>&copy; {{ new Date().getFullYear() }} Docutrack - designed with</span><Heart class="h-4 w-auto my-auto text-red"/><span>Worldwide</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { Instagram, Linkedin, Heart } from 'lucide-vue-next'

  const { isDarkMode, navItems } = defineProps(['isDarkMode', 'navItems'])
</script>
