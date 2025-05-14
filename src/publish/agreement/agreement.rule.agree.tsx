import { Button, Checkbox } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '약관동의',
			back: true,
		})
	}, [])
	// 필수 동의 항목
	const allCheckdata = [
		{ value: 1, label: '이용약관에 동의합니다.' },
		{ value: 2, label: '개인정보처리 및 활용 동의합니다.' },
		{ value: 3, label: '14세 이상입니다.' },
	]
	// 선택 동의 항목
	const [marketing, setMarketing] = useState(false)

	// 단일선택
	const [checkItems, setCheckItems] = useState<any>([])
	const handleSingleCheck = (checked: any, id: any) => {
		if (checked) {
			setCheckItems((prev: any) => [...prev, id])
		} else {
			setCheckItems(checkItems.filter((el: any) => el !== id))
		}
	}
	// 전체 선택
	const handleAllCheck = (checked: any) => {
		if (checked) {
			let idArray: any = []
			allCheckdata.forEach(d => idArray.push(d.value))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<>
			<Contents>
				<div className='agree-checks-wrap'>
					<div className='visual'></div>
					<div className='visual-text'>
						우리 아이의 미래를 키웁니다.
						<br />
						<em>우리아이AI</em>와 함께 하세요.
					</div>
					<div className='agree-checks'>
						<div className='check-all'>
							<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === allCheckdata.length}>
								전체 동의
							</Checkbox>
						</div>
						<div className='check-box'>
							<strong className='check-tit'>필수 동의 항목</strong>
							<ul>
								{allCheckdata?.map((data, key) => (
									<li key={key}>
										<Checkbox key={key} name={`check-${data.value}`} onChange={(e: any) => handleSingleCheck(e, data.value)} checked={checkItems.includes(data.value)}>
											{data.label}
										</Checkbox>
										<Button to='/Rule' className='btn-detail'></Button>
									</li>
								))}
							</ul>
						</div>
						<div className='check-box'>
							<strong className='check-tit'>선택 동의 항목</strong>
							<ul>
								<li>
									<Checkbox checked={marketing} onChange={setMarketing}>
										마케팅 정보 수신에 동의합니다.
									</Checkbox>
									<Button to='/Rule' className='btn-detail'></Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>다음</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
