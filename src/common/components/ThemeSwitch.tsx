import { Switch, Typography, useColorScheme } from '@mui/joy'

const ThemeSwitch = () => {
	const { mode, setMode } = useColorScheme()

	const handleToggleMode = () => {
		setMode(mode === 'light' ? 'dark' : 'light')
	}

	return (
		<Switch
			size="sm"
			checked={mode === 'dark'}
			slotProps={{
				track: {
					children: (
						<>
							<Typography component="span" level="inherit" sx={{ ml: '10px' }}>
								Dark
							</Typography>
							<Typography component="span" level="inherit" sx={{ mr: '8px' }}>
								Light
							</Typography>
						</>
					),
				},
			}}
			sx={{
				'--Switch-trackWidth': '80px',
				'--Switch-trackHeight': '25px',
				'--Switch-thumbSize': '25px',
				'--Switch-thumbWidth': '40px',
				'--Switch-thumbRadius': '20px',
				'--Switch-trackRadius': '20px',
			}}
			onChange={handleToggleMode}
		/>
	)
}

export default ThemeSwitch
