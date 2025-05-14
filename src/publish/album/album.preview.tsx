import { Button, Img, Radio, RadioGroup } from '@/entities'
import { PopPhotoView, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './album.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 미리보기',
			back: true,
			trash: true,
		})
	}, [])

	// 아동리스트
	const [child, setChild] = useState([
		{ value: 0, cls: '딸기반', name: '전체', src: '/images/ico-class-total.svg', selected: true },
		{ value: 1, cls: '딸기반', name: '박소율', src: '/images/temp/temp-album.jpg', selected: false },
		{ value: 2, cls: '딸기반', name: '홍길동', src: '/images/temp/temp-album.jpg', selected: false },
		{ value: 3, cls: '딸기반', name: '박소율', src: '/images/temp/temp-album.jpg', selected: false },
		{ value: 4, cls: '딸기반', name: '홍길동', src: '/images/temp/temp-album.jpg', selected: false },
		{ value: 5, cls: '딸기반', name: '박소율', src: '/images/temp/temp-album.jpg', selected: false },
		{ value: 6, cls: '딸기반', name: '홍길동', src: '/images/temp/temp-album.jpg', selected: false },
	])
	const changeSelectedChild = (v: any) => {
		const changeChild = child.map(item => {
			if (item.value === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})

		setChild(changeChild)
	}

	const photoList = ['/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg']

	// 사진보기
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}
	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	//공지시간
	const [notiTime, setNotiTime] = useState('1')
	const notiTimeOption = [
		{ value: '1', label: '바로 등록' },
		{ value: '2', label: '1시간 뒤' },
		{ value: '3', label: '2시간 뒤' },
		{ value: '4', label: '일과 후' },
		{ value: 'custom', label: '지정 시간' },
	]

	//날자선택팝업
	const [popPicker, setPopPicker] = useState(false)
	const popOpenPicker = () => {
		setPopPicker(true)
	}
	const popClosePicker = () => {
		setPopPicker(false)
	}

	const dateData = {
		days: ['03-01(월)', '03-02(화)', '03-03(수)', '03-04(목)', '03-05(금)', '03-06(토)', '03-07(일)', '03-08(월)', '03-09(화)', '03-10(수)', '03-11(목)', '03-12(금)', '03-13(토)', '03-14(일)'],
	}
	const [dateValue, setDateValue] = useState([])

	return (
		<>
			<Contents>
				<div className='album-detail-wrap'>
					<div className='view-detail'>
						<div className='select-item-list-wrap'>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child.map((item: any, idx: any) => (
										<SwiperSlide key={idx}>
											<button
												className={`box ` + (item.selected ? 'on' : '') + (item.name === '전체' ? ' total' : '')}
												onClick={() => {
													changeSelectedChild(item.value)
												}}
											>
												<div className={`thumb ` + (item.name === '전체' ? ' total' : '')}>{item.name === '전체' ? null : <Img src={item.src} alt='' />}</div>
												<div className='cls'>{item.cls}</div>
												<div className='name'>
													<b>{item.name}</b>
												</div>
											</button>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
						<div className='view-desc'>
							<b className='tit'>
								풀잎반 아이들 이번주 활동사진 입니다^^ <br />
								즐거운 한 주를 보냈습니다~
							</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : 2024.03.06 07:10:01</span>
									<span className='date'>수정날짜 : 2024.03.06 07:10:01</span>
								</div>
								<div className='right'>
									<span className='writer'>이유리 선생님</span>
								</div>
							</div>
						</div>
						<div className='album-view'>
							<ul className='album-list'>
								{photoList.map((src: any, id: any) => (
									<li key={id}>
										<button
											className='img'
											onClick={() => {
												popOpenPhotoView(src)
											}}
										>
											<Img src={'/images/temp/temp-album.jpg'} alt='' />
										</button>
									</li>
								))}
							</ul>
							<div className='text'>우리아이들 이번주도 신나게 뛰어놀고 많은 성장을 하였어요. 이번주말에도 가족들과 즐거운 시간 보내 세요~ 다음주에 보아요^^</div>
						</div>
					</div>
					<div className='album-regist-set'>
						<div className='select-box'>
							<b className='tit'>등록시간 설정</b>
							<ul>
								<RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
									{notiTimeOption.map((item, idx) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
											{item.value === 'custom' ? (
												<button className='btn-time' onClick={popOpenPicker}>
													{dateValue.length > 0 ? (
														<>
															<span className='date'>{dateValue[0]}</span>
															<span className='time'>
																{zeroFill(dateValue[1], 2)} : {zeroFill(dateValue[2], 2)}
															</span>
														</>
													) : (
														'시간을 선택해 주세요'
													)}
												</button>
											) : (
												<div className='btn-time'>00:00</div>
											)}
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type2 st1'>등록</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />

			<PopTimePicker open={popPicker} close={popClosePicker} data={dateData} value={dateValue} onChange={setDateValue} />
		</>
	)
}

export default _
