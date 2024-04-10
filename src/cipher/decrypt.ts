import { ALGORITHM, ENCRYPTION_DECORATOR } from './constants'
import deriveKeyFromPassword from './derive-key-from-password'
import crypto from 'crypto'

function decrypt(cipherText: string, password: string): string | null {
	try {
		const cipherTextParts = cipherText.split(ENCRYPTION_DECORATOR)

		if (cipherTextParts.length !== 2) {
			console.error(
				'[cipher/decrypt-aes-gcm] Could not determine the beginning of the cipherText. Maybe not encrypted by this method.',
			)
			return null
		} else {
			cipherText = cipherTextParts[1]
		}

		const inputData: Buffer = Buffer.from(cipherText, 'hex')

		// Split cipherText into partials
		const salt: Buffer = inputData.subarray(0, 64)
		const iv: Buffer = inputData.subarray(64, 80)
		const authTag: Buffer = inputData.subarray(80, 96)
		const iterations: number = parseInt(
			inputData.subarray(96, 101).toString('utf8'),
			10,
		)
		const encryptedData: Buffer = inputData.slice(101)

		// Derive key
		const decryptionKey = deriveKeyFromPassword(
			password,
			salt,
			Math.floor(iterations * 0.47 + 1337),
		)

		// Create decipher
		const decipher = crypto.createDecipheriv(ALGORITHM, decryptionKey, iv)
		decipher.setAuthTag(authTag)

		// Decrypt data
		const decrypted = decipher.update(encryptedData) + decipher.final('utf8')

		return decrypted
	} catch (error) {
		console.error('[cipher/decrypt-aes-gcm] encryption failed', error)
		return null
	}
}

export default decrypt
