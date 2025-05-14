/** @jsxImportSource react */
import { Button } from '@/entities'
import { PopDaycareRecommend, PopDaycareRegister, PopDaycareTel } from '@/features'
import { globalStore, RESPONSE_OK, rightsStore, ROUTE_PATH, Server } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './property.style'

const _ = () => {
	const router = useRouter()
	const { daycareId, rightsCode } = rightsStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '속성 등록',
			back: true,
			close: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const [dayCare, setDayCare] = useState<Daycare>()
	const [popupRegister, setPopupRegister] = useState(false)
	const [popupTel, setPopupTel] = useState(false)
	const [popupRecommend, setPopupRecommend] = useState(false)

	useEffect(() => {
		Server.get(`/api/comm/find/daycare/${daycareId}`).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				setDayCare(resData)
			}
		})
	}, [])

	const handleRegisterBtn = () => {
		if (dayCare?.headtAddYn === 'Y') {
			if (rightsCode === 'HEADT') {
				setPopupTel(true)
			} else {
				setPopupRegister(true)
			}
		} else if (rightsCode === 'HEADT') {
			setPopupRegister(true)
		} else {
			setPopupRecommend(true)
		}
	}

	const handleNextBtn = () => {
		router.push(ROUTE_PATH['04-04'])
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='property-regist-wrap'>
					<div className='visual'>
						<div className='visual-regist'></div>
						<div className='txt'>{dayCare?.daycareName}</div>
						<div className='txt-sub'>{dayCare?.daycareAddr}</div>
						{dayCare?.headtAddYn !== 'Y' && (
							<div className='txt-caution'>
								<span>원장님이 등록되어 있지 않습니다.</span>
							</div>
						)}
					</div>
					<div className='btn-wrap'>
						<Button className='btn-type1 st1' onClick={handleRegisterBtn}>
							<span>등록하기</span>
						</Button>
					</div>
				</div>
			</Contents>

			<PopDaycareRegister data={{ rightsCode }} open={popupRegister} close={setPopupRegister} next={handleNextBtn} />
			<PopDaycareTel open={popupTel} close={setPopupTel} />
			<PopDaycareRecommend open={popupRecommend} close={setPopupRecommend} />
		</>
	)
}

export default _
