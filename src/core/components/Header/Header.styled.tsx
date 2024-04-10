import { styled } from '@mui/joy/styles'

export const MobileMenuContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',

	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}))

export const DesktopMenuContainer = styled('div')(({ theme }) => ({
	display: 'none',

	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		alignItems: 'center',
		gap: '3rem',
	},
}))
