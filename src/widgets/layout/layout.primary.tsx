import { Toast, Dialog } from '@/entities'
import { globalStore } from '@/shared'
import Aside from '../aside'
import GnbMenu from '../gnb'
import { Header, HeaderSub } from '../header'
import { Outerwrap, Wrap } from './layout.style'

const _ = ({ children }: any) => {
	// const { header, setHeader } = globalStore()
	// const global = useRecoilValue(globalState)
	const global = globalStore()

	const init = () => {
		const body = document.querySelector('body') as HTMLBodyElement
		const wrap = document.querySelector('.wrap') as HTMLDivElement

		if (body) body.classList.remove('open-gnb')
		if (wrap && !wrap.querySelector('footer')) wrap.classList.remove('has-footer')
		if (wrap && !wrap.querySelector('.reple-input-wrap')) wrap.classList.remove('has-reple')
		if (wrap && !wrap.querySelector('.menu-bar')) wrap.classList.remove('has-menubar')
	}

	init()

	return (
		<Outerwrap className='outer-wrap'>
			<Aside />
			<Wrap className='wrap'>
				{global.header.type === 'main' && <Header />}
				{global.header.type === 'sub' && <HeaderSub title={global.header.title} back={global.header.back} close={global.header.close} menu={global.header.menu} trash={global.header.trash} dotmenu={global.header.dotmenu} />}
				{children}
				{global.header.menu && <GnbMenu />}
				<Toast />
				<Dialog />
			</Wrap>
		</Outerwrap>
	)
}

export default _
