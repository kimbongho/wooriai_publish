import { Button, Popup, useToast } from '@/entities'
import { isEmptyString, isRightsAdmin, isRightsParents, RESPONSE_OK, Server, STATUS_OK, userStore } from '@/shared'
import { useEffect, useState } from 'react'

const INIT_ALL_CLASS: (total: number) => PopClassRow = (total: number) => ({ classId: null, name: '전체', total, teacher: '' })

const _ = ({ data, value, open, close, onChange }: any) => {
	const { toast } = useToast()

	const { user } = userStore()

	const [classList, setClassList] = useState<Array<PopClassRow>>([INIT_ALL_CLASS(0)])
	const [selected, setSelected] = useState<number>(0)

	useEffect(() => {
		if (data !== undefined) {
			setClassList(data)
		} else if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/class/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const list = resData.list
						const totCnt = resData.childTotCnt

						if (user) {
							const arrs: any = [
								...(isRightsParents(user?.rights) ? [] : [INIT_ALL_CLASS(totCnt)]),
								...(list.map((v: any) => {
									return {
										classId: v.classId,
										name: v.className,
										total: v.classNowPax,
										teacher: v.teacherId,
									}
								}) as Array<PopClassRow>),
							]
							setClassList(arrs)
						}
					} else {
						toast(message)
					}
				}
			})
		}
	}, [data])

	useEffect(() => {
		if (value !== undefined) {
			setSelected(classList.findIndex(v => v.classId === value.classId))
		}
	}, [value])

	useEffect(() => {
		selectClass(0)
	}, [classList])

	const selectClass = (idx: number): void => {
		setSelected(idx)
		onChange(classList[idx], classList)
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title align-l'>반을 선택해 주세요</b>
			</div>
			<div className='pop-body'>
				<div className='select-list'>
					<ul>
						{classList.map((d: any, idx: any) => {
							return (
								<li key={`selectClass` + idx}>
									<button
										onClick={e => {
											selectClass(idx)
										}}
										className={`link ${selected === idx ? 'on' : ''}`}
									>
										<span className='class'>
											<b>{d.name}</b>
											{isRightsAdmin(user?.rights) && <span className='person'>({d.total}명)</span>}
										</span>
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={close}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
