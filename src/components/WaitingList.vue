<template>
  
  <div v-if="cta" class="flex justify-center w-full">
    <div class="flex-auto max-w-md">
      <h2 class="text-md font-semibold mb-4 text-center" :class="isDarkMode ? 'text-base-100' : 'text-base-400'">
        {{ cta.title }}
      </h2>
      <div class="relative">
        <input
          type="email"
          v-model="email"
          :placeholder="cta.inputPlaceholder"
          :class="[
            'w-full px-4 py-4 rounded-full',
            'outline-none ring-2 ring-base-100',
            'focus:ring-primary-200',
            isDarkMode ? 'bg-base-300 text-base-100 ring-base-200' : 'bg-base-100 text-base-400 ring-base-200',
            'pr-32' // Add padding to the right for the button
          ]"
          required
        />
        <button
          type="submit"
          @click="handleSubmit"
          :disabled="isLoading"
          :class="[
            'absolute right-1 top-1 bottom-1',
            'bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold',
            'hover:bg-primary-300 transition-colors',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          ]"
        >
          {{ isLoading ? cta.buttonTextLoading : cta.buttonText }}
        </button>
      </div>
      <div class="h-8 relative">
          <p v-if="message" :class="[
            'absolute w-full mt-2 text-sm text-center',
            messageType === 'success' ? 'text-primary-400' : 'text-red'
          ]">
          {{ message }}
        </p>
    </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { collection, addDoc } from 'firebase/firestore'
  import { useCollection } from 'vuefire'
  import { db } from '@/firebaseConfig.js'
  import { useGtag } from "vue-gtag-next";

  const { event } = useGtag()
  
  const { isDarkMode, cta } = defineProps(['isDarkMode', 'cta'])

  const email = ref('')
  const isLoading = ref(false)
  const message = ref('')
  const messageType = ref('')

  watch(message, () => {
    setTimeout(() => {
      message.value = ''
      messageType.value = ''
    }, 5000)
  })

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async () => {
    if (!email.value) {
      message.value = 'Please enter your email address.'
      messageType.value = 'error'
      isLoading.value = false
      return
    }

    if(!validateEmail(email.value)){
      message.value = 'Invalid email address'
      messageType.value = 'error'
      isLoading.value = false
      return
    }

    const waitlistCollection = collection(db, 'waitlist')
    const waitlist = useCollection(waitlistCollection)

    event('add-to-waiting-list', {
      'event_category' : 'engagement',
      'event_label' : 'waiting-list',
      'value' : email.value
    })
    isLoading.value = true
    message.value = ''
    messageType.value = ''

    const data = {
      email: email.value,
      created_at: new Date().toISOString()
    }

    try {
      const response = await addDoc(waitlistCollection, data)
      
      if (!response) {
        throw new Error('An error occurred')
      }    

      message.value = cta.successMessage
      messageType.value = 'success'
      email.value = ''
    } catch (error) {
      message.value = cta.errorMessage
      messageType.value = 'error'
    } finally {
      isLoading.value = false
    }
  }
</script>