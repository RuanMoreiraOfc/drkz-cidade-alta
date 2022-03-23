import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default (config: UserConfig) => {
  var env = {} as {
    VITE_APP_BASE_URL?: string;
  };

  if (config.mode) {
    env = loadEnv(config.mode, process.cwd());
  }

  return defineConfig({
    base: env.VITE_APP_BASE_URL,
    plugins: [
      react(), //
      tsconfigPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
    },
  });
};
