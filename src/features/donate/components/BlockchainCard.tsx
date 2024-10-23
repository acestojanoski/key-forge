import { Box, Button, Typography } from '@mui/joy'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa6'

const BlockchainCard = ({
	symbol,
	address,
}: {
	symbol: string
	address: string
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
			console.error('Cannot copy to clipboard...')
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
				{symbol}
			</Typography>
			<QRCodeSVG
				value={address}
				marginSize={4}
				imageSettings={{
					src: '/favicon.png',
					excavate: true,
					width: 40,
					height: 40,
				}}
				level="H"
				width={180}
				height={180}
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
			<Button
				startDecorator={copied ? <FaCheck /> : <FaCopy />}
				onClick={handleCopy}
			>
				{copied ? 'Copied' : 'Copy'}
			</Button>
		</Box>
	)
}

export default BlockchainCard
