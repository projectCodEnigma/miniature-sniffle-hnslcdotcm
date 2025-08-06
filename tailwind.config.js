/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "!./node_modules/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'baloo': ['Baloo Chettan', 'cursive'],
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        'theme-blue': '#1a3cd4',
        'theme-dark': '#111111',
        'theme-gray': '#666666',
        'theme-light': '#f8f9fa',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-success': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(26, 60, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(26, 60, 212, 0.4)'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    // Custom plugin for gradient text
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        '.text-gradient-blue': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-image': 'linear-gradient(135deg, #1a3cd4 0%, #4facfe 100%)'
        },
        '.hover-scale': {
          'transition': 'transform 0.3s ease-in-out'
        },
        '.hover-scale:hover': {
          'transform': 'scale(1.05)'
        },
        '.hover-lift': {
          'transition': 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
        },
        '.hover-lift:hover': {
          'transform': 'translateY(-5px)',
          'box-shadow': '0 10px 40px -10px rgba(0, 0, 0, 0.15)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      borderColor: ['active', 'disabled'],
      scale: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
      translate: ['active', 'group-hover']
    }
  }
} 