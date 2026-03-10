import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework you use

export default defineConfig({
  plugins: [react()],
  base: '/SukinoCafe/', // Add this line! It must match your repo name.
})
