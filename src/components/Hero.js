// Hero Section Component
export function Hero({ title, subtitle, primaryButton, secondaryButton, imageSrc, imageAlt }) {
  return `
    <section class="gradient-bg text-white py-12 md:py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="space-y-4 md:space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-baloo font-bold leading-tight">
              ${title || 'Expert PPC Management & Digital Marketing Solutions'}
            </h1>
            <p class="text-lg sm:text-xl text-blue-100 leading-relaxed">
              ${subtitle || 'Transform your business with data-driven Google Ads strategies and comprehensive digital marketing solutions. From fractional CMO services to music production, I deliver results that scale.'}
            </p>
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              ${primaryButton ? `
                <a href="${primaryButton.href}" class="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center text-sm md:text-base">
                  ${primaryButton.text}
                </a>
              ` : ''}
              ${secondaryButton ? `
                <a href="${secondaryButton.href}" class="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center text-sm md:text-base">
                  ${secondaryButton.text}
                </a>
              ` : ''}
            </div>
          </div>
          <div class="text-center order-first md:order-last">
            <img src="${imageSrc || 'images/banner.png'}" alt="${imageAlt || 'Digital Marketing Solutions'}" class="w-full max-w-sm sm:max-w-md mx-auto hover-scale" />
          </div>
        </div>
      </div>
    </section>
  `;
} 