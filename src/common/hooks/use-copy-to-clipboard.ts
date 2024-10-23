import { useCallback, useState } from 'react'

const useCopyToClipboard = () => {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = useCallback(
		async (value: string) => {
			if (copied) {
				return
			}

			if (typeof navigator?.clipboard?.writeText !== 'function') {
				console.warn(
					'[common/hooks/useCopyToClipboard] clipboard features are not available.',
				)
				return
			}

			try {
				await navigator.clipboard.writeText(value)

				setCopied(true)
				setTimeout(() => {
					setCopied(false)
				}, 1500)
			} catch (error) {
				console.warn(
					'[common/hooks/useCopyToClipboard] copy to clipboard failed.',
					error,
				)
			}
		},
		[copied],
	)

	return {
		copyToClipboard,
		copied,
	}
}

export default useCopyToClipboard
