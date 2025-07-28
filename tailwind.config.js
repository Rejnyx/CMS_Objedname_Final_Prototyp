/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          '100': '#FFEEF2',
          '500': '#FF6C1E',
          '600': '#E6621A', // Darker shade for hover
        },
        neutral: {
          '0': '#FFFFFF',
          '100': '#FAF4F0',
          '200': '#F7F7F7',
          '300': '#E5E5E5',
          '600': '#626262',
          '700': '#4a4a4a',
          '800': '#333333',
          '900': '#212121',
        },
        green: {
          '500': '#28A745',
          '600': '#218838',
        },
        red: {
          '500': '#E53935',
          '600': '#D32F2F',
        },
        blue: {
          '500': '#4A90E2',
        },
        overlay: {
          'bg': '#252525',
        },
        'active-bg': '#FFEEE2',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem', // 16px
      }
    },
  },
  plugins: [],
}
