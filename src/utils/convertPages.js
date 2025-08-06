// Page Conversion Utility
// This script helps convert existing HTML pages to use the component system

import { buildPage } from './pageBuilder.js';

// Function to convert an existing page to use components
export function convertPageToComponents(pageType, customProps = {}) {
  try {
    const pageHTML = buildPage(pageType, customProps);
    return pageHTML;
  } catch (error) {
    console.error(`Error converting page ${pageType}:`, error);
    return null;
  }
}

// Function to create a component-based page from scratch
export function createComponentPage(config) {
  const defaultConfig = {
    title: 'HansLacida.com',
    description: 'Expert PPC Management & Digital Marketing Solutions',
    heroProps: {},
    aboutProps: {},
    servicesProps: {},
    contactProps: {}
  };

  const mergedConfig = { ...defaultConfig, ...config };
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-K1E3588F4M"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-K1E3588F4M');
  </script>
  
  <!-- basic -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- mobile metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- site metas -->
  <title>${mergedConfig.title}</title>
  <meta name="description" content="${mergedConfig.description}">
  <meta name="author" content="Hanzel Lacida">
  <meta name="google-adsense-account" content="ca-pub-2137593406454250">
  
  <!-- Tailwind CSS -->
  <link rel="stylesheet" href="css/output.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Baloo+Chettan&family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- favicon -->
  <link rel="icon" href="images/hanslacida_favicon.webp" type="image/webp" />
  
  <!-- Google Ads -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2137593406454250" crossorigin="anonymous"></script>
</head>

<body class="font-lato text-gray-600 bg-white">
  <!-- Loader -->
  <div id="loader-container"></div>

  <!-- Header -->
  <div id="header-container"></div>

  <!-- Hero Section -->
  <div id="hero-container"></div>

  <!-- About Section -->
  <div id="about-container"></div>

  <!-- Services Section -->
  <div id="services-container"></div>

  <!-- Contact Section -->
  <div id="contact-container"></div>

  <!-- Footer -->
  <div id="footer-container"></div>

  <!-- Component Scripts -->
  <script type="module">
    import { 
      Header, Hero, About, Services, ContactForm, Footer, Loader,
      renderComponent, initAllComponents 
    } from './src/components/index.js';

    // Render components
    renderComponent(Loader, 'loader-container');
    renderComponent(Header, 'header-container');
    renderComponent(Hero, 'hero-container', ${JSON.stringify(mergedConfig.heroProps)});
    renderComponent(About, 'about-container', ${JSON.stringify(mergedConfig.aboutProps)});
    renderComponent(Services, 'services-container', ${JSON.stringify(mergedConfig.servicesProps)});
    renderComponent(ContactForm, 'contact-container', ${JSON.stringify(mergedConfig.contactProps)});
    renderComponent(Footer, 'footer-container');

    // Initialize all components
    initAllComponents();
  </script>
</body>
</html>
  `;
}

// Example usage functions
export const conversionExamples = {
  // Convert home page
  convertHomePage: () => {
    return convertPageToComponents('home');
  },

  // Convert services page
  convertServicesPage: () => {
    return convertPageToComponents('services');
  },

  // Convert about page
  convertAboutPage: () => {
    return convertPageToComponents('about');
  },

  // Convert contact page
  convertContactPage: () => {
    return convertPageToComponents('contact');
  },

  // Create custom page
  createCustomPage: (config) => {
    return createComponentPage(config);
  }
};

// Helper function to save converted page to file
export function savePageToFile(pageHTML, filename) {
  // This would typically be used in a Node.js environment
  // For browser usage, you can copy the generated HTML
  console.log(`Page content for ${filename}:`);
  console.log(pageHTML);
  
  // In a real implementation, you might use:
  // const fs = require('fs');
  // fs.writeFileSync(filename, pageHTML);
}

// Usage examples
export const examples = {
  // Example 1: Convert existing home page
  homePage: () => {
    const pageHTML = conversionExamples.convertHomePage();
    if (pageHTML) {
      savePageToFile(pageHTML, 'index-component.html');
    }
  },

  // Example 2: Create custom services page
  customServicesPage: () => {
    const pageHTML = createComponentPage({
      title: 'Custom Services | HansLacida.com',
      description: 'Custom services page with specific offerings',
      heroProps: {
        title: 'Custom Services Title',
        subtitle: 'Custom services description',
        primaryButton: { href: '/contact/', text: 'Get Started' }
      },
      servicesProps: {
        title: 'Our Custom Services',
        services: [
          {
            title: 'Custom Service 1',
            description: 'Description of custom service 1',
            icon: 'fas fa-star',
            link: '/services/custom-1/'
          },
          {
            title: 'Custom Service 2',
            description: 'Description of custom service 2',
            icon: 'fas fa-heart',
            link: '/services/custom-2/'
          }
        ]
      }
    });
    
    savePageToFile(pageHTML, 'custom-services.html');
  }
}; 