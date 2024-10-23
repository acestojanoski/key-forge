import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import theme from './src/common/theme'

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
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.png',
				'logo-512x512.png',
				'btc-qr-code.png',
				'eth-qr-code.png',
				'sol-qr-code.png',
				'ton-qr-code.png',
			],
			manifest: {
				name: 'KeyForge',
				short_name: 'KeyForge',
				description: 'Data encryption tool.',
				theme_color: theme.colorSchemes.dark.palette.background.body,
				background_color: theme.colorSchemes.dark.palette.background.body,
				icons: [
					{
						src: 'favicon.png',
						sizes: '150x150',
						type: 'image/png',
					},
					{
						src: 'logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
	server: {
		port: 3000,
		open: true,
	},
})
