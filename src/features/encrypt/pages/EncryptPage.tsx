import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Textarea,
} from '@mui/joy'
import { useState } from 'react'
import EncryptModal from '../components/EncryptModal'
import encrypt from '../../cipher/encrypt'
import generateDek from '../../cipher/generate-dek'
import Result from '../components/Result'
import { EncryptionResult } from '../types'

// TODO: Use web workers to improve performance
const EncryptPage: React.FC = () => {
	const [plainText, setPlainText] = useState('')
	const [isEncryptModalOpen, setIsEncryptModalOpen] = useState(false)
	const [result, setResult] = useState<EncryptionResult | null>(null)
	const [isDekEnabled, setIsDekEnabled] = useState(false)

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

	const handleToggleDekUsage = () => {
		setIsDekEnabled((previousValue) => !previousValue)
	}

	const handleEncrypt = (password: string) => {
		if (!isDekEnabled) {
			const encryptedData = encrypt(plainText, password)

			if (!encryptedData) {
				setResult({
					errorMessage: 'Encryption failed.',
				})
				return
			}

			setResult({
				encryptedData,
			})
			setPlainText('')
			return
		}

		const dek = generateDek()
		const encryptedData = encrypt(plainText, dek)

		if (!encryptedData) {
			setResult({
				errorMessage: 'Encryption failed.',
			})
			return
		}

		const encryptedDek = encrypt(dek, password)

		if (!encryptedDek) {
			setResult({
				errorMessage: 'DEK encryption failed.',
			})
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
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				gap="1rem"
			>
				<Checkbox
					label="Use Data Encryption Key"
					checked={isDekEnabled}
					onChange={handleToggleDekUsage}
				/>
				<Button variant="solid" onClick={handleOpenEncryptModal}>
					Encrypt
				</Button>
			</Box>
			{result && <Result result={result} />}
			<EncryptModal
				isOpen={isEncryptModalOpen}
				setIsOpen={setIsEncryptModalOpen}
				onEncrypt={handleEncrypt}
			/>
		</Box>
	)
}

export default EncryptPage
