import { Button, Popup } from '@/entities'

const _ = ({ data, open, close }: any) => {
	return (
		<Popup
			open={open}
			close={() => {
				close(false)
			}}
		>
			<div className='pop-header'>
				<b className='title align-l'></b>
			</div>
			<div className='pop-body'>
				<div className='select-list'>
					서비스 제공을 위해서 먼저 원장선생님의 원설정이 필요해요.
					<br />
					원장선생님께 우리아이AI를 추천해주세요.
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button
						className='btn-type1 st1'
						onClick={() => {
							close(false)
						}}
					>
						<span>추천하기</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
