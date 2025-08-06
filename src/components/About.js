// About Section Component
export function About({ 
  title = 'About Hanzel Lacida',
  subtitle = 'Former Senior Account Strategist at Google (2020-2023) with expertise in PPC management, SEM strategies, and business consulting. Also a talented composer and music producer.',
  heading = 'Fractional CMO & Google Ads Expert',
  description = 'I help businesses scale their digital presence through strategic Google Ads management, comprehensive SEM campaigns, and data-driven marketing strategies. With experience managing millions in ad spend, I deliver measurable ROI for clients across industries.',
  primaryLink = { href: '/about/', text: 'Learn More About Hanzel →' },
  secondaryLink = { href: 'https://linktr.ee/hanslacida', text: 'LinkTree Bio →' },
  imageSrc = 'images/banner1.png',
  imageAlt = 'Hanzel Lacida'
}) {
  return `
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-baloo font-bold text-gray-800 mb-4">
            ${title}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            ${subtitle}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-baloo font-bold text-theme-blue">
              ${heading}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              ${description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="${primaryLink.href}" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                ${primaryLink.text}
              </a>
              <a href="${secondaryLink.href}" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                ${secondaryLink.text}
              </a>
            </div>
          </div>
          <div class="text-center">
            <img src="${imageSrc}" alt="${imageAlt}" class="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale" />
          </div>
        </div>
      </div>
    </section>
  `;
} 