<template>
  <!-- Pricing Section -->
  <section id="pricing" class="py-20 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="plan in pricingPlans" :key="plan.name" :class="[
          'p-6 rounded-lg flex flex-col transition-colors duration-300',
          isDarkMode ? 'bg-base-300' : 'bg-base-200'
        ]">
          <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
          <p :class="isDarkMode ? 'text-primary-100' : 'text-base-300'" class="mb-4">{{ plan.description }}</p>
          <p class="text-4xl font-bold mb-6">{{ plan.price }}</p>
          <ul class="mb-8 flex-grow">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center mb-2">
              <CheckIcon class="w-5 h-5 text-primary-200 mr-2" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <button class="bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { CheckIcon } from 'lucide-vue-next'
  
  const { isDarkMode } = defineProps(['isDarkMode'])

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
