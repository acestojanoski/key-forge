import { Box, Typography } from '@mui/joy'

const AboutPage = () => {
	return (
		<Box maxWidth="600px" margin="0 auto" textAlign="center">
			<Typography component="p" level="body-md" paddingBottom="20px">
				Our open-source encryption tool provides a secure way to protect your
				text using AES-256-GCM encryption, a modern and widely trusted method.
				It generates a strong 32-byte encryption key from your password using
				PBKDF2 with the SHA-512 hashing algorithm and a random number of
				iterations between 10,000 and 99,999.
			</Typography>
			<Typography component="p" level="body-md" paddingBottom="20px">
				The key generation process includes a 64-byte salt to ensure that even
				if the same password is used multiple times, the derived key will be
				unique. A 16-byte initialization vector (IV) is also used during the
				encryption process, ensuring that each encrypted output is different,
				even when encrypting the same plaintext. Additionally, an authentication
				tag is created during encryption to verify the integrity and
				authenticity of your data, allowing for detection of any tampering.
			</Typography>
			<Typography component="p" level="body-md" paddingBottom="20px">
				All encryption happens client-side, directly in your browser. No data is
				stored or transmitted to any servers, and nothing is saved in your
				browser storage. Everything remains in memory for the duration of your
				session, ensuring complete privacy and control over your data.
			</Typography>
			<Typography component="p" level="body-md" paddingBottom="20px">
				To maximize security, we strongly recommend that users choose strong,
				unique passwords that are difficult to guess. The strength of your
				password directly impacts the security of the encrypted data.
			</Typography>
		</Box>
	)
}

export default AboutPage
