import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Textarea,
	Typography,
} from '@mui/joy'
import { useState } from 'react'
import EncryptModal from '../components/EncryptModal'
import encrypt from '../../cipher/encrypt'
import generateDek from '../../cipher/generate-dek'

type Result = {
	encryptedData: string
	encryptedDek: string
}

const HomePage = () => {
	const [plainText, setPlainText] = useState('')
	const [isEncryptModalOpen, setIsEncryptModalOpen] = useState(false)
	const [result, setResult] = useState<Result | null>(null)

	const handlePlainTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
		event,
	) => {
		setPlainText(event.target.value)
	}

	const handleOpenEncryptModal = () => {
		if (!plainText) {
			return
		}

		setIsEncryptModalOpen(true)
	}

	const handleEncrypt = (password: string) => {
		const dek = generateDek()
		const encryptedData = encrypt(plainText, dek)

		if (!encryptedData) {
			return
		}

		const encryptedDek = encrypt(dek, password)

		if (!encryptedDek) {
			return
		}

		setResult({ encryptedData, encryptedDek })
		setPlainText('')
	}

	return (
		<Box display="flex" flexDirection="column" gap="2rem">
			<FormControl>
				<FormLabel>Plain Text</FormLabel>
				<Textarea
					placeholder="Type or paste..."
					variant="outlined"
					minRows={10}
					value={plainText}
					onChange={handlePlainTextChange}
				/>
			</FormControl>
			<Button variant="solid" onClick={handleOpenEncryptModal}>
				Encrypt
			</Button>
			{result && (
				<Box width="100%" display="flex" flexDirection="column" gap="2rem">
					<Typography
						level="body-sm"
						sx={{
							overflow: 'hidden',
							display: '-webkit-box',
							'-webkit-line-clamp': 1,
							'-webkit-box-orient': 'vertical',
							msTextOverflow: 'ellipsis',
						}}
					>
						Encrypted Data Encryption Key: {result.encryptedDek}
					</Typography>
					<Typography
						level="body-sm"
						sx={{
							overflow: 'hidden',
							display: '-webkit-box',
							'-webkit-line-clamp': 1,
							'-webkit-box-orient': 'vertical',
							msTextOverflow: 'ellipsis',
						}}
					>
						Encrypted Data: {result.encryptedData}
					</Typography>
				</Box>
			)}
			<EncryptModal
				isOpen={isEncryptModalOpen}
				setIsOpen={setIsEncryptModalOpen}
				onEncrypt={handleEncrypt}
			/>
		</Box>
	)
}

export default HomePage
