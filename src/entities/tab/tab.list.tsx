import { useContext } from 'react'
import TabContext from './tab.context'
import Tab from './tab.ui'

const _ = ({ children }: any) => {
	const value: any = useContext(TabContext)
	const { index, setIndex } = value

	return (
		<ul className='tab'>
			{children.map((child: any, idx: number) => (
				<Tab key={idx} className={index === idx ? 'on' : ''} onClick={() => setIndex(idx)}>
					{child}
				</Tab>
			))}
		</ul>
	)
}

export default _
