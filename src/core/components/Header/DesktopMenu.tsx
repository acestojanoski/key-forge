import { Box } from '@mui/joy'
import menuConfig from '../../constants/menu-config'
import HeaderLink from './HeaderLink'

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
