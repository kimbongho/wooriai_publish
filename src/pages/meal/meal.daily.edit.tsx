/** @jsxImportSource react */
import { Button, Thumbnail, useToast } from '@/entities'
import { AutoInput, PopBoard, PopSelectClass, PopSelectList, SelectBoxClass } from '@/features'
import { deepCopy, FILE_MAX_SIZE, globalStore, isEmpty, isEmptyArray, isEmptyObject, isEmptyString, MEAL_TYPE, mealStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './meal.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { meal } = mealStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '식단',
			back: true,
			trash: !isEmptyObject(meal.item),
		})
	}, [])

	const mealType = deepCopy(MEAL_TYPE)
	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [allClass, setAllClass] = useState<Array<PopClassRow>>([])
	const [mealList, setMealList] = useState<any[]>(mealType || [])
	const [selectedMeal, setSelectedMeal] = useState<Array<any>>([])
	const [popMeal, setPopMeal] = useState(false)
	const [popDel, setPopDel] = useState(false)

	const textArr = useRef<any>({})

	useEffect(() => {
		if (!isEmpty((meal.item as any)?.meals) && !isEmptyArray(allClass) && allClass.length > 1) {
			setSelectedClass(allClass?.filter(v => v.classId === (meal.item as any).classId)[0])
			getDailyMeal()
		}
	}, [allClass])

	useEffect(() => {
		if (isEmptyObject(meal.item)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const getDailyMeal = () => {
		Server.get(`/api/daycare/meal/daily/info?yyyymmdd=${moment(meal.mealDate).format('YYYY-MM-DD')}${(meal?.item as any).classId ? `&classId=${(meal.item as any).classId}` : ''}`).then(response => {
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

					const resultList = Object.values(groupedByClass)[0]
					const setMeal = mealList.map((v: any) => {
						const item = (resultList as any).meals.filter((z: any) => z.mealName === v.name)
						if (!isEmptyArray(item) && !selectedMeal.includes(v.idx)) {
							setSelectedMeal((prev: any) => [...prev, v.idx])
							textArr.current[v.idx] = item[0].mealDesc
							return { ...v, ...item[0], disabled: true }
						}
						return v
					})
					setMealList(setMeal)
				} else {
					toast(message)
				}
			}
		})
	}

	const deleteMeal = (item: any) => {
		let retVal: any = null
		item.meals?.map((v: any) => {
			retVal = deleteMealItem(v.mealId)
		})
		if (retVal) router.back()
	}

	const deleteMealItem = async (mealId: number) => {
		const { data, status } = await Server.post(`/api/daycare/meal/daily/delete/${mealId}`)
		if (status === RESPONSE_OK) {
			const { state, data: resData, message } = data
			if (state === STATUS_OK) {
				return true
			} else {
				toast(message)
			}
		}
	}

	const handleSelectedMeal = (data: any) => {
		setMealList(prev => prev.map((meal, index) => (data.includes(index) ? { ...meal, disabled: true } : { ...meal, imgFileId: '', disabled: false })))
		setSelectedMeal(data.sort())
	}

	const handleDelBtn = (selectedIndex: any) => {
		const row = mealList.filter((v: any, i: number) => i === selectedIndex)[0]
		if (!isEmptyString(row?.mealId)) {
			deleteMealItem(row.mealId)
		}
		setSelectedMeal((prev: any) => prev.filter((v: any) => v !== selectedIndex))
		setMealList(prev =>
			prev.map((meal, index) => {
				return selectedIndex === index ? mealType.filter((v: any) => v.idx === selectedIndex)[0] : { ...meal, mealDesc: textArr.current[meal.idx] }
			})
		)
	}
	const handleThumbnail = (data, selectedIndex) => {
		setMealList(prev => prev.map((meal, index) => (selectedIndex === index ? { ...meal, thumb: data } : { ...meal, mealDesc: textArr.current[meal.idx] })))
	}
	const handleFile = (data, selectedIndex) => {
		setMealList(prev => prev.map((meal, index) => (selectedIndex === index ? { ...meal, imgFile: data } : { ...meal, mealDesc: textArr.current[meal.idx] })))
	}
	const handleInput = (text, selectedIndex) => {
		// setMealList(prev => prev.map((meal, index) => (selectedIndex === index ? { ...meal, mealDesc: text } : meal)))
		textArr.current = { ...textArr.current, [selectedIndex]: text }
	}

	const handleSubmit = async () => {
		if (isEmpty(selectedClass.classId)) {
			let resultArr: Array<boolean> = []
			Promise.all(
				allClass
					.filter(v => !isEmptyString(v.classId))
					.map(async (v: any) => {
						const result: boolean = await upsertMeal(v.classId)
						resultArr.push(result)
					})
			).then(() => {
				if (resultArr.includes(false)) {
					toast('전체 등록에 실패하였습니다.')
				} else {
					router.push(ROUTE_PATH['14-01'])
				}
			})
		} else if (await upsertMeal(selectedClass.classId)) {
			router.push(ROUTE_PATH['14-01'])
		}
	}

	const upsertMeal = async (classId: number) => {
		try {
			const submitList = mealList.filter((v: any) => (v.disabled && isEmptyString(v.imgFileId)) || (v.disabled && Object.keys(textArr.current).includes(String(v.idx))))
			let successFlag = true

			for (const element of submitList) {
				const mealRow = element
				const formData = new FormData()
				const param = {
					mealDate: meal.mealDate,
					mealName: mealRow.name,
					classId: classId,
					ordNum: mealRow.idx,
					...mealRow,
					mealDesc: textArr.current[String(mealRow.idx)],
					thumb: '',
				}

				formData.append('meal', JSON.stringify(param))
				if (!isEmpty(mealRow.imgFile)) {
					formData.append('imgFile', mealRow.imgFile)
				}

				try {
					const response = await Server.post('/api/daycare/meal/daily/upsert', formData)
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, data: resData, message } = data
						if (state !== STATUS_OK) {
							toast(message)
							successFlag = false
							break
						}
					} else {
						successFlag = false
						break
					}
				} catch (error) {
					successFlag = false
					break
				}
			}

			if (successFlag) {
				return successFlag
			}
		} catch (error) {
			toast('등록에 실패하였습니다.')
			return false
		}
		return false
	}

	const DrawMealRow = useCallback(
		(selectedIndex: number) => {
			const row = mealList[selectedIndex]
			return (
				<div key={uuidv4()} className={`meal-regist-box `}>
					<div className='title'>
						<b>{row.name}</b>
						<Button className='btn-del' onClick={() => handleDelBtn(selectedIndex)}></Button>
					</div>
					<div className='regist'>
						<Thumbnail thumb={!isEmptyString(row.imgFileId) ? row.imgFileId : row.thumb} max={FILE_MAX_SIZE} setThumb={(data: any) => handleThumbnail(data, selectedIndex)} setFile={(data: any) => handleFile(data, selectedIndex)} isDel={false} />
						<AutoInput placeholder='내용' value={row.mealDesc} onChange={(text: any) => handleInput(text, selectedIndex)} />
					</div>
				</div>
			)
		},
		[mealList]
	)

	return (
		<>
			<Contents>
				<div className='meal-daily-edit-wrap'>
					<div className='page-top-area'>
						<div className='date'>{moment(meal.mealDate).format('YYYY.MM.DD')}</div>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} disabled={!isEmptyObject(meal.item)} />
					</div>
					<div className='meal-edit-wrap'>
						<div className='meal-register'>{selectedMeal.length > 0 && selectedMeal.map((selectedIndex: any) => DrawMealRow(selectedIndex))}</div>

						<Button className='btn-add' onClick={() => setPopMeal(true)}>
							<span>식단 추가</span>
						</Button>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1' disabled={isEmptyArray(mealList.filter((v: any) => v.disabled))} onClick={handleSubmit}>
								<span>식단 저장</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass
				open={popClass}
				close={() => setPopClass(false)}
				onChange={(param: PopClassRow, allList: Array<PopClassRow>) => {
					setSelectedClass(param)
					setAllClass(allList)
				}}
			/>
			<PopSelectList title='추가할 식단을 선택해 주세요' value={selectedMeal} data={mealList} open={popMeal} close={() => setPopMeal(false)} btnType={'닫기'} type='multi' onChange={handleSelectedMeal} />
			<PopBoard
				type='delete'
				title='작성중인/선택한 게시물이 삭제됩니다.'
				data={{ name: `${selectedClass.name} 식단` }}
				open={popDel}
				close={() => {
					deleteMeal(meal.item)
					setPopDel(false)
				}}
			/>
		</>
	)
}

export default _
