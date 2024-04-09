import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			// polyfills
			crypto: 'crypto-browserify',
			randombytes: 'wx-randombytes',
			stream: 'readable-stream',
		},
	},
	define: {
		global: {},
		process: {
			version: 'v0.0.0',
		},
	},
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
	},
})
