import { useMemo, useState } from 'react'
import TabContext from './tab.context'
import { Tab } from './tab.style'

const _ = ({ children, className, tabChange, ...rest }: any) => {
	const [index, setIndex] = useState(rest.index)
	const updateIndex = (idx: number) => {
		setIndex(idx)
		tabChange(idx)
	}

	const value = useMemo(
		() => ({
			index: index,
			setIndex: updateIndex,
		}),
		[index, updateIndex]
	)

	return (
		<TabContext.Provider value={value}>
			<Tab className={className}>{children}</Tab>
		</TabContext.Provider>
	)
}

export default _
