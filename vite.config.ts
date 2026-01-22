import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// On ajoute 'command' dans les paramètres pour savoir si on est en build ou en dev
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // C'EST ICI QUE LA MAGIE OPÈRE :
    // Si on fait un 'npm run build' (pour GitHub), on utilise le nom du repo.
    // Si on est en local ('npm run dev'), on reste à la racine '/'.
    base: command === 'build' ? '/jason-chris-portfolio/' : '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});