import { Box } from '@mui/joy'
import DesktopMenu from './DesktopMenu'
import { DesktopMenuContainer, MobileMenuContainer } from './Header.styled'
import MobileMenu from './MobileMenu'
import ThemeSwitch from '../ThemeSwitch'
import Logo from '../Logo'

const Header = () => {
	const themeSwitchElement = <ThemeSwitch />

	return (
		<Box
			paddingY="2rem"
			display="flex"
			gap="3rem"
			alignItems="center"
			justifyContent="space-between"
			width="100%"
		>
			<Logo />
			<MobileMenuContainer>
				{themeSwitchElement}
				<MobileMenu />
			</MobileMenuContainer>
			<DesktopMenuContainer>
				<DesktopMenu />
				{themeSwitchElement}
			</DesktopMenuContainer>
		</Box>
	)
}

export default Header
