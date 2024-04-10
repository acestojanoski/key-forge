import { Typography } from '@mui/joy'

const Logo = () => {
	return (
		<Typography
			sx={{ pointerEvents: 'none' }}
			level="h3"
			component="span"
			fontFamily="monospace"
			fontWeight="100"
		>
			Key
			<Typography component="span" level="inherit" color="primary">
				Forge
			</Typography>
		</Typography>
	)
}

export default Logo
