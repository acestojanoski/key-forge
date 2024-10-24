/** @jsxImportSource @emotion/react */

import { SiBitcoin, SiEthereum, SiSolana, SiTon } from 'react-icons/si'
import { css } from '@emotion/react'

const iconCss = css`
	flex-shrink: 0;
`

export const blockchains = [
	{
		symbol: 'BTC',
		address: 'bc1qxzgpe8t47ct8ns0wmu6q2pvqwecl63cn988cqy',
		icon: <SiBitcoin css={iconCss} />,
	},
	{
		symbol: 'ETH',
		address: '0x48e64Fe04E92f449ca2f370D6ce68e6848Fca1e2',
		icon: <SiEthereum css={iconCss} />,
	},
	{
		symbol: 'SOL',
		address: 'BQMQJ2eixqkT1r4MJSfgQyeDUWaqVqZrXh3drTsbMZEq',
		icon: <SiSolana css={iconCss} />,
	},
	{
		symbol: 'TON',
		address: 'UQC9XPwICx4TgQo4b63AT2KYSkZMhlKIrwcuDFOGES4xdz_T',
		icon: <SiTon css={iconCss} />,
	},
]
