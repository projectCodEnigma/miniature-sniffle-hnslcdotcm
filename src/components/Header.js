// Header Component
export function Header() {
  return `
    <header class="bg-white shadow-lg sticky top-0 z-40">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="index.html" class="flex items-center">
              <img src="images/hanslacida_favicon.jpg" alt="HansLacida.com" class="h-12 w-auto" />
            </a>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="/" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Home</a>
            <a href="#about" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">About</a>
            <a href="#services" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Services</a>
            <a href="https://pricing.hanslacida.com" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Pricing</a>
            <a href="/case-studies/" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Case Studies</a>
            <a href="#contact" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Contact</a>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden text-gray-800 hover:text-blue-600" aria-label="Toggle mobile menu">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden pb-4">
          <div class="flex flex-col space-y-4">
            <a href="/" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Home</a>
            <a href="#about" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">About</a>
            <a href="#services" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Services</a>
            <a href="https://pricing.hanslacida.com" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Pricing</a>
            <a href="/case-studies/" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Case Studies</a>
            <a href="#contact" class="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </header>
  `;
}

// Header JavaScript functionality
export function initHeader() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
} 