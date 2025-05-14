import { Button, Icon, Img } from '@/entities'
import { PopMenu, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './dosage.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) popOpenMenu()
	}, [header.menupop])

	//메뉴팝업
	const dataMenu = [
		{
			name: '수정',
			fnc: () => {
				alert('수정')
			},
		},
		{
			name: '삭제',
			fnc: () => {
				alert('삭제')
			},
		},
	]
	const [popMenu, setPopMenu] = useState(false)
	const popOpenMenu = () => {
		setPopMenu(true)
	}
	const popCloseMenu = () => {
		setPopMenu(false)
		setHeader({ menupop: false })
	}

	//시간선택팝업
	const [popPicker, setPopPicker] = useState(false)
	const popOpenPicker = () => {
		setPopPicker(true)
	}
	const popClosePicker = () => {
		setPopPicker(false)
	}

	const [timeValue, setTimeValue] = useState([])

	// nodata용(임시)
	let data = true

	return (
		<>
			<Contents className={data ? '' : 'no-data-content'}>
				{data ? (
					<div className='dosage-detail-wrap'>
						<div className='format-view-detail'>
							<div className='img-wrap'>
								<Img src={'/images/temp/temp-dosage.jpg'} alt='' />
								<Img src={'/images/temp/temp-dosage.jpg'} alt='' />
							</div>
							<div className='info-wrap'>
								<ul>
									<li>
										<div className='label'>
											<Icon type='dosage-period' />
											<span>투약기간</span>
										</div>
										<div className='right'>2023.08.13 ~ 2023.08.17</div>
									</li>
									<li>
										<div className='label'>
											<Icon type='dosage-number' />
											<span>투약횟수</span>
										</div>
										<div className='right'>1일 2회 투약</div>
									</li>
								</ul>
							</div>
							<div className='text-view'>선생님, 안녕하세요~ 길동이가 감기에 걸려서 약을 같이 보내드립니다. 투약 부탁드립니다.</div>
						</div>

						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>투약시간 1</b>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										투약 요청 시간
										<div className='right'>10:30</div>
									</li>
									<li>
										투약 시간
										<div className='right'>
											<button className='btn-time' onClick={popOpenPicker}>
												{timeValue.length > 0 ? (
													<span className='time'>
														{zeroFill(timeValue[1], 2)} : {zeroFill(timeValue[2], 2)}
													</span>
												) : (
													'시간 등록'
												)}
											</button>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<>
						<div className='no-data'>
							<p className='txt'>투약의뢰서가 없습니다.</p>
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>
								<span>등록하기</span>
							</Button>
						</div>
					</>
				)}
			</Contents>

			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />
			<PopTimePicker open={popPicker} close={popClosePicker} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
