# 🚀 Docutrack Landing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.13-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.11-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.2.0-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)

**Docutrack Landing** is a modern and responsive landing page for Docutrack, a comprehensive SaaS platform for managing citizen requests and government documents. Designed to simplify procedures such as building permits, complaints, claims, and more.

[🇪🇸 Español](#español) | [🇺🇸 English](#english)

---

## 🇺🇸 English

### 🌟 Features

- **🎨 Modern Design**: Clean and professional interface with dark/light mode
- **🌍 Multilingual**: Support for Spanish, English, and German
- **📱 Responsive**: Fully adaptable to mobile and desktop devices
- **🔥 Performance**: Built with Vue 3 + Vite for maximum speed
- **📊 Analytics**: Google Analytics integration
- **🔍 SEO Optimized**: Meta tags, Open Graph, and structured data
- **☁️ Firebase**: Real-time waitlist storage

### 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vue.js** | 3.5.13 | Reactive frontend framework |
| **Vite** | 6.0.11 | Build tool and dev server |
| **Tailwind CSS** | 3.4.17 | CSS utility framework |
| **Firebase** | 11.2.0 | Database and hosting |
| **Vue Router** | 4.5.0 | SPA routing |
| **Lucide Vue** | 0.474.0 | Iconography |
| **Unhead** | 1.11.19 | Meta tag management |

### 🏗️ Project Structure

```
docutrack-landing/
├── 📁 public/                    # Static files
│   ├── 🖼️ *.png                  # Logos and images
│   ├── 📄 site.webmanifest       # PWA manifest
│   └── 🔗 CNAME                  # Domain configuration
├── 📁 src/
│   ├── 📁 assets/                # Project resources
│   ├── 📁 components/            # Reusable Vue components
│   │   ├── 🏠 HeaderComponent.vue
│   │   ├── 🎯 HeroSection.vue
│   │   ├── ⭐ FeaturesSection.vue
│   │   ├── ❓ ProblemsSection.vue
│   │   ├── 💰 PricingSection.vue
│   │   ├── 🔧 UseCasesSection.vue
│   │   ├── ❓ FaqSection.vue
│   │   ├── 📝 WaitingListSection.vue
│   │   ├── 🌐 LanguageSelector.vue
│   │   └── 🦶 FooterComponent.vue
│   ├── 📁 composables/           # Reusable logic
│   │   └── 🌍 useLanguage.js     # Language management
│   ├── 📁 data/                  # JSON content
│   │   ├── 📄 heroContent.json
│   │   ├── 📄 featuresContent.json
│   │   ├── 📄 pricingContent.json
│   │   ├── 📄 faqContent.json
│   │   └── 📄 navLinks.json
│   ├── 📁 router/                # Route configuration
│   ├── 📁 views/                 # Main views
│   │   ├── 🏠 HomeView.vue
│   │   ├── 📝 WaitlistView.vue
│   │   └── 404 NotFoundView.vue
│   ├── 🔥 firebaseConfig.js      # Firebase configuration
│   └── 🚀 main.js               # Entry point
├── ⚙️ tailwind.config.js        # Tailwind configuration
├── ⚙️ vite.config.js            # Vite configuration
└── 📖 package.json              # Dependencies and scripts
```

### 🚀 Installation and Setup

#### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/docutrack-landing.git
cd docutrack-landing
```

#### 2. Install dependencies

```bash
npm install
# or
yarn install
```

#### 3. Configure environment variables for Firebase connection

Create a `.env` file in the project root:

```bash
# Firebase Configuration
VITE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-project.appspot.com
VITE_MESSAGING_SENDER_ID=123456789
VITE_APP_ID=1:123456789:web:abcdef123456
VITE_MEASUREMENT_ID=G-XXXXXXXXXX
```

> ⚠️ **Important**: Never commit the `.env` file to the repository. It's already included in `.gitignore`.

#### 4. Configure Firebase

1. Create a project in [Firebase Console](https://console.firebase.google.com/)
2. Enable **Firestore Database**
3. Copy credentials to your `.env` file
4. Configure security rules in Firestore

### 🔧 Available Scripts

```bash
# Development with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### 🌍 Multilingual Support

The project includes support for multiple languages:

- **🇪🇸 Spanish** (default)
- **🇺🇸 English**
- **🇩🇪 German**

### 🎨 Style Customization

#### Theme colors

Colors are defined in `tailwind.config.js`:

```javascript
theme: {
  colors: {
    primary: {
      100: '#75e69e',  // Light green
      200: '#4ade80',  // Medium green
      300: '#26cf64',  // Dark green
      400: '#1d8744',  // Very dark green
    },
    base: {
      100: '#ffffff',  // White
      200: '#c9c9c9',  // Light gray
      300: '#2a2a2a',  // Dark gray
      400: '#111111',  // Black
    }
  }
}
```

### 📊 Analytics and SEO

#### Google Analytics

Configured with `vue-gtag-next`:

```javascript
// Event tracking
const { event } = useGtag()

event('button_click', {
  event_category: 'engagement',
  event_label: 'cta_button',
  value: 1
})
```

#### SEO Optimization

- **Meta tags** optimized for each page
- **Open Graph** for social networks
- **Twitter Cards** for better sharing
- **Structured data** (JSON-LD) for rich snippets
- **Automatic sitemap**

### 🚀 Deployment

#### GitHub Pages (Recommended)

The project is configured for automatic deployment on GitHub Pages:

```bash
npm run deploy
```

This command:
1. Runs production build
2. Copies `CNAME` file to output directory
3. Publishes to `gh-pages` branch

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

#### Code conventions

- Use Vue 3 **Composition API**
- Follow **Vue style guide**
- Component names in **PascalCase**
- Props in **camelCase**
- Events in **kebab-case**

### 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

### 👥 Credits

- **Development**: [Fernando E. Cueto](https://fernandocueto.com)
- **Design**: Docutrack Team
- **Icons**: [Lucide](https://lucide.dev/)
- **Images**: [Unsplash](https://unsplash.com/)

---

⭐ If this project has been useful to you, don't forget to give it a star on GitHub!

---

## 🇪🇸 Español

### 🌟 Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con modo oscuro/claro
- **🌍 Multiidioma**: Soporte para Español, Inglés y Alemán
- **📱 Responsive**: Totalmente adaptable a dispositivos móviles y desktop
- **🔥 Performance**: Construido con Vue 3 + Vite para máxima velocidad
- **📊 Analytics**: Integración con Google Analytics
- **🔍 SEO Optimizado**: Meta tags, Open Graph y structured data
- **☁️ Firebase**: Lista de espera con almacenamiento en tiempo real

### 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vue.js** | 3.5.13 | Framework frontend reactivo |
| **Vite** | 6.0.11 | Build tool y dev server |
| **Tailwind CSS** | 3.4.17 | Framework de utilidades CSS |
| **Firebase** | 11.2.0 | Base de datos y hosting |
| **Vue Router** | 4.5.0 | Enrutamiento SPA |
| **Lucide Vue** | 0.474.0 | Iconografía |
| **Unhead** | 1.11.19 | Gestión de meta tags |

### 🏗️ Estructura del Proyecto

```
docutrack-landing/
├── 📁 public/                    # Archivos estáticos
│   ├── 🖼️ *.png                  # Logos e imágenes
│   ├── 📄 site.webmanifest       # Manifiesto PWA
│   └── 🔗 CNAME                  # Configuración dominio
├── 📁 src/
│   ├── 📁 assets/                # Recursos del proyecto
│   ├── 📁 components/            # Componentes Vue reutilizables
│   │   ├── 🏠 HeaderComponent.vue
│   │   ├── 🎯 HeroSection.vue
│   │   ├── ⭐ FeaturesSection.vue
│   │   ├── ❓ ProblemsSection.vue
│   │   ├── 💰 PricingSection.vue
│   │   ├── 🔧 UseCasesSection.vue
│   │   ├── ❓ FaqSection.vue
│   │   ├── 📝 WaitingListSection.vue
│   │   ├── 🌐 LanguageSelector.vue
│   │   └── 🦶 FooterComponent.vue
│   ├── 📁 composables/           # Lógica reutilizable
│   │   └── 🌍 useLanguage.js     # Gestión de idiomas
│   ├── 📁 data/                  # Contenido JSON
│   │   ├── 📄 heroContent.json
│   │   ├── 📄 featuresContent.json
│   │   ├── 📄 pricingContent.json
│   │   ├── 📄 faqContent.json
│   │   └── 📄 navLinks.json
│   ├── 📁 router/                # Configuración de rutas
│   ├── 📁 views/                 # Vistas principales
│   │   ├── 🏠 HomeView.vue
│   │   ├── 📝 WaitlistView.vue
│   │   └── 404 NotFoundView.vue
│   ├── 🔥 firebaseConfig.js      # Configuración Firebase
│   └── 🚀 main.js               # Punto de entrada
├── ⚙️ tailwind.config.js        # Configuración Tailwind
├── ⚙️ vite.config.js            # Configuración Vite
└── 📖 package.json              # Dependencias y scripts
```

### 🚀 Instalación y Configuración

#### Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0

#### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/docutrack-landing.git
cd docutrack-landing
```

#### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

#### 3. Configurar variables de entorno para conexión con Firebase

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Firebase Configuration
VITE_API_KEY=tu-api-key-de-firebase
VITE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_PROJECT_ID=tu-proyecto-id
VITE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_MESSAGING_SENDER_ID=123456789
VITE_APP_ID=1:123456789:web:abcdef123456
VITE_MEASUREMENT_ID=G-XXXXXXXXXX
```

> ⚠️ **Importante**: Nunca commitees el archivo `.env` al repositorio. Ya está incluido en `.gitignore`.

#### 4. Configurar Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita **Firestore Database**
3. Copia las credenciales a tu archivo `.env`
4. Configura las reglas de seguridad en Firestore

### 🔧 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

### 🌍 Soporte Multiidioma

El proyecto incluye soporte para múltiples idiomas:

- **🇪🇸 Español** (por defecto)
- **🇺🇸 Inglés**
- **🇩🇪 Alemán**

### 🎨 Personalización de Estilos

#### Colores del tema

Los colores están definidos en `tailwind.config.js`:

```javascript
theme: {
  colors: {
    primary: {
      100: '#75e69e',  // Verde claro
      200: '#4ade80',  // Verde medio
      300: '#26cf64',  // Verde oscuro
      400: '#1d8744',  // Verde muy oscuro
    },
    base: {
      100: '#ffffff',  // Blanco
      200: '#c9c9c9',  // Gris claro
      300: '#2a2a2a',  // Gris oscuro
      400: '#111111',  // Negro
    }
  }
}
```

### 📊 Analytics y SEO

#### Google Analytics

Configurado con `vue-gtag-next`:

```javascript
// Tracking de eventos
const { event } = useGtag()

event('button_click', {
  event_category: 'engagement',
  event_label: 'cta_button',
  value: 1
})
```

#### SEO Optimization

- **Meta tags** optimizados para cada página
- **Open Graph** para redes sociales
- **Twitter Cards** para mejor compartición
- **Structured data** (JSON-LD) para rich snippets
- **Sitemap** automático

### 🚀 Despliegue

#### GitHub Pages (Recomendado)

El proyecto está configurado para despliegue automático en GitHub Pages:

```bash
npm run deploy
```

Este comando:
1. Ejecuta el build de producción
2. Copia el archivo `CNAME` al directorio de salida
3. Publica en la rama `gh-pages`

### 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

#### Convenciones de código

- Usar **Composition API** de Vue 3
- Seguir la **guía de estilo de Vue**
- Nombres de componentes en **PascalCase**
- Props en **camelCase**
- Eventos en **kebab-case**

### 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

### 👥 Créditos

- **Desarrollo**: [CSS](https://github.com/tu-usuario)
- **Diseño**: Equipo Docutrack
- **Iconos**: [Lucide](https://lucide.dev/)
- **Imágenes**: [Unsplash](https://unsplash.com/)

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella en GitHub!