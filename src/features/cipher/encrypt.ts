import deriveKeyFromPassword from './derive-key-from-password'
import { Buffer } from 'buffer'
import randomBytes from 'randombytes'
import crypto from 'crypto'
import { ALGORITHM, ENCRYPTION_MARKER } from './constants'

function encrypt(plainText: string, password: string): string | null {
	try {
		// Generate random salt -> 64 bytes
		const salt = randomBytes(64)

		// Generate random initialization vector -> 16 bytes
		const iv = randomBytes(16)

		// Generate random count of iterations between 10.000 - 99.999 -> 5 bytes
		const iterations = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000

		// Derive encryption key
		const encryptionKey = deriveKeyFromPassword(password, salt, iterations)

		// Create cipher
		const cipher = crypto.createCipheriv(ALGORITHM, encryptionKey, iv)

		// Update the cipher with data to be encrypted and close cipher
		const encryptedData = Buffer.concat([
			cipher.update(plainText, 'utf8'),
			cipher.final(),
		])

		// Get authTag from cipher for decryption // 16 bytes
		const authTag = cipher.getAuthTag()

		// Join all data into single string, include requirements for decryption
		const output = Buffer.concat([
			salt,
			iv,
			authTag,
			Buffer.from(iterations.toString()),
			encryptedData,
		]).toString('hex')

		return ENCRYPTION_MARKER + output
	} catch (error: any) {
		console.error('[cipher/encrypt] encryption failed', error)
		return null
	}
}

export default encrypt
