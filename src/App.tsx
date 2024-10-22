import '@fontsource/inter'
import './styles/global.css'
import './polyfills'

import { RouterProvider } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import theme from './common/theme'
import router from './common/router'

const App: React.FC = () => {
	return (
		<CssVarsProvider
			disableNestedContext
			defaultMode="dark"
			modeStorageKey="theme"
			theme={theme}
		>
			<CssBaseline />
			<RouterProvider router={router} />
		</CssVarsProvider>
	)
}

export default App
