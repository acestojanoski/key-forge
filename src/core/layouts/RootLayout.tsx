import { Box, Divider } from '@mui/joy'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const RootLayout = () => {
	return (
		<Box width="100%" maxWidth="1280px" margin="0 auto" paddingX="2rem">
			<Header />
			<Divider />
			<Box paddingY="2rem">
				<Outlet />
			</Box>
		</Box>
	)
}

export default RootLayout
