import { ALGORITHM, ENCRYPTION_MARKER } from './constants'
import deriveKeyFromPassword from './derive-key-from-password'
import crypto from 'crypto'

function decrypt(cipherText: string, password: string): string | null {
	try {
		const cipherTextParts = cipherText.split(ENCRYPTION_MARKER)

		if (cipherTextParts.length !== 2) {
			console.error(
				'[cipher/decrypt] Could not determine the beginning of the cipherText. Maybe not encrypted by this method.',
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
		const encryptedData: Buffer = inputData.subarray(101)

		// Derive key
		const decryptionKey = deriveKeyFromPassword(password, salt, iterations)

		// Create decipher
		const decipher = crypto.createDecipheriv(ALGORITHM, decryptionKey, iv)
		decipher.setAuthTag(authTag)

		// Decrypt data
		const decrypted = decipher.update(encryptedData) + decipher.final('utf8')

		return decrypted
	} catch (error) {
		console.error('[cipher/decrypt] encryption failed', error)
		return null
	}
}

export default decrypt
