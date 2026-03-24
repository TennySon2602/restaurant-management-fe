import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Build configuration for web components
  build: {
    lib: {
      entry: {
        'index': path.resolve(__dirname, 'src/web-components/index.ts'),
        'restaurant-app': path.resolve(__dirname, 'src/web-components/restaurant-app.tsx'),
        'customer-booking': path.resolve(__dirname, 'src/web-components/customer-booking.tsx'),
        'staff-pos': path.resolve(__dirname, 'src/web-components/staff-pos.tsx'),
        'manager-dashboard': path.resolve(__dirname, 'src/web-components/manager-dashboard.tsx'),
      },
      formats: ['es', 'umd'],
      name: 'RestaurantComponents',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
})