import { Button, Icon, useToast } from '@/entities'
import { gnbClose, RESPONSE_OK, ROUTE_PATH, Server, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { Gnb } from './gnb.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()

	const closePop = () =>
		setTimeout(function () {
			gnbClose()
		}, 100)

	const removeBasicData = (div: 'teacher' | 'class' | 'child') => {
		Server.get(`/api/test/delete/${div}/${user.daycareId}`).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				toast(message)
			}
		})
	}

	return (
		<Gnb className='gnb-wrap'>
			<div className='gnb-header'>
				<Button
					className='logo'
					onClick={(e: any) => {
						router.push(ROUTE_PATH['05-01'])
						closePop()
					}}
				/>
				<div className='right'>
					<Button className='btn-close' onClick={gnbClose}>
						<Icon type='close' />
					</Button>
				</div>
			</div>
			<div className='gnb-content'>
				<ul className='alarm-wrap'>
					<li>
						<Button
							className='link'
							style={{ width: '100%' }}
							onClick={() => {
								router.push(ROUTE_PATH['05-01'])
								closePop()
							}}
						>
							<Icon type='home' />
							<span className='txt'>홈으로</span>
						</Button>
					</li>
					{user.rights !== 'PRENT' && (
						<li>
							<Button
								className='link'
								onClick={(e: any) => {
									router.push(ROUTE_PATH['18-01'])
									closePop()
								}}
							>
								<Icon type='alarm-danger' />
								<span className='txt'>AI 위험 알림 관리</span>
							</Button>
						</li>
					)}
				</ul>
				<ul className='menu-list'>
					<li>
						<Button
							className='link'
							onClick={(e: any) => {
								router.push(ROUTE_PATH['19-01'])
								closePop()
							}}
						>
							<Icon type='menu-home' />
							<span className='txt'>원 정보</span>
						</Button>
					</li>
					<li>
						<Button
							className='link'
							onClick={(e: any) => {
								router.push(ROUTE_PATH['20-01'])
								closePop()
							}}
						>
							<Icon type='menu-teacher' />
							<span className='txt'>선생님 정보</span>
						</Button>
					</li>
					<li>
						<Button
							className='link'
							onClick={(e: any) => {
								router.push(ROUTE_PATH['21-01'])
								closePop()
							}}
						>
							<Icon type='menu-class' />
							<span className='txt'>반 정보</span>
						</Button>
					</li>
					<li>
						<Button
							className='link'
							onClick={(e: any) => {
								router.push(ROUTE_PATH['22-01'])
								closePop()
							}}
						>
							<Icon type='menu-child' />
							<span className='txt'>원아 정보</span>
						</Button>
					</li>
					{user.rights !== 'PRENT' && (
						<li>
							<Button
								className='link'
								onClick={(e: any) => {
									router.push(ROUTE_PATH['23-01'])
									closePop()
								}}
							>
								<Icon type='menu-attend' />
								<span className='txt'>전자출결 정보</span>
							</Button>
						</li>
					)}
					<li>
						<Button
							className='link'
							onClick={(e: any) => {
								router.push(ROUTE_PATH['24-01'])
								closePop()
							}}
						>
							<Icon type='menu-privacy' />
							<span className='txt'>개인정보 설정</span>
						</Button>
					</li>
					{user.rights !== 'PRENT' && (
						<li className='line-t bg'>
							<Button
								className='link'
								onClick={(e: any) => {
									router.push(ROUTE_PATH['15-01'])
									closePop()
								}}
							>
								<Icon type='menu-cloud' />
								<span className='txt'>클라우드 이미지 관리</span>
							</Button>
						</li>
					)}

					{/* TODO: QA가 완료된 후에 삭제예정*/}
					<li>
						<div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
							<Button
								className='link'
								onClick={(e: any) => {
									removeBasicData('teacher')
									closePop()
								}}
								style={{ border: '1px solid #ccc', borderRadius: 15, backgroundColor: '#eee' }}
							>
								<span className='txt'>선생님 정보삭제</span>
							</Button>
							<div style={{ width: 20 }} />
							<Button
								className='link'
								onClick={(e: any) => {
									removeBasicData('class')
									closePop()
								}}
								style={{ border: '1px solid #ccc', borderRadius: 15, backgroundColor: '#eee' }}
							>
								<span className='txt'>반 정보삭제</span>
							</Button>
							<div style={{ width: 20 }} />
							<Button
								className='link'
								onClick={(e: any) => {
									removeBasicData('child')
									closePop()
								}}
								style={{ border: '1px solid #ccc', borderRadius: 15, backgroundColor: '#eee' }}
							>
								<span className='txt'>아동 정보삭제</span>
							</Button>
						</div>
					</li>
					{/* //여기까지 삭제예정 */}
				</ul>
			</div>
		</Gnb>
	)
}

export default _
