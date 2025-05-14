import Hold from './hold.style'

const _ = ({ open, close }: any) => {
	return (
		<Hold className='hold-wrap' style={{ display: open ? 'flex' : 'none' }}>
			<div className='loader-wrap'>
				<span className='loader'></span>
			</div>
			<b>
				잠시만 기다려주세요.
				<br />
				<em>우리AI</em>가 사진을 분석하고 있어요.
			</b>
			<p className='text'>
				지금 페이지를 벗어나면 이미지가
				<br />
				업로드 되지 않을 수 있으니 업로드 완료 시까지
				<br />
				잠시만 기다려주세요.
			</p>
		</Hold>
	)
}

export default _
