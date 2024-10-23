import { SiBitcoin, SiEthereum, SiSolana, SiTon } from 'react-icons/si'

export const blockchains = [
	{
		symbol: 'BTC',
		address: 'bc1qxzgpe8t47ct8ns0wmu6q2pvqwecl63cn988cqy',
		icon: <SiBitcoin />,
	},
	{
		symbol: 'ETH',
		address: '0x48e64Fe04E92f449ca2f370D6ce68e6848Fca1e2',
		icon: <SiEthereum />,
	},
	{
		symbol: 'SOL',
		address: 'BQMQJ2eixqkT1r4MJSfgQyeDUWaqVqZrXh3drTsbMZEq',
		icon: <SiSolana />,
	},
	{
		symbol: 'TON',
		address: 'UQC9XPwICx4TgQo4b63AT2KYSkZMhlKIrwcuDFOGES4xdz_T',
		icon: <SiTon />,
	},
]
