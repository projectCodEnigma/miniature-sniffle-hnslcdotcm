// Footer Component
export function Footer() {
  return `
    <footer class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center">
              <img src="images/hanslacida_favicon.jpg" alt="HansLacida.com" class="h-10 w-auto mr-3" />
              <span class="text-xl font-baloo font-bold">HansLacida</span>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Expert PPC management and digital marketing solutions to help your business scale and succeed online.
            </p>
            <div class="flex space-x-4">
              <a href="https://linkedin.com/in/hanslacida" class="text-gray-300 hover:text-white transition-colors duration-300">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com/hanslacida" class="text-gray-300 hover:text-white transition-colors duration-300">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://linktr.ee/hanslacida" class="text-gray-300 hover:text-white transition-colors duration-300">
                <i class="fas fa-link text-xl"></i>
              </a>
            </div>
          </div>
          
          <!-- Services -->
          <div class="space-y-4">
            <h3 class="text-lg font-baloo font-bold">Services</h3>
            <ul class="space-y-2">
              <li><a href="/services/" class="text-gray-300 hover:text-white transition-colors duration-300">Google Ads Management</a></li>
              <li><a href="/services/" class="text-gray-300 hover:text-white transition-colors duration-300">SEM Strategy</a></li>
              <li><a href="/services/" class="text-gray-300 hover:text-white transition-colors duration-300">Business Consulting</a></li>
              <li><a href="/services/" class="text-gray-300 hover:text-white transition-colors duration-300">Fractional CMO</a></li>
            </ul>
          </div>
          
          <!-- Resources -->
          <div class="space-y-4">
            <h3 class="text-lg font-baloo font-bold">Resources</h3>
            <ul class="space-y-2">
              <li><a href="/case-studies/" class="text-gray-300 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="/blog/" class="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="/free-marketing-audit/" class="text-gray-300 hover:text-white transition-colors duration-300">Free Audit</a></li>
              <li><a href="/pricing/" class="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div class="space-y-4">
            <h3 class="text-lg font-baloo font-bold">Contact</h3>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-300">
                <i class="fas fa-envelope mr-2"></i>
                <a href="mailto:hello@hanslacida.com" class="hover:text-white transition-colors duration-300">hello@hanslacida.com</a>
              </li>
              <li class="flex items-center text-gray-300">
                <i class="fas fa-phone mr-2"></i>
                <a href="tel:+1234567890" class="hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li class="flex items-center text-gray-300">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-300 text-sm">
              © ${new Date().getFullYear()} HansLacida.com. All rights reserved.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" class="text-gray-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="/terms-of-service" class="text-gray-300 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
} 