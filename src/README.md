# HansLacida.com Component System

This directory contains a modular component system for building pages on HansLacida.com. The system is designed to be reusable, maintainable, and easy to customize.

## 📁 Directory Structure

```
src/
├── components/
│   ├── index.js          # Main component exports
│   ├── Header.js         # Navigation header component
│   ├── Hero.js           # Hero section component
│   ├── About.js          # About section component
│   ├── Services.js       # Services section component
│   ├── Footer.js         # Footer component
│   ├── Loader.js         # Loading screen component
│   └── ContactForm.js    # Contact form component
├── utils/
│   └── pageBuilder.js    # Page building utilities
├── input.css             # Tailwind CSS input file
└── README.md            # This file
```

## 🚀 Quick Start

### 1. Basic Usage

To use the component system, import the components and render them:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Your head content -->
</head>
<body>
  <!-- Component containers -->
  <div id="header-container"></div>
  <div id="hero-container"></div>
  <div id="about-container"></div>
  <div id="services-container"></div>
  <div id="contact-container"></div>
  <div id="footer-container"></div>

  <!-- Component scripts -->
  <script type="module">
    import { 
      Header, Hero, About, Services, ContactForm, Footer,
      renderComponent, initAllComponents 
    } from './src/components/index.js';

    // Render components
    renderComponent(Header, 'header-container');
    renderComponent(Hero, 'hero-container', {
      title: 'Your Custom Title',
      subtitle: 'Your custom subtitle'
    });
    renderComponent(About, 'about-container');
    renderComponent(Services, 'services-container');
    renderComponent(ContactForm, 'contact-container');
    renderComponent(Footer, 'footer-container');

    // Initialize all components
    initAllComponents();
  </script>
</body>
</html>
```

### 2. Using the Page Builder

For quick page creation, use the page builder utility:

```javascript
import { buildPage } from './src/utils/pageBuilder.js';

// Create a home page
const homePage = buildPage('home');

// Create a services page with custom props
const servicesPage = buildPage('services', {
  heroProps: {
    title: 'Custom Services Title',
    subtitle: 'Custom services subtitle'
  }
});
```

## 🧩 Available Components

### Header Component
- **File**: `src/components/Header.js`
- **Exports**: `Header`, `initHeader`
- **Props**: None (uses default navigation)
- **Features**: Responsive navigation, mobile menu, logo

### Hero Component
- **File**: `src/components/Hero.js`
- **Exports**: `Hero`
- **Props**:
  - `title` (string): Hero title
  - `subtitle` (string): Hero subtitle
  - `primaryButton` (object): Primary CTA button
  - `secondaryButton` (object): Secondary CTA button
  - `imageSrc` (string): Hero image path
  - `imageAlt` (string): Hero image alt text

### About Component
- **File**: `src/components/About.js`
- **Exports**: `About`
- **Props**:
  - `title` (string): Section title
  - `subtitle` (string): Section subtitle
  - `heading` (string): Main heading
  - `description` (string): Main description
  - `primaryLink` (object): Primary link
  - `secondaryLink` (object): Secondary link
  - `imageSrc` (string): About image path
  - `imageAlt` (string): About image alt text

### Services Component
- **File**: `src/components/Services.js`
- **Exports**: `Services`
- **Props**:
  - `title` (string): Section title
  - `subtitle` (string): Section subtitle
  - `services` (array): Array of service objects

### ContactForm Component
- **File**: `src/components/ContactForm.js`
- **Exports**: `ContactForm`, `initContactForm`
- **Props**:
  - `title` (string): Form title
  - `subtitle` (string): Form subtitle
  - `formId` (string): Form ID for JavaScript

### Footer Component
- **File**: `src/components/Footer.js`
- **Exports**: `Footer`
- **Props**: None (uses default footer content)

### Loader Component
- **File**: `src/components/Loader.js`
- **Exports**: `Loader`, `initLoader`
- **Props**: None

## 🛠️ Utility Functions

### renderComponent(componentFunction, containerId, props)
Renders a component into a specified container.

```javascript
renderComponent(Hero, 'hero-container', {
  title: 'Custom Title',
  subtitle: 'Custom Subtitle'
});
```

### initAllComponents()
Initializes all component JavaScript functionality.

### buildPage(pageType, customProps)
Builds a complete page using predefined configurations.

```javascript
const page = buildPage('home', {
  heroProps: { title: 'Custom Title' }
});
```

## 📄 Predefined Page Types

The page builder includes these predefined page configurations:

- **home**: Homepage with hero, about, services, and contact sections
- **services**: Services page with expanded service offerings
- **about**: About page with detailed story and background
- **contact**: Contact page focused on getting in touch

## 🎨 Customization

### Customizing Components

Each component accepts props for customization:

```javascript
renderComponent(Hero, 'hero-container', {
  title: 'Your Custom Title',
  subtitle: 'Your custom subtitle',
  primaryButton: {
    href: '/custom-link',
    text: 'Custom Button'
  }
});
```

### Creating Custom Pages

Use the page builder for custom pages:

```javascript
import { createCustomPage } from './src/utils/pageBuilder.js';

const customPage = createCustomPage({
  title: 'Custom Page Title',
  description: 'Custom page description',
  heroProps: { /* custom hero props */ },
  aboutProps: { /* custom about props */ },
  servicesProps: { /* custom services props */ },
  contactProps: { /* custom contact props */ }
});
```

## 🔧 Development

### Adding New Components

1. Create a new component file in `src/components/`
2. Export the component function and any initialization functions
3. Add exports to `src/components/index.js`
4. Update this README with component documentation

### Building CSS

The Tailwind CSS is built from `src/input.css`:

```bash
npm run dev    # Watch mode
npm run build  # Production build
```

## 📱 Responsive Design

All components are built with responsive design in mind using Tailwind CSS classes. They work across all device sizes.

## ♿ Accessibility

Components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## 🚀 Performance

- Components are lightweight and fast
- CSS is optimized with Tailwind's purge
- JavaScript is modular and tree-shakeable
- Images are optimized for web

## 📞 Support

For questions or issues with the component system, please refer to the main project documentation or contact the development team. 