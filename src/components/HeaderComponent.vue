<template>
  <!-- Header -->
  <header :class="[
    'sticky top-0 z-50 shadow-md transition-colors duration-300',
    isDarkMode ? 'bg-base-400' : 'bg-base-100'
  ]">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center relative z-50">
        <img src="/docutrack-logo-02.png" alt="Docutrack Logo" class="h-10 w-auto mr-2" />
        <span class="text-2xl font-bold text-primary-200 hidden md:block w-auto">Docutrack</span>
      </RouterLink>
      <div class="hidden md:flex justify-end gap-6 lg:gap-12 space-x-4 w-2/3">
        <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`" 
          :class="['hover:text-primary-200 transition-colors font-semibold text-lg', 
                    isDarkMode ? 'text-base-100' : 'text-base-400']">
          {{ item }}
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <button @click="toggleTheme" class="text-primary-200 relative z-50">
          <SunIcon v-if="isDarkMode" class="w-6 h-6" />
          <MoonIcon v-else class="w-6 h-6" />
        </button>
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden text-primary-200 relative z-50"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Toggle menu</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <div class="relative w-6 h-4">
              <span 
                :class="[
                  'absolute h-0.5 w-6 transform transition-all duration-300',
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0',
                  isDarkMode ? 'bg-primary-200' : 'bg-primary-200'
                ]"
              ></span>
              <span 
                :class="[
                  'absolute h-0.5 w-6 transform transition-all duration-300',
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100',
                  isDarkMode ? 'bg-primary-200' : 'bg-primary-200'
                ]"
                style="top: 50%; transform: translateY(-50%);"
              ></span>
              <span 
                :class="[
                  'absolute h-0.5 w-6 transform transition-all duration-300',
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-4',
                  isDarkMode ? 'bg-primary-200' : 'bg-primary-200'
                ]"
              ></span>
            </div>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" 
          class="fixed inset-0 z-40"
          @click="closeMobileMenu">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div 
            v-if="mobileMenuOpen"
            :class="[
              'fixed inset-y-0 right-0 w-full max-w p-6 overflow-y-auto',
              isDarkMode ? 'bg-base-400' : 'bg-base-100'
            ]"
            @click.stop
          >
            <div class="flex flex-col h-full">
              <div class="flex-1 pt-24 pb-8">
                <nav class="flex flex-col space-y-8">
                  <a 
                    v-for="item in navItems" 
                    :key="item" 
                    :href="`#${item.toLowerCase()}`"
                    @click="closeMobileMenu"
                    :class="[
                      'text-2xl font-semibold text-center py-2 transition-colors duration-300',
                      isDarkMode 
                        ? 'text-base-100 hover:text-primary-200' 
                        : 'text-base-400 hover:text-primary-200'
                    ]"
                  >
                    {{ item }}
                  </a>
                </nav>
              </div>
              
              <div class="pt-6 mt-auto border-t border-gray-200 dark:border-gray-800">
                <div class="flex justify-center space-x-6">
                  <button 
                    class="px-6 py-3 rounded-full bg-primary-200 text-base-400 font-semibold hover:bg-primary-300 transition-colors"
                    @click="closeMobileMenu"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </header>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-vue-next'

  const emit = defineEmits(['switchTheme'])

  const navItems = ['Features', 'Solution', 'FAQ', 'Pricing']

  const { isDarkMode } = defineProps(['isDarkMode'])

  const mobileMenuOpen = ref(false)

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (mobileMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    document.body.style.overflow = ''
  }

  const toggleTheme = () => {
    emit('switchTheme')
  }

  onMounted(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen.value) {
        closeMobileMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscape)
  })
</script>

<style scoped>
  /* Prevent content shift when scrollbar disappears */
  .overflow-hidden {
    padding-right: var(--scrollbar-width, 0px);
  }
</style>