import { globalStore, isEmpty } from '@/shared'
import { useEffect } from 'react'
import { Footer } from './footer.style'

const _ = ({ children, className = [] }: any) => {
	const { setFooter } = globalStore()
	useEffect(() => {
		setFooter({ fixed: true, class: className })
	}, [])

	const wrap = document.querySelector('.wrap') as HTMLDivElement
	if (wrap) {
		if (!isEmpty(className) && className.includes('full-btn')) wrap.classList.add('full-btn')
		wrap.classList.add('has-footer')
	}

	return <Footer className={`footer ` + className}>{children}</Footer>
}

export default _
