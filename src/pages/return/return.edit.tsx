/** @jsxImportSource react */
import { Button, Checkbox, Input, Radio, RadioGroup, Textarea, useToast } from '@/entities'
import { PopBoard, PopTimePicker } from '@/features'
import { globalStore, isEmptyString, RESPONSE_OK, returnStore, ROUTE_PATH, Server, STATUS_OK, useCommCode, userStore, zeroFill } from '@/shared'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './return.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { returns } = returnStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '귀가동의서',
			back: true,
			trash: !isEmptyString(returns?.docId),
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])
	// const searchParams: any = useSearchParams()
	// const docId = !searchParams.get('docId') ? '0' : searchParams.get('docId').toString()
	// const [returnMethodOption, setReturnMethodOption] = useState<any>([])

	const [returnData, setReturnData] = useState<any>()
	const [popImport, setPopImport] = useState(false)
	const [popPicker, setPopPicker] = useState(false)
	const [timeValue, setTimeValue] = useState<any>([])
	const [returnMethod, setReturnMethod] = useState('')
	const [check, setCheck] = useState(false)

	const returnMethodOption = useCommCode('RUT00', { code: 'value', name: 'label' })

	useEffect(() => {
		if (!isEmptyString(returns.docId)) {
			Server.get(`/api/presence/retrundoc/info?docId=${returns.docId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							let resultData = resData.doc
							setReturnData(!resultData ? returnData : resultData)
							setReturnMethod(returnData?.returnHow ? returnData.returnHow : 'RUT01')

							const returnTm = resultData?.returnTm.indexOf(':') >= 0 ? resultData.returnTm.split(':') : null
							if (returnTm !== null) {
								setTimeValue([undefined, returnTm[0], returnTm[1]])
							}
						} else {
							toast('귀가동의서 정보를 불러오는 데 실패했습니다.')
						}
					}
				})
				.catch()
		} else {
			const now = new Date()
			setTimeValue(['', zeroFill(now.getHours(), 2), zeroFill(now.getMinutes(), 2)])
		}
	}, [returnMethodOption])

	const guardianTelChange = (e: any) => {
		let inputPhone = e.target.value
		if (!inputPhone.includes('-') && inputPhone.length > 11) {
			inputPhone = inputPhone.slice(0, 11)
		}
		const hyphNo = inputPhone.replace(/\D/g, '').replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
		setReturnData((prev: any) => ({ ...prev, guardianTel: hyphNo }))
	}

	const onSubmit = () => {
		const returnEditForm = {
			docId: returns?.docId,
			returnDate: moment(returns?.regiDate).format('YYYY-MM-DD'),
			returnTm: `${zeroFill(timeValue[1], 2)}:${zeroFill(timeValue[2], 2)}`,
			returnHow: returnMethod,
			guardianName: returnData.guardianName,
			guardianTel: returnData.guardianTel,
			returnDesc: returnData.returnDesc,
			childId: returns?.childId,
			daycareId: user.daycareId,
		}

		// return console.log(returnEditForm)
		Server.post('/api/presence/retrundoc/upsert', returnEditForm)
			.then((res: any) => {
				let result = res.data
				if (result.state === 'ok') {
					router.replace(`${ROUTE_PATH['11-01']}/${result.data.docId}`)
				} else {
					toast('귀가동의서 등록 실패')
				}
			})
			.catch()
	}

	return (
		<>
			<Contents>
				<div className='return-edit-wrap'>
					<div className='menu'>
						<div className='right'>
							<Button className='btn-import' onClick={() => setPopImport(true)}>
								불러오기
							</Button>
						</div>
					</div>

					<div className='section'>
						<b className='tit'>귀가 시간</b>
						<Button className='btn-time' onClick={() => setPopPicker(true)}>
							{timeValue.length > 0 ? (
								<span className='time'>
									{zeroFill(timeValue[1], 2)} : {zeroFill(timeValue[2], 2)}
								</span>
							) : (
								<span className='placeholder'>시간을 선택해주세요</span>
							)}
						</Button>
					</div>

					<div className='section'>
						<b className='tit'>귀가방법</b>
						<div className='select-box'>
							<ul>
								<RadioGroup label='solveStatus' value={returnMethod} onChange={setReturnMethod}>
									{returnMethodOption.map((item: any, idx: any) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>
					</div>

					<div className='section'>
						<b className='tit'>보호자명</b>
						<Input type='text' maxLength={20} value={returnData?.guardianName} del={true} onChange={(e: any) => setReturnData((prev: any) => ({ ...prev, guardianName: e.target.value }))} />
					</div>

					<div className='section'>
						<b className='tit'>보호자 연락처</b>
						<Input type='text' maxLength={13} value={returnData?.guardianTel} del={true} onChange={(e: any) => guardianTelChange(e)} />
					</div>

					<div className='section'>
						<b className='tit'>추가내용</b>
						<Textarea value={returnData?.returnDesc} placeholder={'추가 내용'} maxLength={20000} disabled={false} onChange={(e: any) => setReturnData((prev: any) => ({ ...prev, returnDesc: e.target.value }))} />
					</div>
				</div>
				<div className='check-wrap'>
					<Checkbox checked={check} onChange={setCheck}>
						작성자는 아동을 위의 방법으로 귀가 조치하는 것을 <br />
						동의합니다.
					</Checkbox>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={!check} onClick={onSubmit}>
						<span>등록</span>
					</Button>
				</div>
			</Contents>

			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={() => setPopImport(false)} />
			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
