/** @jsxImportSource react */
import { useContext } from 'react'
import TabContext from './tab.context'

const _ = ({ children }: any) => {
	const value: any = useContext(TabContext)
	const { index } = value

	return (
		<>
			{children.map((pannel: any, idx: number) => {
				if (index !== idx) return null
				// return <div key={idx}>{pannel}</div>;
				return idx === index ? pannel : null
			})}
		</>
	)
}

export default _
