import { ALGORITHM, ENCRYPTION_DECORATOR } from './constants'
import deriveKeyFromPassword from './derive-key-from-password'

function decrypt(cipherText: string, password: string): string | null {
	try {
		const cipherTextParts = cipherText.split(ENCRYPTION_DECORATOR)

		if (cipherTextParts.length !== 2) {
			console.error(
				'Could not determine the beginning of the cipherText. Maybe not encrypted by this method.',
			)
			return null
		} else {
			cipherText = cipherTextParts[1]
		}

		const inputData: Buffer = Buffer.from(cipherText, 'hex')

		// Split cipherText into partials
		const salt: Buffer = inputData.slice(0, 64)
		const iv: Buffer = inputData.slice(64, 80)
		const authTag: Buffer = inputData.slice(80, 96)
		const iterations: number = parseInt(
			inputData.slice(96, 101).toString('utf-8'),
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
		// @ts-ignore: TS expects the wrong createDecipher return type here
		const decipher: DecipherGCM = crypto.createDecipheriv(
			ALGORITHM,
			decryptionKey,
			iv,
		)
		decipher.setAuthTag(authTag)

		// Decrypt data
		// @ts-ignore: TS expects the wrong createDecipher return type here
		const decrypted =
			decipher.update(encryptedData, 'binary', 'utf-8') +
			decipher.final('utf-8')

		try {
			return JSON.parse(decrypted)
		} catch (error) {
			return decrypted
		}
	} catch (error) {
		console.error('Decryption failed!')
		console.error(error)
		return null
	}
}

export default decrypt
