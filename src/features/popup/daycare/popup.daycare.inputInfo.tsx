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
				<b className='title'>입력 정보를 다시 한 번 확인해주세요.</b>
			</div>
			<div className='pop-body'>
				<div className='text c-red'>
					어린이집에 등록되어 있지 않은 정보에요.
					<br />
					원장 선생님께 등록을 요청해주세요.
				</div>
				<div className='text'>학부모님의 경우, 대표 학부모님 한 분만 등록이 가능해요.</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button
						className='btn-type1 st1'
						onClick={() => {
							close(false)
						}}
					>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
