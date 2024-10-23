import { FaBtc, FaEthereum } from 'react-icons/fa6'

export const blockchains = [
	{
		symbol: 'BTC',
		qrCodeSrc: '/qr-codes/btc-qr-code.png',
		address: 'bc1qxzgpe8t47ct8ns0wmu6q2pvqwecl63cn988cqy',
		icon: <FaBtc />,
	},
	{
		symbol: 'ETH',
		qrCodeSrc: '/qr-codes/eth-qr-code.png',
		address: '0x48e64Fe04E92f449ca2f370D6ce68e6848Fca1e2',
		icon: <FaEthereum />,
	},
	{
		symbol: 'SOL',
		qrCodeSrc: '/qr-codes/sol-qr-code.png',
		address: 'BQMQJ2eixqkT1r4MJSfgQyeDUWaqVqZrXh3drTsbMZEq',
	},
	{
		symbol: 'TON',
		qrCodeSrc: '/qr-codes/ton-qr-code.png',
		address: 'UQC9XPwICx4TgQo4b63AT2KYSkZMhlKIrwcuDFOGES4xdz_T',
	},
]
