import { createHashRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import dynamic from './hoc/dynamic'

const HomePage = dynamic(() => import('../home/pages/HomePage'))
const DecryptPage = dynamic(() => import('../decrypt/pages/DecryptPage'))

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: 'decrypt',
				element: <DecryptPage />,
			},
		],
	},
])

export default router
