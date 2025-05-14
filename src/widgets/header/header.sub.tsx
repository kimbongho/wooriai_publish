import { Button, Icon } from '@/entities'
import { cloudStore, globalStore, gnbOpen, ROUTE_PATH } from '@/shared'
import { usePathname, useRouter } from 'next/navigation'
import { Header } from './header.style'

const _ = ({ title, back, close, menu, trash, dotmenu }: any) => {
	const router = useRouter()
	const pathname = usePathname()

	const { cloud } = cloudStore()
	const { backLogic, fnTrash, setHeader, clearBackLogic } = globalStore()

	const handleClick = () => {
		setHeader({ menupop: true })
	}

	let backBtn = back && (
		<Button
			className='btn-back'
			onClick={() => {
				switch (pathname) {
					case ROUTE_PATH['20-02']:
					case ROUTE_PATH['21-02']:
					case ROUTE_PATH['22-03']:
						if (backLogic === 'NO_DATA') {
							router.push(ROUTE_PATH['05-01'])
							clearBackLogic()
						} else {
							router.back()
						}
						break
					case ROUTE_PATH['18-03']:
						router.push(ROUTE_PATH['18-01'])
						break
					case ROUTE_PATH['15-01']:
						if (cloud?.flag !== 'ALBUM') router.push(ROUTE_PATH['05-01'])
						break
					case ROUTE_PATH['15-02']:
						router.replace(ROUTE_PATH['15-01'])
						break

					default:
						router.back()
						break
				}
			}}
		>
			<Icon type='back'></Icon>
		</Button>
	)

	let closeBtn = close && (
		<Button className='btn-close' onClick={() => router.push(ROUTE_PATH['05-01'])}>
			<Icon type='close'></Icon>
		</Button>
	)

	let menuBtn = menu && (
		<Button className='btn-menu' onClick={gnbOpen}>
			<Icon type='menu' />
		</Button>
	)

	let deleteBtn = trash && (
		<Button className='btn-delete' onClick={fnTrash}>
			<Icon type='trash' />
		</Button>
	)

	let dotMenuBtn = dotmenu && (
		<Button className='btn-dot-menu' onClick={handleClick}>
			<Icon type='dot-menu' />
		</Button>
	)

	return (
		<Header className={`header-sub ` + (!title ? 'no-title' : '')}>
			<div className='left'>{backBtn}</div>
			<h1 className='title'>{title}</h1>
			<div className='right'>
				{closeBtn}
				{menuBtn}
				{deleteBtn}
				{dotMenuBtn}
			</div>
		</Header>
	)
}

export default _
