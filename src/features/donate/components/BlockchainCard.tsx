import { Box, Button, Typography } from '@mui/joy'
import { QRCodeSVG } from 'qrcode.react'
import { FaCheck, FaCopy } from 'react-icons/fa6'
import useCopyToClipboard from '../../../common/hooks/use-copy-to-clipboard'

const BlockchainCard = ({
	symbol,
	address,
}: {
	symbol: string
	address: string
}) => {
	const { copied, copyToClipboard } = useCopyToClipboard()

	const handleCopyToClipboard = () => {
		copyToClipboard(address)
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
				onClick={handleCopyToClipboard}
			>
				{copied ? 'Copied' : 'Copy'}
			</Button>
		</Box>
	)
}

export default BlockchainCard
