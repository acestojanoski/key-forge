import { Box, IconButton, Typography } from '@mui/joy'
import { FaCheck, FaCopy } from 'react-icons/fa6'
import useCopyToClipboard from '../hooks/use-copy-to-clipboard'

type ResultItemProps = {
	label: string
	value: string
}

const ResultItem: React.FC<ResultItemProps> = ({ label, value }) => {
	const { copied, copyToClipboard } = useCopyToClipboard()

	const handleCopyToClipboard = async () => {
		copyToClipboard(value)
	}

	return (
		<Box display="flex" gap="1rem" alignItems="center">
			<Typography
				level="body-sm"
				component="div"
				sx={{
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					width: '100%',
					display: 'block',
					overflow: 'hidden',
				}}
			>
				<Typography level="inherit" component="span" fontWeight="700">
					{label}
				</Typography>{' '}
				{value}
			</Typography>
			<IconButton onClick={handleCopyToClipboard}>
				{copied ? <FaCheck /> : <FaCopy />}
			</IconButton>
		</Box>
	)
}

export default ResultItem
