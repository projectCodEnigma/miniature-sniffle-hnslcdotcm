// Loader Component
export function Loader() {
  return `
    <div id="loader" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div class="loader w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  `;
}

// Loader JavaScript functionality
export function initLoader() {
  const loader = document.getElementById('loader');
  
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }, 500);
    });
  }
} 