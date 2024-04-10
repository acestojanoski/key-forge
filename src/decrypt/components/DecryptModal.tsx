import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalClose,
	ModalDialog,
} from '@mui/joy'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

type DecryptModalProps = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	onDecrypt: (password: string, encryptedDek?: string) => void
	isDekEnabled: boolean
}

const DecryptModal: React.FC<DecryptModalProps> = ({
	isOpen,
	setIsOpen,
	onDecrypt,
	isDekEnabled,
}) => {
	const [encryptedDek, setEncryptedDek] = useState('')
	const [password, setPassword] = useState('')
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setPassword(event.target.value)
	}

	const handleEncryptedDekChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setEncryptedDek(event.target.value)
	}

	const handleTogglePasswordVisibility = () => {
		setIsPasswordVisible((previousValue) => !previousValue)
	}

	const handleClose = () => {
		setIsOpen(false)
		setPassword('')
		setEncryptedDek('')
		setIsPasswordVisible(false)
	}

	const handleDecrypt: React.FormEventHandler = (event) => {
		event.preventDefault()

		if (!password) {
			return
		}

		if (isDekEnabled && !encryptedDek) {
			return
		}

		handleClose()
		onDecrypt(password, encryptedDek)
	}

	return (
		<Modal open={isOpen} onClose={handleClose}>
			<ModalDialog size="lg">
				<ModalClose />
				<DialogTitle>Decrypt</DialogTitle>
				<DialogContent>
					<Box
						component="form"
						display="flex"
						flexDirection="column"
						gap="1rem"
						onSubmit={handleDecrypt}
					>
						{isDekEnabled && (
							<FormControl>
								<FormLabel>Encrypted Data Encryption Key</FormLabel>
								<Input
									required
									type="text"
									value={encryptedDek}
									onChange={handleEncryptedDekChange}
								/>
							</FormControl>
						)}
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input
								required
								type={isPasswordVisible ? 'text' : 'password'}
								value={password}
								onChange={handlePasswordChange}
								endDecorator={
									<IconButton onClick={handleTogglePasswordVisibility}>
										{isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
									</IconButton>
								}
							/>
						</FormControl>
						<Button type="submit" variant="solid" color="primary">
							Decrypt
						</Button>
					</Box>
				</DialogContent>
			</ModalDialog>
		</Modal>
	)
}

export default DecryptModal
