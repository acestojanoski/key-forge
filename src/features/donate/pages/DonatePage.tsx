import {
	Box,
	Tab,
	tabClasses,
	TabList,
	TabPanel,
	Tabs,
	Typography,
} from '@mui/joy'
import BlockchainCard from '../components/BlockchainCard'
import { blockchains } from '../constants/blockchains'

const DonatePage = () => {
	return (
		<Box maxWidth="600px" margin="0 auto" textAlign="center">
			<Typography component="p" level="body-md" paddingBottom="10px">
				We appreciate your support! If you find our open-source encryption tool
				useful, consider making a donation to help us continue developing and
				improving it. Your contributions ensure we can keep this tool free,
				secure, and up-to-date for everyone. Every donation, no matter the size,
				makes a difference.
			</Typography>
			<Typography>Thank you!</Typography>

			<Box paddingTop="40px">
				<Tabs
					aria-label="tabs"
					defaultValue={0}
					sx={{ bgcolor: 'transparent' }}
				>
					<TabList
						disableUnderline
						sx={{
							p: 0.5,
							gap: 0.5,
							borderRadius: 'xl',
							bgcolor: 'background.level1',
							[`& .${tabClasses.root}[aria-selected="true"]`]: {
								boxShadow: 'sm',
								bgcolor: 'background.surface',
							},
						}}
					>
						{blockchains.map((blockchain) => (
							<Tab key={blockchain.address} disableIndicator>
								{blockchain.icon}
								{blockchain.symbol}
							</Tab>
						))}
					</TabList>
					{blockchains.map((blockchain, index) => (
						<TabPanel key={blockchain.address} value={index}>
							<BlockchainCard
								symbol={blockchain.symbol}
								address={blockchain.address}
							/>
						</TabPanel>
					))}
				</Tabs>
			</Box>
		</Box>
	)
}

export default DonatePage
