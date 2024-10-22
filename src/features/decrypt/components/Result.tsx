import { Box } from '@mui/joy'
import { DecryptionResult } from '../types'
import ResultItem from '../../../common/components/ResultItem'

type ResultProps = {
	result: DecryptionResult
}

const Result: React.FC<ResultProps> = ({ result }) => {
	return (
		<Box display="flex" flexDirection="column" gap="2rem">
			{result.decryptedData && (
				<ResultItem label="Decrypted Data:" value={result.decryptedData} />
			)}
			{result.errorMessage && (
				<ResultItem label="Error:" value={result.errorMessage} />
			)}
		</Box>
	)
}

export default Result
