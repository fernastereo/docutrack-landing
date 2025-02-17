<template>
  <div :class="[
    'min-h-screen transition-colors duration-300',
    isDarkMode ? 'bg-base-400 text-base-100' : 'bg-base-100 text-base-400'
  ]">
    <HeaderComponent :isDarkMode="isDarkMode" :navItems="navItems" @switchTheme="toggleTheme"/>
    <div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <h2>Total usuarios registrados: {{ totalMails }}</h2>
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ID</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="person in waitlistCollection" :key="person.id">
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.id }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.created_at }}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit<span class="sr-only">, {{ person.name }}</span></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent :isDarkMode="isDarkMode" :navItems="navItems" />
  </div>
  
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useLanguage } from '@/composables/useLanguage'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import { useCollection } from 'vuefire'
  import { db } from '@/firebaseConfig.js'
  import { collection } from 'firebase/firestore'
  import navLinks from '@/data/navLinks.json'
  import { useGtag } from "vue-gtag-next";

  const { pageview } = useGtag() 
  pageview({ page_path: "/waitlist" });

  const { language } = useLanguage()

  const waitlistCollection = useCollection(collection(db, 'waitlist'))
  //contar el numero de registros
  const totalMails = ref(waitlistCollection.value.length)
  const isDarkMode = ref(false) // Default to light mode
  const navItems = computed(() => navLinks[language.value])

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
  }

</script>