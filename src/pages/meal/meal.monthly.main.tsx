/** @jsxImportSource react */
import { Button, Img, useToast } from '@/entities'
import { PopPhotoView, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmpty, isRightsAdmin, mealStore, proxySrcComm, redirectLoginWithNext, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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
			title: '월간 식단',
			back: true,
		})
	}, [])

	const [month, setMonth] = useState(moment().format('YYYY.MM'))
	const [mealList, setMealList] = useState([])
	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)

	useEffect(() => {
		getMonthlyMeal(month)
	}, [])

	const getMonthlyMeal = (month: string) => {
		Server.get(`/api/daycare/meal/monthly/info?yyyymm=${moment(month, 'YYYY.MM').format('YYYY-MM')}${!isEmpty(selectedClass.classId) ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					const list = resData.list
					setMealList(list.sort((a: any, b: any) => (a.className - b.className ? 1 : -1)))
				} else {
					toast(message)
				}
			}
		})
	}

	const handlePrevDateBtn = () => {
		const prevMonth = moment(month, 'YYYY.MM').subtract(1, 'M').format('YYYY.MM')
		setMonth(prevMonth)
		getMonthlyMeal(prevMonth)
	}

	const handleNextDateBtn = () => {
		const nextMonth = moment(month, 'YYYY.MM').add(1, 'M').format('YYYY.MM')
		setMonth(nextMonth)
		getMonthlyMeal(nextMonth)
	}

	const popCloseClass = () => {
		getMonthlyMeal(month)
		setPopClass(false)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	const handleManageBtn = () => {
		if (isEmpty(month)) {
			redirectLoginWithNext(toast, router)
		} else {
			setMealStore({ monthly: { mealDate: moment(month, 'YYYY.MM').format('YYYY-MM'), classId: selectedClass?.classId } })
			router.push(ROUTE_PATH['14-04'])
		}
	}

	return (
		<>
			<Contents>
				<div className='meal-monthly-wrap'>
					<div className='page-top-area'>
						<div className='monthly-indicator'>
							<Button className='btn-prev' onClick={handlePrevDateBtn}></Button>
							<b>{month}</b>
							<Button className='btn-next' onClick={handleNextDateBtn}></Button>
						</div>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
					</div>
					<div className='class-meal-wrap'>
						<div className='class-meal-list'>
							<ul>
								{mealList.length > 0 &&
									mealList.map((meal: any) => {
										return (
											<li key={meal.mealId}>
												<Button className='link' onClick={(e) => {
													if (isRightsAdmin(user.rights)) {
														e?.stopPropagation()
														setMealStore({ monthly: { mealDate: moment(month, 'YYYY.MM').format('YYYY-MM'), classId: meal?.classId, mealId: meal.mealId } })
														router.push(ROUTE_PATH['14-04'])
													}
												}}>
													<div className='info'>
														<b className='tit'>{meal.className}</b>
													</div>
													<div
														className='img'
														onClick={(e) => {
															e?.stopPropagation()
															popOpenPhotoView(proxySrcComm(meal.imgFileId))
														}}
													>
														<Img src={proxySrcComm(meal.imgFileId)} alt={`${meal.mealId}`} />
													</div>
													<div className='txt'>{meal.mealDesc}</div>
												</Button>
											</li>
										)
									})}
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			{user.rights !== 'PRENT' && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={handleManageBtn}>
						<span>월간 식단 관리</span>
					</Button>
				</Footer>
			)}

			<PopSelectClass open={popClass} close={popCloseClass} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
