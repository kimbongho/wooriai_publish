/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img, useToast } from '@/entities'
import { DateLine, PopPhotoView, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmpty, isEmptyString, isRightsAdmin, mealStore, proxySrcComm, redirectLoginWithNext, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './meal.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setMealStore } = mealStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '식단',
			back: true,
			menu: true,
		})
	}, [])

	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({ classId: undefined })
	const [selectDay, setSelectDay] = useState(new Date())
	const [selectMealList, setSelectMealList] = useState<any>([])
	const [date, setDate] = useState(new Date())
	const [month, setMonth] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [album, setAlbum] = useState<any>([])
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)

	useNotRights()
	useEffect(() => {
		if (selectedClass?.classId !== undefined) {
			if (!!user && !isEmptyString(user?.daycareId)) {
				calendarChangeHandler(moment(date).format('YYYY-MM'))
				activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
			}
		}
	}, [selectedClass])

	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/daycare/meal/daily/info?yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					const list = resData.list

					const groupedByClass = list.reduce((acc, meal) => {
						const { classId, className } = meal
						const key = `${classId}-${className}`
						if (!acc[key]) {
							acc[key] = {
								classId,
								className,
								meals: [],
							}
						}
						acc[key].meals.push(meal)
						return acc
					}, {})

					const resultList = Object.values(groupedByClass)
					setSelectMealList(resultList.sort((a: any, b: any) => (a.className - b.className ? 1 : -1)))
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/daycare/meal/daily/info?yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					const list = resData.list
					list.forEach((v: any) => {
						dateList.add(v.mealDate)
					})
					setAlbum(Array.from(dateList))
				} else {
					toast(message)
				}
			}
		})
	}

	const popCloseClass = () => {
		calendarChangeHandler(moment(month).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		setPopClass(false)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const viewPhoto = (e: any, imgFileId: string) => {
		e.stopPropagation()
		popOpenPhotoView(proxySrcComm(imgFileId))
	}

	const handleManageBtn = (item: any) => {
		const date = moment(selectDay).format('YYYY-MM-DD')
		if (isEmpty(date)) {
			redirectLoginWithNext(toast, router)
		} else {
			setMealStore({ mealDate: date, item })
			router.push(`${ROUTE_PATH['14-02']}`)
		}
	}

	return (
		<>
			<Contents>
				<div className='meal-daily-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={(d: any) => setSelectDay(d)} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								album={album}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									setSelectDay(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							></Calendar>
						</CalendarSection>
					</div>
					<div className='days-meal-wrap'>
						<div className='list-top'>
							<div className='date-text'>
								<DateLine selectDay={selectDay} />
							</div>
							<div className='right'>
								<Button className='btn-view-monthly-meal' onClick={() => router.push(ROUTE_PATH['14-03'])}>
									월간 식단보기
								</Button>
							</div>
						</div>
						<div className='meal-list'>
							<ul>
								{selectMealList?.length > 0 &&
									selectMealList
										.map((v: any) => (
											<li key={uuidv4()} onClick={() => {
												if (isRightsAdmin(user.rights)) {
													handleManageBtn(v)
												}
											}}>
												<div className='box'>
													<div className='list-box-wrap'>
														<div className='box-tit'>
															<div className='class-name'>{isEmpty(v.classId) ? '전체' : v.className}</div>
															<div className='right'>
																<Button
																	className='btn-modify'
																	onClick={() => {
																	}}
																>
																	<Icon type='modify' />
																</Button>
															</div>
														</div>
													</div>
													<ul>
														{v.meals?.length > 0 &&
															v.meals
																.sort((a: any, b: any) => a.ordNum - b.ordNum)
																.map((meal: any) => (
																	<li key={uuidv4()}>
																		<Button className='img' onClick={e => viewPhoto(e, meal.imgFileId)}>
																			<Img src={proxySrcComm(meal.imgFileId)} alt='' />
																		</Button>
																		<div className='tit'>{meal.mealName}</div>
																		<ul className='list'>
																			<div dangerouslySetInnerHTML={{ __html: meal.mealDesc.replace(/\n/g, '<br/>') }}></div>
																		</ul>
																	</li>
																))}
													</ul>
												</div>
											</li>
										))}
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			{user.rights !== 'PRENT' && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={() => handleManageBtn({})}>
						<span>일간 식단 관리</span>
					</Button>
				</Footer>
			)}

			<PopSelectClass open={popClass} close={popCloseClass} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<PopPhotoView src={photo} open={popPhotoView} close={() => setPopPhotoView(false)} />
		</>
	)
}

export default _
