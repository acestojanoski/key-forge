import { Box } from '@mui/joy'
import { EncryptionResult } from '../types'
import ResultItem from '../../../common/components/ResultItem'

type ResultProps = {
	result: EncryptionResult
}

const Result: React.FC<ResultProps> = ({ result }) => {
	return (
		<Box display="flex" flexDirection="column" gap="2rem">
			{result.encryptedDek && (
				<ResultItem
					label="Encrypted Data Encryption Key:"
					value={result.encryptedDek}
				/>
			)}
			{result.encryptedData && (
				<ResultItem label="Encrypted Data:" value={result.encryptedData} />
			)}
			{result.errorMessage && (
				<ResultItem label="Error:" value={result.errorMessage} />
			)}
		</Box>
	)
}

export default Result
