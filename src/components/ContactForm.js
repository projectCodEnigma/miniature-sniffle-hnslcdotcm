// Contact Form Component
export function ContactForm({ 
  title = 'Get In Touch',
  subtitle = 'Ready to scale your business? Let\'s discuss how I can help you achieve your marketing goals.',
  formId = 'contact-form'
}) {
  return `
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-baloo font-bold text-gray-800 mb-4">
              ${title}
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              ${subtitle}
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-baloo font-bold text-gray-800 mb-6">
                  Let's Start a Conversation
                </h3>
                <p class="text-gray-600 leading-relaxed mb-8">
                  Whether you're looking to optimize your Google Ads campaigns, develop a comprehensive SEM strategy, 
                  or need strategic business consulting, I'm here to help you achieve your goals.
                </p>
              </div>
              
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="bg-blue-600 p-3 rounded-lg mr-4">
                    <i class="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:hello@hanslacida.com" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      hello@hanslacida.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-blue-600 p-3 rounded-lg mr-4">
                    <i class="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-blue-600 p-3 rounded-lg mr-4">
                    <i class="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Response Time</h4>
                    <p class="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <form id="${formId}" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required 
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required 
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required 
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">
                </div>
                
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" id="company" name="company" 
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">
                </div>
                
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select id="service" name="service" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">
                    <option value="">Select a service</option>
                    <option value="google-ads-management">Google Ads Management</option>
                    <option value="sem-strategy">SEM Strategy</option>
                    <option value="business-consulting">Business Consulting</option>
                    <option value="fractional-cmo">Fractional CMO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" rows="4" required 
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                            placeholder="Tell me about your project and goals..."></textarea>
                </div>
                
                <button type="submit" 
                        class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact Form JavaScript functionality
export function initContactForm(formId = 'contact-form') {
  const form = document.getElementById(formId);
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      try {
        // Here you would typically send the form data to your backend
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you within 24 hours.');
        form.reset();
        
      } catch (error) {
        // Show error message
        alert('Sorry, there was an error sending your message. Please try again.');
        
      } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
} 