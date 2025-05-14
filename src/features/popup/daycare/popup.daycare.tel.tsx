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
					이미 원장선생님이 등록되어 있습니다.
					<br />
					원장선생님 교체를 원하실 경우 고객센터로 연락해주세요.
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button
						className='btn-type1 st1'
						onClick={() => {
							location.href = 'tel:1661-6806'
							close(false)
						}}
					>
						<span>1661-6806</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
