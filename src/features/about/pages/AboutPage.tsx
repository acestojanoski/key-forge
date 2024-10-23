import { Box, Typography } from '@mui/joy'

const AboutPage = () => {
	return (
		<Box maxWidth="600px" margin="0 auto" textAlign="center">
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
			<Typography component="p" level="body-md" paddingBottom="20px">
				All encryption happens client-side, directly in your browser. No data is
				stored or transmitted to any servers, and nothing is saved in your
				browser storage. Everything is kept only in memory for the duration of
				your session, ensuring complete privacy and control over your data.
			</Typography>
		</Box>
	)
}

export default AboutPage
