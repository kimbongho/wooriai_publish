'use client'

import { Button, Popup } from '@/entities'
import DaumPostcode from 'react-daum-postcode'

const _ = ({ open, close, onComplete }: any) => {
	const complete = data => {
		let fullAddress = data.address
		let extraAddress = ''

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname
			}
			if (data.buildingName !== '') {
				extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
		}

		onComplete({ ...data, fullAddress, extraAddress })
		close()
	}

	const style = {
		width: '100%',
		height: '470px',
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title align-l'>주소 검색</b>
			</div>
			<div className='pop-body' style={{ paddingLeft: '0', paddingRight: '0' }}>
				<DaumPostcode className='postmodal' style={style} autoClose={false} onComplete={complete} />
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={close}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
