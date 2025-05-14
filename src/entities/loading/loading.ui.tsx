import { Loading } from './loading.style'

export default ({ open, close }: any) => {
	return (
		<Loading className='loading-wrap' style={{ display: open ? 'flex' : 'none' }}>
			<div className='loader-wrap'>
				<span className='loader'></span>
			</div>
			<b>잠시만 기다려주세요.</b>
		</Loading>
	)
}
