import { Suspense, lazy } from 'react'

const dynamic = (
	importFn: () => Promise<{ default: React.ComponentType<any> }>,
) => {
	const Component = lazy(() => importFn())

	return () => (
		<Suspense>
			<Component />
		</Suspense>
	)
}

export default dynamic
