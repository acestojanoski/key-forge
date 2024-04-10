import { Box, IconButton, Typography } from '@mui/joy'
import { EncryptionResult } from '../types'
import React, { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa6'

type ResultItemProps = {
	label: string
	value: string
}

const ResultItem: React.FC<ResultItemProps> = ({ label, value }) => {
	const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false)

	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(value)

			setIsCopiedToClipboard(true)
			setTimeout(() => {
				setIsCopiedToClipboard(false)
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
				{isCopiedToClipboard ? <FaCheck /> : <FaCopy />}
			</IconButton>
		</Box>
	)
}

type ResultProps = {
	result: EncryptionResult
}

const Result: React.FC<ResultProps> = ({ result }) => {
	return (
		<Box display="flex" flexDirection="column" gap="2rem">
			{result.encryptedDek && (
				<ResultItem
					label="Encrypted Data Encryption Key:"
					value={result.encryptedDek}
				/>
			)}
			<ResultItem label="Encrypted Data:" value={result.encryptedData} />
		</Box>
	)
}

export default Result
