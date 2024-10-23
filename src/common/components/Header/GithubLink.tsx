import { IconButton } from '@mui/joy'
import { FaGithub } from 'react-icons/fa6'

const GithubLink = () => {
	return (
		<a
			href="https://github.com/acestojanoski/key-forge"
			target="_blank"
			rel="noreferrer"
		>
			<IconButton>
				<FaGithub />
			</IconButton>
		</a>
	)
}

export default GithubLink
