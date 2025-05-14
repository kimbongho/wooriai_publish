import { Button, Img, Input } from '@/entities'
import { PopAddress } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './institute.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원 정보 관리',
			back: true,
		})
	}, [])

	//주소 팝업
	const [popAddress, setPopAddress] = useState(false)
	const popOpenAddress = () => {
		setPopAddress(true)
	}
	const popCloseAddress = () => {
		setPopAddress(false)
	}

	return (
		<>
			<Contents>
				<div className='institute-detail-wrap'>
					<div className='institute-edit-wrap'>
						<div className='main-noti'>어린이집의 기본 정보를 변경하는 경우, 어린이집 소속 선생님과 학부모에게 정보 변경 공지가 전달됩니다.</div>
						<div className='institute-profile'>
							<div className='thumb'>
								<Img src={'/images/temp/temp-profile.png'} alt='' />
							</div>
						</div>

						<div className='form-wrap'>
							<div className='inp-label'>어린이집 명</div>
							<Input type='text' value={'이노뎁 어린이집'} del={true} />

							<div className='inp-label'>주소</div>
							<div className='inp-text' onClick={popOpenAddress}>
								서울특별시 가산동 16-2 서울특별시 가산동 16-2서울특별시 가산동 16-2
							</div>
							<div className='inp-text disable' onClick={popOpenAddress}>
								서울특별시 가산동 16-2 서울특별시 가산동 16-2서울특별시 가산동 16-2
							</div>
							<div className='inp-text disabled' onClick={popOpenAddress}>
								서울특별시 가산동 16-2 서울특별시 가산동 16-2서울특별시 가산동 16-2
							</div>
							<Button className='btn-addr-search' onClick={popOpenAddress}>
								서울특별시 가산동 16-2
							</Button>
							<div className='btn-addr-search' onClick={popOpenAddress}>
								서울특별시 가산동 16-2 서울특별시 가산동 16-2서울특별시 가산동 16-2
							</div>
							<Input type='text' className='search' value={'서울특별시 가산동 16-2'} del={true} />
							<Input type='text' value={'이노뎁 어린이집'} del={true} />

							<div className='inp-label'>연락처</div>
							<Input type='text' value={'031-123-5678'} del={true} />

							<div className='inp-label'>원장님</div>
							<Input type='text' className='disabled' value={'홍길동'} disabled={true} />
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>
								<span>등록</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopAddress open={popAddress} close={popCloseAddress} />
		</>
	)
}

export default _
