import { Box, IconButton, Typography } from '@mui/joy'
import { useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa6'

type ResultItemProps = {
	label: string
	value: string
}

const ResultItem: React.FC<ResultItemProps> = ({ label, value }) => {
	const [copied, setCopied] = useState(false)

	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(value)

			setCopied(true)
			setTimeout(() => {
				setCopied(false)
			}, 1000)
		} catch {
			console.error('Cannot copy to clipboard...')
		}
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
