/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0a0a0a',
        'surface-elevated': '#141414',
        'surface-hover': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'text-tertiary': '#666666',
        border: '#262626',
        'border-hover': '#404040',
        accent: '#3b82f6',
        'accent-hover': '#2563eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.5)',
        md: '0 4px 12px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 25px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
