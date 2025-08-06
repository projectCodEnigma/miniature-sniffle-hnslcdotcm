// Services Section Component
export function Services({ 
  title = 'Our Services',
  subtitle = 'We provide expert PPC management, tailored keyword strategies, and comprehensive campaign optimization to maximize your ROI.',
  services = []
}) {
  const defaultServices = [
    {
      title: 'Google Ads Management',
      description: 'Comprehensive PPC campaign management with strategic optimization and performance tracking.',
      icon: 'fas fa-chart-line',
      link: '/services/'
    },
    {
      title: 'SEM Strategy',
      description: 'Data-driven search engine marketing strategies to improve your online visibility and conversions.',
      icon: 'fas fa-search',
      link: '/services/'
    },
    {
      title: 'Business Consulting',
      description: 'Strategic business consulting to help scale your operations and maximize growth potential.',
      icon: 'fas fa-lightbulb',
      link: '/services/'
    }
  ];

  const servicesToRender = services.length > 0 ? services : defaultServices;

  return `
    <section id="services" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-baloo font-bold text-gray-800 mb-4">
            ${title}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            ${subtitle}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          ${servicesToRender.map(service => `
            <div class="bg-white p-8 rounded-lg shadow-lg hover-scale border border-gray-100">
              <div class="text-blue-600 mb-4">
                <i class="${service.icon} text-3xl"></i>
              </div>
              <h3 class="text-xl font-baloo font-bold text-gray-800 mb-4">
                ${service.title}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                ${service.description}
              </p>
              <a href="${service.link}" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                Learn More →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
} 