/** @jsxImportSource react */
import { Button, Textarea, UploadPhotos, useToast } from '@/entities'
import { PopBoard, PopSelectClass, SelectBoxClass } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmpty, isEmptyObject, isEmptyString, mealStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './meal.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { meal: { monthly }, clearMealStore } = mealStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '월간 식단',
			back: true,
			trash: !isEmptyString(monthly?.mealId),
		})
	}, [])

	const [mealDesc, setMealDesc] = useState('')
	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [photos, setPhotos] = useState([])
	const [photosOrg, setPhotosOrg] = useState([])
	const [removePhoto, setRemovePhoto] = useState<Array<string>>([])
	const [popDel, setPopDel] = useState(false)

	useEffect(() => {
		if (isEmptyString(monthly?.mealDate)) {
			toast('삭제된 식단입니다.')
			router.back()
		}

		if (!isEmptyString(monthly?.classId)) {
			Server.get(`/api/daycare/class/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const list = resData.list
						const v = list.find((v: any) => v.classId === monthly?.classId)
						if (isEmptyObject(v)) {
							setSelectedClass({ classId: null, name: '전체', total: resData.childTotCnt, teacher: '' })
						} else {
							setSelectedClass({
								classId: v.classId,
								name: v.className,
								total: v.classNowPax,
								teacher: v.teacherId,
							})
							getMonthlyMeal(monthly)
						}
					}
				}
			})
		} else if (!isEmptyObject(monthly)) {
			getMonthlyMeal({ ...monthly, classId: selectedClass?.classId })
		}
	}, [])

	useEffect(() => {
		if (isEmptyString(monthly?.mealId)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const getMonthlyMeal = ({ mealDate, classId, mealId }) => {
		Server.get(`/api/daycare/meal/monthly/info?yyyymm=${moment(mealDate, 'YYYY.MM').format('YYYY-MM')}${!isEmpty(classId) ? `&classId=${classId}` : ''}${!isEmptyString(mealId) ? `&mealId=${mealId}` : ``}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					if (!isEmptyObject(resData)) {
						setMealDesc(resData?.meal?.mealDesc)
						setPhotosOrg(resData?.files)
					}
				} else {
					toast(message)
				}
			}
		})
	}

	const handleSubmit = () => {
		if (isEmpty(selectedClass.classId)) {
			toast('반을 선택해주세요.')
			return
		}

		const formData = new FormData()
		const meal = {
			mealMonth: monthly?.mealDate,
			mealDesc: mealDesc,
			classId: selectedClass.classId,
			removeFiles: removePhoto
		}

		formData.append('meal', JSON.stringify(meal))

		if (photos.length > 0) {
			photos.forEach((photo: any) => {
				formData.append('imageFiles', photo)
			})
		}

		Server.post('/api/daycare/meal/monthly/upsert', formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, message } = data
				if (state === STATUS_OK) {
					clearMealStore()
					router.push(ROUTE_PATH['14-03'])
				} else {
					toast(message)
				}
			}
		})
	}

	const handleDeleteBtn = () => {
		Server.post(`/api/daycare/meal/monthly/delete//${monthly?.mealId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					clearMealStore()
					router.push(ROUTE_PATH['14-03'])
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='meal-monthly-edit-wrap'>
					<div className='page-top-area'>
						<div className='monthly-indicator'>
							<b>{moment(monthly?.mealDate, 'YYYY-MM').format('YYYY.MM')}</b>
						</div>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
					</div>
					<div className='meal-edit-wrap'>
						<div className='form-wrap'>
							<UploadPhotos title='사진첨부' photos={photos} photosOrg={photosOrg} max={FILE_MAX_SIZE} total={1} onChange={setPhotos} setRemoveFiles={setRemovePhoto} />
							<div className='inp-tit'>식단 내용</div>
							<Textarea placeholder='내용' value={mealDesc} onChange={(e: any) => setMealDesc(e.target.value)} />
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type1 st1' disabled={isEmptyString(mealDesc) && photos.length < 1} onClick={handleSubmit}>
								<span>식단표 등록</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '식단', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
