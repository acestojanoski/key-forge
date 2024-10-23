import { extendTheme } from '@mui/joy/styles'

const theme = extendTheme({
	cssVarPrefix: 'key-forge',
	colorSchemes: {
		dark: {
			palette: {
				background: {
					body: 'rgb(23, 23, 29)',
					surface: '#232328',
				},
			},
		},
	},
})

export default theme
