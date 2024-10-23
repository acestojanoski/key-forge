import { Typography } from '@mui/joy'
import { Link, useLocation } from 'react-router-dom'

type HeaderLinkProps = {
	href: string
}

const HeaderLink: React.FC<React.PropsWithChildren<HeaderLinkProps>> = ({
	href,
	children,
}) => {
	const { pathname } = useLocation()
	const isActive = pathname === href

	return (
		<Link to={href}>
			<Typography
				color={isActive ? 'primary' : 'neutral'}
				component="span"
				level="body-md"
			>
				{children}
			</Typography>
		</Link>
	)
}

export default HeaderLink
