# Product Widgets App 🌱

A modern Vue 3 application that showcases interactive product widgets. Built with TypeScript and Vuetify, it features a component-driven architecture, documentation through Storybook, and state management using Vuex. While selecting the appropriate tech stack, I took into account, what techs may be used at GreensPark on a daily basis based on the project description. 😊

## 🌍 Live Demo

One may find my solutions at the following links:

- **Application:** [https://dashing-speculoos-039000.netlify.app/](https://dashing-speculoos-039000.netlify.app/)
- **Storybook:** [https://dashing-speculoos-039000.netlify.app/storybook](https://dashing-speculoos-039000.netlify.app/storybook)

## 🛠️ Tech Stack

- Jest
- Pug
- Sass
- Storybook 8
- TypeScript
- Vue 3
- Vuetify 3
- Vuex 4

## 📋 Prerequisites

- Node.js 18 or higher
- Yarn

## 🚀 Getting Started

**Clone the repository:**
   ```bash
   git clone <repository-url>
   cd product-widgets-app
   ```

**Install dependencies:**
   ```bash
   yarn install
   ```

## 💻 Development

**Start the development server:**
```bash
yarn serve
```
The application will be available at `http://localhost:8080`

## 📖 Storybook

**Run Storybook for component development and documentation:**
```bash
yarn storybook
```
Storybook will be available at `http://localhost:6006`

## 🌐 Browser Compatibility

The application has been tested and verified to work across major modern browsers:

- 🌐 Google Chrome
- 🦊 Mozilla Firefox
- 🔴 Opera
- 📱 Microsoft Edge
- 🧭 Safari

## 🧪 Runing unit tests
```bash
yarn test:unit
```

## 🏗️ Building for Production

**Build the application:**
```bash
yarn build
```

**Build Storybook:**
```bash
yarn build-storybook
```
## 🎨 Code Standards

The project maintains strict coding standards enforced through ESLint and Prettier configurations. These tools ensure consistent code formatting.

### Code Formatting

- ESLint enforces JavaScript/TypeScript best practices and catches potential errors
- Prettier handles automated code formatting for consistent style

### CSS/SASS Architecture

The project follows SMACSS (Scalable and Modular Architecture for CSS) methodology for organizing CSS in the style section of each component.

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── General/          # Reusable components
│   │   └── ProductWidget/    # Product-specific components
│   ├── composables/          # Vue composables
│   ├── plugins/              # Vue plugins
│   ├── services/             # API services
│   ├── store/                # Vuex store
│   ├── styles/               # Global styles
│   └── types/                # TypeScript types
├── tests/                    # Test configuration
├── public/                   # Static assets
└── .storybook/               # Storybook config
```

## 📚 Component Documentation

The application's component architecture leverages both Vuetify's component library and custom-built components. While I have more experience with Quasar Framework and Nuxt 3 with Tailwind CSS, I chose Vuetify with SASS for this project to demonstrate a broader range of technical capabilities.

The project uses Storybook for component documentation. Each component may include:

- 🎮 Interactive examples
- 📝 Props documentation
- 📖 Usage guidelines
- ♿ Accessibility information

### Key Components

| Component | Description |
|-----------|-------------|
| AppBadge | Provides information about environmental impact |
| AppCheckbox | Custom styled version of Vuetify's checkbox |
| AppColorSwatch | Custom color theme selector |
| AppIcon | A wrapper for Vuetify's icon component |
| AppSkeletonLoader | Applies a skeleton loader (based on Vuetify's Skeleton Loader), while receiving data from API |
| AppSwitch | Toggle switch component based on Vuetify's Switch component |
| AppTooltip | A modified version of Vuetify's tooltip component with slot for custom icon|

## 🔄 State Management

The application uses Vuex for state management:

### Widgets Module
- **State:**
  - widgets array
  - loading state
  - error handling
- **Actions:**
  - fetchWidgets
  - updateWidgetActive
- **Mutations:**
  - setWidgets
  - setLoading
  - setError
  - setWidgetActive

## 🌐 API Integration

The application connects to a mock API endpoint for widget data:

```typescript
// src/services/api.ts
const api = axios.create({
  baseURL: "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
```

## ✅ Unit tests

The application maintains comprehensive test coverage with 7 Test Suites containing 29 individual tests, encompassing the following key areas:

- ✓ Test rendering
- ✓ Test user interactions
- ✓ Test prop validations
- ✓ Test emitted events

## 🚀 Deployment

### GitHub Actions Workflow

The project includes automated CI/CD with GitHub Actions:
- Runs on push to main and pull requests
- Executes unit tests
- Builds Production assets
- Builds Storybook documentation
