import { createHashRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import dynamic from './hoc/dynamic'

const EncryptPage = dynamic(
	() => import('../features/encrypt/pages/EncryptPage'),
)

const DecryptPage = dynamic(
	() => import('../features/decrypt/pages/DecryptPage'),
)

const AboutPage = dynamic(() => import('../features/about/pages/AboutPage'))

const DonatePage = dynamic(() => import('../features/donate/pages/DonatePage'))

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <EncryptPage />,
			},
			{
				path: 'decrypt',
				element: <DecryptPage />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'donate',
				element: <DonatePage />,
			},
		],
	},
])

export default router
