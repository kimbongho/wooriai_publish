import { Button, Icon } from '@/entities'
import { globalStore, gnbOpen } from '@/shared'
import { Header } from './header.style'

const _ = () => {
	const { header } = globalStore()

	return (
		<Header className='header header-main'>
			{header?.logo ? (
				<h1 className='logo' />
			) : (
				<h1 className='name'>
					<Icon type='home' />
					<span>{header?.title}</span>
				</h1>
			)}
			<div className='menu'>
				{header?.menu && (
					<Button className='btn-menu' onClick={gnbOpen}>
						<Icon type='menu' />
					</Button>
				)}
			</div>
		</Header>
	)
}

export default _
