/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Img, useToast } from '@/entities'
import { DateLine, PopBoard, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmpty, isEmptyArray, isEmptyString, proxySrcCloud, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { albumStore } from '@/shared/zustand/album'
import { MenuBar } from '@/widgets'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './album.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setAlbumStore, clearAlbumStore } = albumStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범',
			back: true,
			menu: true,
		})
	}, [])

	const [albumState, setAlbumState] = useState<Array<any>>([])
	const [selectDay, setSelectDay] = useState<Date>(new Date())
	const [date, setDate] = useState<Date>(new Date())
	const [month, setMonth] = useState<Date>(new Date())
	const [activeStartDate, setActiveStartDate] = useState<Date | undefined>(undefined)
	const [album, setAlbum] = useState<Array<any>>([])
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [popClass, setPopClass] = useState<boolean>(false)
	const [popIng, setPopIng] = useState<boolean>(false)
	const [tempAlbum, setTempAlbum] = useState<any>(null)

	useNotRights()
	useEffect(() => {
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
	}, [selectedClass])

	useEffect(() => {
		if (tempAlbum !== null) {
			setPopIng(true)
		}
	}, [tempAlbum])

	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: Date = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/photos/album/info/daily?yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					const list = resData.list
					setAlbumState(list)
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/photos/album/info/monthly?yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					resData?.forEach((v: any) => {
						dateList.add(v.yyyymmdd)
					})
					setAlbum(Array.from(dateList) as any)
				} else {
					toast(message)
				}
			}
		})
	}

	const selectDayHandler = (d: any) => {
		setSelectDay(d)
	}

	const goAlbumDetail = (idx: any) => {
		setAlbumStore({ albumId: idx })
		router.push(ROUTE_PATH['08-04'])
	}

	const writeBtnClick = async () => {
		// 작성중인 게시글이 있을 때
		// setPopIng(true)

		const { data, status } = await Server.get('/api/photos/album/info/temp')
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				const tempAlbumId: number = resData.info?.albumId
				if (isEmptyString(tempAlbumId)) {
					clearAlbumStore()
					setAlbumStore({ date: date })
					router.push(ROUTE_PATH['08-02'])
				} else {
					setTempAlbum({
						...resData.info,
						name: '앨범',
						title: resData.info?.albumTitle,
						newWrite: () => handleNewWrite(tempAlbumId),
						continueWrite: () => handleContinueWrite(resData.info),
					})
				}
			} else {
				toast(message)
			}
		}
	}

	const handleNewWrite = async (albumId: number) => {
		const { data, status } = await Server.post(`/api/photos/album/delete/${albumId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				clearAlbumStore()
				setAlbumStore({ date: date })
				router.push(ROUTE_PATH['08-02'])
			} else {
				toast(message)
			}
		}
	}

	const handleContinueWrite = (info: any) => {
		setAlbumStore({ ...info, date: date })
		router.push(ROUTE_PATH['08-02'])
	}

	return (
		<>
			<Contents>
				<div className='album-list-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								album={album}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							></Calendar>
						</CalendarSection>
					</div>
					<div className='days-album-wrap'>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>

						{!isEmptyArray(albumState) &&
							albumState.map(
								(a: any, key: any) =>
									a.albumList.length > 0 && (
										<div key={key} className='photo-list-box'>
											<div className='info' key={key}>
												<div className='class-name'>{a.className}</div>
												{!isEmpty(a.teacherName) && (
													<div className='teacher-name'>
														<b>{a.teacherName}</b>
														<span>선생님</span>
													</div>
												)}
											</div>
											<ul>
												{a.albumList.map((al: any, alKey: any) => (
													<li
														key={alKey}
														onClick={() => {
															goAlbumDetail(al.albumId)
														}}
													>
														<Button className='link'>
															<div className='thumb'>
																<Img src={proxySrcCloud(al.downloadId)} alt='' />
															</div>
															<div className='text'>{al.albumTitle}</div>
														</Button>
													</li>
												))}
											</ul>
										</div>
									)
							)}
					</div>
				</div>
			</Contents>

			{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
				<div className='floating-menu'>
					<Button className='btn-plus' onClick={writeBtnClick}></Button>
				</div>
			)}

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<PopBoard
				type='ing'
				title='작성 중인 게시물이 있어요.'
				data={tempAlbum}
				open={popIng}
				close={() => {
					setPopIng(false)
					router.replace(ROUTE_PATH['08-02'])
				}}
			/>
			<MenuBar menu='album' />
		</>
	)
}

export default _
