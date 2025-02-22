import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
    },
  };
});