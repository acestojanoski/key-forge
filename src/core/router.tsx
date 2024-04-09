import { createHashRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from '../home/pages/HomePage'

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
		],
	},
])

export default router
