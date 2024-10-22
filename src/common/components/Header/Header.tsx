import { Box } from '@mui/joy'
import DesktopMenu from './DesktopMenu'
import { DesktopMenuContainer, MobileMenuContainer } from './Header.styled'
import MobileMenu from './MobileMenu'
import ThemeSwitch from '../ThemeSwitch'
import Logo from '../Logo'
import GithubLink from './GithubLink'

const Header = () => {
	const themeSwitchElement = <ThemeSwitch />
	const githubLink = <GithubLink />

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
				{githubLink}
				<MobileMenu />
			</MobileMenuContainer>
			<DesktopMenuContainer>
				<DesktopMenu />
				{githubLink}
				{themeSwitchElement}
			</DesktopMenuContainer>
		</Box>
	)
}

export default Header
