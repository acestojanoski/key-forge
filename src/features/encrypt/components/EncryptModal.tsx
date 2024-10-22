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

type EncryptModalProps = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	onEncrypt: (password: string) => void
}

const EncryptModal: React.FC<EncryptModalProps> = ({
	isOpen,
	setIsOpen,
	onEncrypt,
}) => {
	const [password, setPassword] = useState('')
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setPassword(event.target.value)
	}

	const handleTogglePasswordVisibility = () => {
		setIsPasswordVisible((previousValue) => !previousValue)
	}

	const handleClose = () => {
		setIsOpen(false)
		setPassword('')
		setIsPasswordVisible(false)
	}

	const handleEncrypt: React.FormEventHandler = (event) => {
		event.preventDefault()

		if (!password) {
			return
		}

		handleClose()
		onEncrypt(password)
	}

	return (
		<Modal open={isOpen} onClose={handleClose}>
			<ModalDialog size="lg">
				<ModalClose />
				<DialogTitle>Encrypt</DialogTitle>
				<DialogContent>
					<Box
						component="form"
						display="flex"
						flexDirection="column"
						gap="1rem"
						onSubmit={handleEncrypt}
					>
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
							Encrypt
						</Button>
					</Box>
				</DialogContent>
			</ModalDialog>
		</Modal>
	)
}

export default EncryptModal
