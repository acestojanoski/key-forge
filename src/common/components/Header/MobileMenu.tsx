import {
	Box,
	DialogContent,
	DialogTitle,
	Drawer,
	IconButton,
	ModalClose,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import HeaderLink from './HeaderLink'
import Logo from '../Logo'
import { useLocation } from 'react-router-dom'
import menuConfig from '../../constants/menu-config'

const Mobile = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	useEffect(
		function closeMenuOnLocationChange() {
			setIsMenuOpen(false)
		},
		[location],
	)

	const handleOpenMenu = () => {
		setIsMenuOpen(true)
	}

	const handleCloseMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<IconButton onClick={handleOpenMenu}>
				<FaBars />
			</IconButton>
			<Drawer
				size="sm"
				open={isMenuOpen}
				anchor="top"
				onClose={handleCloseMenu}
			>
				<DialogTitle>
					<Logo />
				</DialogTitle>
				<DialogContent>
					<ModalClose />
					<Box
						display="flex"
						flexDirection="column"
						gap="0.5rem"
						padding="0.8rem"
					>
						{menuConfig.map((item) => (
							<HeaderLink key={item.href} href={item.href}>
								{item.text}
							</HeaderLink>
						))}
					</Box>
				</DialogContent>
			</Drawer>
		</>
	)
}

export default Mobile
