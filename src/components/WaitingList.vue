<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-4" :class="isDarkMode ? 'text-base-100' : 'text-base-400'">
      Join Our Waiting List
    </h2>
    <form @submit.prevent="handleSubmit" class="relative">
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        :class="[
          'w-full px-4 py-4 rounded-full text-base-400',
          'focus:outline-none focus:ring-2 focus:ring-primary-200',
          isDarkMode ? 'bg-base-300 text-base-100' : 'bg-base-100',
          'pr-32' // Add padding to the right for the button
        ]"
        required
      />
      <button
        type="submit"
        :disabled="isLoading"
        :class="[
          'absolute right-1 top-1 bottom-1',
          'bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold',
          'hover:bg-primary-300 transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        ]"
      >
        {{ isLoading ? 'Joining...' : 'Join' }}
      </button>
    </form>
    <p v-if="message" :class="[
      'mt-2 text-sm',
      messageType === 'success' ? 'text-green-500' : 'text-red-500'
    ]">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { isDarkMode } = defineProps(['isDarkMode'])

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const messageType = ref('')

const handleSubmit = async () => {
  if (!email.value) return

  isLoading.value = true
  message.value = ''
  messageType.value = ''

  try {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulated success response
    message.value = 'You have been added to the waiting list!'
    messageType.value = 'success'
    email.value = ''
  } catch (error) {
    // Simulated error handling
    message.value = 'An error occurred. Please try again.'
    messageType.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>