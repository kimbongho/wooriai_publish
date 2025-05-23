import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '마케팅정보 수신 동의',
			back: true,
		})
	}, [])
	return (
		<>
			<Contents>
				<div className='member-wrap'>
					<section className='rule-wrap'>
						<div className='modify-history'>
							<b>수정이력</b>
							<div className='rule-table'>
								<table>
									<colgroup>
										<col style={{ width: '50%' }} />
										<col style={{ width: '50%' }} />
									</colgroup>
									<thead>
										<tr>
											<th>날짜</th>
											<th>버전</th>
										</tr>
									</thead>
									<tbody>
										<tr>
                      <td>2024.08.12</td>  
                      <td>ver. 2.0</td>
                    </tr>          
                    <tr>
                      <td>2024.07.29</td>  
                      <td>ver. 1.0</td>
                    </tr>     
									</tbody>
								</table>
							</div>
						</div>

						<div className='text'>(주)이노뎁 (이하 회사)는 개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다</div>

						<h2>1. 전송방법</h2>
						<div className='text'>마케팅 정보 전송 방법은 웹/앱 푸시 및 SNS, SMS 발송 방법으로 전송됩니다.</div>

						<h2>2. 전송내용</h2>
						<div className='text'>
							발송되는 마케팅 정보는 수신자에게 우리아이AI 서비스에서 제공하는 혜택(포인트, 쿠폰 등) 정보, 각종 이벤트, 신규 상품 관련 소식 등 광고성 정보로 관련 법의 규정을 준수하여 발송됩니다. 단, 광고성 정보 이외에 의무적으로 안내 되어야 하는 정보성 내용은
							수신동의 여부와 무관하게 제공됩니다.
						</div>

						<h2>3. 수집항목</h2>
						<div className='text'>이메일, 이름, 전화번호</div>

						<h2>4. 이용목적</h2>
						<div className='text'>이벤트 안내, 이벤트 경품/사은품 제공, 할인행사, 고객 맞춤 마케팅/판촉 등 관련 이메일 및 SMS 등 발송</div>

						<h2>5. 철회안내</h2>
						<div className='text'>수신동의 이후에도 언제든지 동의를 철회할 수 있으며, 수신을 동의하지 않아도 회사가 제공하는 기본적인 서비스를 이용하실 수 있습니다. 다만 수신 거부할 경우 신규 서비스나 상품 관련 소식 등의 마케팅 정보를 제공받지 못할 수 있습니다.</div>

						<h2>6. 수신동의 변경 및 보유기간</h2>
						<div className='text'>
							보유 기간 : 마케팅 정보 수신 동의로부터 2년, 기간 초과 시 동의 절차 재진행 (미동의 시, 즉시 파기) 우리아이AI 개인정보 수정 페이지에서 마케팅 수신동의를 변경(동의/철회)할 수 있으며, 동의일로부터 회원 탈퇴 혹은 마케팅 수신 동의 해제 시까지 광고성 정보
							전달을 위하여 보유ㆍ이용 됩니다.
						</div>
					</section>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>확인</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
