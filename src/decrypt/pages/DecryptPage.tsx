import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Textarea,
} from '@mui/joy'
import { useState } from 'react'
import DecryptModal from '../components/DecryptModal'
import decrypt from '../../cipher/decrypt'
import { DecryptionResult } from '../types'
import Result from '../components/Result'

// TODO: Use web workers to improve performance
const DecryptPage = () => {
	const [encryptedData, setEncryptedData] = useState('')
	const [isDekEnabled, setIsDekEnabled] = useState(true)
	const [isDecryptModalOpen, setIsDecryptModalOpen] = useState(false)
	const [result, setResult] = useState<DecryptionResult | null>(null)

	const handleEncryptedDataChange: React.ChangeEventHandler<
		HTMLTextAreaElement
	> = (event) => {
		setEncryptedData(event.target.value)
	}

	const handleToggleDekUsage = () => {
		setIsDekEnabled((previousValue) => !previousValue)
	}

	const handleOpenDecryptModal = () => {
		if (!encryptedData) {
			return
		}

		setIsDecryptModalOpen(true)
	}

	const handleDecrypt = (password: string, encryptedDek?: string) => {
		if (!isDekEnabled) {
			const decryptedData = decrypt(encryptedData, password)

			if (!decryptedData) {
				setResult({
					errorMessage: 'Decryption failed.',
				})
				return
			}

			setEncryptedData('')
			setResult({ decryptedData })
			return
		}

		if (!encryptedDek) {
			setResult({
				errorMessage: 'No DEK provided.',
			})
			return
		}

		const dek = decrypt(encryptedDek, password)

		if (!dek) {
			setResult({
				errorMessage: 'DEK decryption failed.',
			})
			return
		}

		const decryptedData = decrypt(encryptedData, dek)

		if (!decryptedData) {
			setResult({
				errorMessage: 'Decryption failed.',
			})
			return
		}

		setEncryptedData('')
		setResult({ decryptedData })
	}

	return (
		<Box display="flex" flexDirection="column" gap="2rem">
			<FormControl>
				<FormLabel>Encrypted Data</FormLabel>
				<Textarea
					placeholder="Type or paste..."
					variant="outlined"
					minRows={10}
					value={encryptedData}
					onChange={handleEncryptedDataChange}
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
				<Button variant="solid" onClick={handleOpenDecryptModal}>
					Decrypt
				</Button>
			</Box>
			{result && <Result result={result} />}
			<DecryptModal
				isOpen={isDecryptModalOpen}
				setIsOpen={setIsDecryptModalOpen}
				onDecrypt={handleDecrypt}
				isDekEnabled={isDekEnabled}
			/>
		</Box>
	)
}

export default DecryptPage
