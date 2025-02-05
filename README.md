# docutrack-landing

This project is a landing page for Docutrack, a comprehensive document management system built with Vue 3 and Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Environment Variables
Create a .env file in the root directory and add the following environment variables:
```sh
VITE_API_KEY='your-api-key'
VITE_AUTH_DOMAIN='your-auth-domain'
VITE_PROJECT_ID='your-project-id'
VITE_STORAGE_BUCKET='your-storage-bucket'
VITE_MESSAGING_SENDER_ID='your-messaging-sender-id'
VITE_APP_ID='your-app-id'
VITE_MEASUREMENT_ID='your-measurement-id'
```

### Firebase Configuration
The Firebase configuration is located in firebaseConfig.js. Ensure you have the correct Firebase project settings in your .env file.

### Components
The project includes several Vue components located in the components directory:

  - HeaderComponent
  - HeroSection
  - FeaturesSection
  - ProblemsSection
  - FaqSection
  - PricingSection
  - WaitingListSection
  - FooterComponent
  - WaitingList


### Views
The main view is located in the HomeView.vue file.

### Router
The router configuration is located in index.js.

### Tailwind CSS
Tailwind CSS is used for styling. The configuration is located in tailwind.config.js and postcss.config.js.

### License
This project is licensed under the MIT License.