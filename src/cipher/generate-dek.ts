import randomBytes from 'randombytes'

function generateDek() {
	return randomBytes(32).toString('hex')
}

export default generateDek
