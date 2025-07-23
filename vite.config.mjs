import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), react()],
	build: {
		outDir: 'dist',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (
							id.includes('tailwindcss') ||
							id.includes('postcss') ||
							id.includes('autoprefixer')
						) {
							return;
						}
						const parts = id.split('node_modules/');
						if (parts.length > 1) {
							const moduleName = parts[1].split('/')[0];
							return `vendor-${moduleName}`;
						}
					}
				},
			},
		},
	},
});
