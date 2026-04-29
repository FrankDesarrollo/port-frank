/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-accent': 'var(--color-primary-accent)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        beige: 'var(--color-beige)',
        green: {
          300: 'var(--color-green300)',
          400: 'var(--color-green400)',
          500: 'var(--color-green500)',
          600: 'var(--color-green600)',
          700: 'var(--color-green700)',
          800: 'var(--color-green800)',
        },
      },
      fontFamily: {
        title: ['var(--titleFont)', 'sans-serif'],
        body: ['var(--bodyFont)', 'sans-serif'],
        amp: ['var(--ampFont)', 'serif'],
        mono: ['var(--monoFont)', 'monospace'],
      },
      fontSize: {
        h1: 'var(--font-h1)',
        h2: 'var(--font-h2)',
        h3: 'var(--font-h3)',
        body: 'var(--font-body)',
        link: 'var(--font-link)',
        mini: 'var(--font-mini)',
      },
      spacing: {
        '14': 'var(--14px)',
        '16': 'var(--16px)',
        '20': 'var(--20px)',
        '24': 'var(--24px)',
        '42': 'var(--42px)',
        '64': 'var(--64px)',
      },
      maxWidth: {
        'content': 'var(--max-width)',
      },
      borderRadius: {
        'base': 'var(--radius-base)',
      },
      zIndex: {
        'base': 'var(--zindex-base)',
        'content': 'var(--zindex-content)',
        'nav': 'var(--zindex-nav)',
      },
      boxShadow: {
        'lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};