import { Checkbox } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './privacy.style'

const allCheckdata = [
	{ value: 1, label: '위험알림', detail: 'AI 위험 알림 정보' },
	{ value: 2, label: '학부모 알림', detail: '귀가동의서, 투약의뢰서' },
	{ value: 3, label: '새글 알림', detail: '공지, 알림창, 앨범 등' },
	{ value: 4, label: '등,하원 알림', detail: '등원, 하원 정보' },
	{ value: 5, label: '이벤트 및 유용한 정보', detail: '마케팅 알림' },
]

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림설정',
			back: true,
		})
	}, [])

	const [checkItems, setCheckItems] = useState<any>([])
	const handleSingleCheck = (checked: boolean, id: number) => {
		if (checked) {
			setCheckItems((prev: Array<number>) => [...prev, id])
		} else {
			setCheckItems(checkItems.filter((el: number) => el !== id))
		}
	}

	// 전체 선택
	const handleAllCheck = (checked: boolean) => {
		if (checked) {
			let idArray: Array<number> = []
			allCheckdata.forEach(d => idArray.push(d.value))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<Contents>
			<div className='alarm-manage-wrap'>
				<div className='toggle-box'>
					<div className='left'>
						<b>전체 설정</b>
					</div>
					<div className='right'>
						<Checkbox className='inp-range' name='check-all' onChange={handleAllCheck} checked={checkItems.length === allCheckdata.length} />
					</div>
				</div>

				<div className='alarm-list'>
					{allCheckdata?.map((data, key) => (
						<div className='toggle-box' key={`alarm` + key}>
							<div className='left'>
								<b>{data.label}</b>
								<span>{data.detail}</span>
							</div>
							<div className='right'>
								<Checkbox className='inp-range' key={key} name={`check-${data.value}`} onChange={(e: any) => handleSingleCheck(e, data.value)} checked={checkItems.includes(data.value)} />
							</div>
						</div>
					))}
				</div>
			</div>
		</Contents>
	)
}

export default _
