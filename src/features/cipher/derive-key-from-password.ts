import crypto from 'crypto'

function deriveKeyFromPassword(
	password: string,
	salt: Buffer,
	iterations: number,
): Buffer {
	return crypto.pbkdf2Sync(password, salt, iterations, 32, 'sha512')
}

export default deriveKeyFromPassword
