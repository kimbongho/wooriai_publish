import { Img, Input, RepleInput, RepleList } from '@/entities'
import { PopMenu, PopPhotoView, PopRepleInput, PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './album.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 보기',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) popOpenMenu()
	}, [header.menupop])

	const [trigger, setTrigger] = useState(false)
	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}

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

	//반선택 팝업
	const classList = [
		{ name: '전체', total: 20, taacher: '' },
		{ name: '아리스토텔레스반', total: 8, taacher: '' },
		{ name: '가가반', total: 12, taacher: '' },
		{ name: '나나반', total: 5, taacher: '' },
		{ name: '노노반', total: 10, taacher: '강감찬' },
	]
	const [selectedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
	const popOpenClass = () => {
		setPopClass(true)
	}
	const popCloseClass = () => {
		setPopClass(false)
	}

	//댓글수정팝업
	const [popRepleInput, setPopRepleInput] = useState(false)
	const popOpenRepleInput = () => {
		setPopRepleInput(true)
		triggerHandeler()
	}
	const popCloseRepleInput = () => {
		setPopRepleInput(false)
	}

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

	//댓글수정메뉴팝업
	const dataRepleMenu = [
		{
			name: '댓글 수정',
			fnc: () => {
				popOpenRepleInput()
			},
		},
		{ name: '댓글 삭제', fnc: () => {} },
	]
	const [popRepleMenu, setPopRepleMenu] = useState(false)
	const popOpenRepleMenu = () => {
		setPopRepleMenu(true)
	}
	const popCloseRepleMenu = () => {
		setPopRepleMenu(false)
	}

	//댓글
	const repleData: any[] = [
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '동동맘', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png', delete: true },
	]

	const [reple, setReple] = useState('')
	const repleChange = (e: any) => {
		setReple(e.target.value)
	}

	const thumb = '/images/temp/temp-profile.png'

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

					<RepleList data={repleData} onPop={[popOpenRepleMenu]} />
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />
			<PopMenu data={dataRepleMenu} open={popRepleMenu} close={popCloseRepleMenu} />

			<PopRepleInput open={popRepleInput} close={popCloseRepleInput} trigger={trigger} />

			<RepleInput className='reple-input-wrap'>
				<Input type='text' className='reple' value={reple} placeholder='댓글을 입력해주세요.' del={true} onChange={repleChange} />
				<button className='btn-send'></button>
			</RepleInput>
		</>
	)
}

export default _
