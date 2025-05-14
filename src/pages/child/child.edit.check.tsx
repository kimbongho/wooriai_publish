/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { PopEditConfirm, PopSelectClass, SelectBoxClass } from '@/features'
import { childStore, globalStore, isEmptyArray, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './child.style'

const INIT_ALL_CLASS: (total: number) => PopClassRow = (total: number) => ({ classId: null, name: '전체', total, teacher: '' })
const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { childList, clearChildList } = childStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
		})
	}, [])

	const [filteredChildList, setFilteredChildList] = useState<any>([])
	const [classList, setClassList] = useState<Array<PopClassRow>>([{ classId: null, name: '전체', total: 0, teacher: '' }])
	const [selectedClass, setSelectedClass] = useState<PopClassRow>(classList[0]) //반선택 팝업
	const [popClass, setPopClass] = useState(false) //반선택 팝업
	const [popConfirm, setPopConfirm] = useState(false)

	useEffect(() => {
		if (isEmptyArray(childList)) {
			toast('엑셀파일을 다시 등록해주세요.')
			router.back()
		}

		setFilteredChildList(childList)
		const makeClass = childList.reduce((prev: any, next: any, idx: number) => {
			const { classId, className } = next
			if (!prev[classId]) {
				prev[classId] = { classId, className, data: [], total: 0, teacher: '' }
			}
			prev[classId].data.push(next)
			prev[classId].total = prev[classId].data.length
			return prev
		}, {})

		let totalCount: number = 0
		Object.keys(makeClass).map((v: string) => (totalCount += makeClass[v].total))
		const classData = [
			INIT_ALL_CLASS(totalCount),
			...(Object.keys(makeClass).map((v: string) => {
				return {
					classId: makeClass[v].classId,
					name: makeClass[v].className,
					total: makeClass[v].total,
					teacher: makeClass[v].teacher,
				}
			}) as Array<PopClassRow>),
		]
		setClassList(classData)
	}, [])

	const handleConfirmBtn = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post(`/api/daycare/child/comfirm/${user.daycareId}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						clearChildList()
						router.replace(ROUTE_PATH['22-01'])
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const handleClassSelect = (param: any) => {
		setFilteredChildList(param.classId ? childList.filter((v: any) => v.classId === param.classId) : childList)
		setSelectedClass(param)
	}

	const popOpenConfirm = () => {
		setPopConfirm(true)
	}

	const popCloseConfirm = () => {
		setPopConfirm(false)
	}

	return (
		<>
			<Contents>
				<div className='child-home-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
					</div>

					<div className='child-info-list'>
						<ul>
							{filteredChildList.map((child: any) => (
								<li key={uuidv4()}>
									<Button style={{ width: '100%' }}>
										<div className='box'>
											<div className='thumb'>
												{/* TODO: 원아 이미지 가져오기 */}
												{/* <Img src={'/images/temp/temp-profile.png'} alt='' /> */}
											</div>
											<div className='desc'>
												<div className='info'>
													<span>{child.className}</span>
													<b>{child.childName}</b>
												</div>
												{/* TODO: 학부모 가져오기 */}
												{/* <div className='parents'>학부모 : {child.teacherId}</div> */}
											</div>
										</div>
									</Button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1' onClick={popOpenConfirm}>
					<span>확인</span>
				</Button>
			</Footer>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => handleClassSelect(param)} />
			<PopEditConfirm title='원아' open={popConfirm} close={popCloseConfirm} confirm={handleConfirmBtn} />
		</>
	)
}

export default _
