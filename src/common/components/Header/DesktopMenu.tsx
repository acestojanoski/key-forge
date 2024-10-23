import { Box } from '@mui/joy'
import HeaderLink from './HeaderLink'
import menuConfig from '../../constants/menu-config'

const DesktopMenu = () => {
	return (
		<Box display="flex" alignItems="center" gap="1rem">
			{menuConfig.map((item) => (
				<HeaderLink key={item.href} href={item.href}>
					{item.text}
				</HeaderLink>
			))}
		</Box>
	)
}

export default DesktopMenu
