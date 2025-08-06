// Main components index file
export { Header, initHeader } from './Header.js';
export { Hero } from './Hero.js';
export { About } from './About.js';
export { Services } from './Services.js';
export { Footer } from './Footer.js';
export { Loader, initLoader } from './Loader.js';
export { ContactForm, initContactForm } from './ContactForm.js';

// Utility function to render components
export function renderComponent(componentFunction, containerId, props = {}) {
  const container = document.getElementById(containerId);
  if (container && componentFunction) {
    container.innerHTML = componentFunction(props);
  }
}

// Utility function to initialize all components
export function initAllComponents() {
  initHeader();
  initLoader();
  initContactForm();
}

// Utility function to create a complete page
export function createPage({
  title = 'HansLacida.com',
  description = 'Expert PPC Management & Digital Marketing Solutions',
  heroProps = {},
  aboutProps = {},
  servicesProps = {},
  contactProps = {}
}) {
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
      <title>${title}</title>
      <meta name="description" content="${description}">
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
        renderComponent(Hero, 'hero-container', heroProps);
        renderComponent(About, 'about-container', aboutProps);
        renderComponent(Services, 'services-container', servicesProps);
        renderComponent(ContactForm, 'contact-container', contactProps);
        renderComponent(Footer, 'footer-container');

        // Initialize all components
        initAllComponents();
      </script>
    </body>
    </html>
  `;
} 