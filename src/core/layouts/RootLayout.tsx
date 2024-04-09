import { Box, Divider, Typography } from '@mui/joy'
import { Link, Outlet } from 'react-router-dom'
import HeaderLink from '../components/HeaderLink'

const RootLayout = () => {
	return (
		<Box width="100%" maxWidth="1280px" margin="0 auto" paddingX="2rem">
			<Box paddingY="2rem" display="flex" gap="3rem" alignItems="center">
				<Typography
					sx={{ pointerEvents: 'none' }}
					level="h3"
					fontFamily="monospace"
					fontWeight="100"
				>
					Key
					<Typography component="span" level="inherit" color="primary">
						Forge
					</Typography>
				</Typography>
				<Box display="flex" alignItems="center" gap="1rem">
					<HeaderLink href="/">Encrypt</HeaderLink>
					<HeaderLink href="/decrypt">Decrypt</HeaderLink>
				</Box>
			</Box>
			<Divider />
			<Box paddingY="2rem">
				<Outlet />
			</Box>
		</Box>
	)
}

export default RootLayout
