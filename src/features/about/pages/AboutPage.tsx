import { Box, Typography } from '@mui/joy'

const AboutPage = () => {
	return (
		<Box>
			<Typography component="p" level="body-md" paddingBottom="20px">
				Our open-source encryption tool provides a secure way to protect your
				text using AES-256-GCM encryption. It generates a strong 32-byte
				encryption key from your password, utilizing random iterations between
				10,000 and 99,999.
			</Typography>
			<Typography component="p" level="body-md" paddingBottom="20px">
				This key generation process includes a 64-byte salt and a 16-byte
				initialization vector (IV), ensuring that even the same password
				produces different encrypted outputs. An authentication tag is also
				created during encryption, which verifies the integrity and authenticity
				of your data, allowing detection of any tampering.
			</Typography>
		</Box>
	)
}

export default AboutPage
