import { Box, Button, Typography } from '@mui/joy'
import { useState } from 'react'
import { FaCopy } from 'react-icons/fa6'

const BlockchainCard = ({
	coin,
	address,
	qrCodeSrc,
}: {
	coin: string
	address: string
	qrCodeSrc: string
}) => {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		if (copied) {
			return
		}

		if (typeof navigator?.clipboard?.writeText !== 'function') {
			return
		}

		try {
			await navigator.clipboard.writeText(address)

			setCopied(true)
			setTimeout(() => {
				setCopied(false)
			}, 1500)
		} catch {
			// Swallow the error
		}
	}

	return (
		<Box
			sx={{
				borderRadius: '20px',
				padding: '20px',
				backgroundColor: '#ffffff',
				margin: '0 auto',
			}}
		>
			<Typography
				level="body-md"
				sx={{
					fontWeight: '700',
					color: '#000000',
					wordBreak: 'break-all',
					textAlign: 'center',
					paddingBottom: '20px',
				}}
			>
				{coin}
			</Typography>
			<Box
				component="img"
				alt={`${coin} QR code`}
				src={qrCodeSrc}
				maxWidth="300px"
				maxHeight="300px"
				sx={{
					maxWidth: '200px',
					maxHeight: '200px',
				}}
			/>
			<Typography
				level="body-sm"
				sx={{
					color: '#000000',
					wordBreak: 'break-all',
					textAlign: 'center',
					paddingBottom: '20px',
				}}
			>
				{address}
			</Typography>
			<Button startDecorator={<FaCopy />} onClick={handleCopy}>
				{copied ? 'Copied' : 'Copy'}
			</Button>
		</Box>
	)
}

export default BlockchainCard
