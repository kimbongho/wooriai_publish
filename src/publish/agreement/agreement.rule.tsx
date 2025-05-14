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
			title: '이용약관',
			back: true,
		})
	}, [])
	return (
		<>
			<Contents>
				<div className='member-wrap'>
					<section className='rule-wrap'>
						<div className="modify-history">
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

						<h2>제 1조(목적)</h2>
						<div className='text'>
						본 약관은 이노뎁(주)(이하 회사)이 운영하는 인터넷 및 모바일 플랫폼인 우리아이AI(이하 플랫폼)를 통해 제공하는 서비스 및 플랫폼에 부속하는 서비스의 이용조건과 절차, 이용자와 회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
						</div>

						<h2>제 2조(용어의 정의)</h2>
						<div className='text'>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</div>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>플랫폼이란 회사가 운영하는 어린이집과 이용자 간 소통을 할 수 있는 인터넷, 모바일 애플리케이션(이하 앱)을 뜻합니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>서비스란 회사가 운영하는 우리아이AI를 통해서 제공하는 모든 기능 및 서비스와 인공지능 분석을 통해 파생된 서비스를 포함합니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>AI서비스란 인공지능 기술을 사용하여 본 플랫폼에서 제공하는 모든 기능 및 서비스를 말합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>이용자란 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 말합니다.</div></li>
							<li><span className='num'>5.</span><div className='desc'>회원이란 서비스를 이용하기 위하여 회원약관 및 필수 동의 문서에 동의하고, 우리아이AI 플랫폼에 회원 가입을 완료한 개인 및 시설의 장을 말합니다.</div></li>
							<li><span className='num'>6.</span><div className='desc'>시설이란 우리아이AI 플랫폼을 사용하는 어린이집을 뜻합니다.</div></li>
							<li><span className='num'>7.</span><div className='desc'>시설 관계자란 우리아이AI플랫폼을 사용하는 어린이집의 원장선생님, 선생님 등의 시설 관리 관계자를 뜻합니다.</div></li>
							<li><span className='num'>8.</span><div className='desc'>시설 이용자란 시설 관계자를 포함하여 우리아이AI플랫폼을 이용하는 어린이집의 등록 및 등록 예정 아동 및 아동과 관계되어 어린이집을 방문하는 이용자를 뜻합니다. </div></li>
						</ol>

						<h2>제 3조(약관의 게시 및 효력과 개정)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사는 본 약관의 내용을 이용자 또는 회원이 쉽게 알 수 있도록 플랫폼을 통해 게시합니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>본 약관은 플랫폼에서 제공하는 서비스를 이용하는 모든 약관에 동의한 이용자에 대하여 그 효력을 발생합니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>본 약관의 내용은 서비스의 일부 화면 또는 기타 방법에 의하여 이를 공지하거나 그 내용을 전자우편 등의 방법으로 통지함으로써 효력이 발생합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 개인정보 보호법 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</div></li>
							<li><span className='num'>5.</span><div className='desc'>회사가 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행약관과 함께 개정약관의 적용일자 최소 일주일 전 플랫폼에 공지합니다. 단, 회원에게 불리한 약관 개정의 경우 최소 30일 전 플랫폼에 공지하며 공지 외에 전자우편, SMS 등의 방법을 통해 명확히 통지합니다.</div></li>
							<li><span className='num'>6.</span><div className='desc'>회사가 전항에 따라 약관개정을 공지 또는 통지하면서, 회원이 개정 약관 변경 적용일까지 거부 의사를 표시하지 않을 경우, 약관 개정에 동의한 것으로 간주한다는 내용을 함께 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 않은 경우에는 회원이 개정약관에 동의한 것으로 간주합니다.</div></li>
							<li><span className='num'>7.</span><div className='desc'>회원이 개정 약관의 적용에 동의하지 않는 경우 회사는 개정약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사도 이용 계약을 해지할 수 있습니다.</div></li>
							<li><span className='num'>8.</span><div className='desc'>이 약관에 동의하는 것은 정기적으로 회사가 운영하는 플랫폼에 방문하여 약관의 변경 사항을 확인하는 것에 동의하는 것을 의미합니다. 회사가 본 약관에 따라 변경 고지 의무를 다하였음에도 회원이 변경된 약관에 대한 정보를 알지 못하여 발생하는 피해에 대하여 회사는 책임을 부담하지 않습니다.</div></li>
						</ol>

						<h2>제 4조(약관 외 준칙)</h2>
						<div className='text'>
							본 약관에 명시되지 않은 사항은 신의성실의 원칙에 따라 회원과 회사의 합의에 의해 결정할 수 있으며, 합의가 되지 않은 사항은 개인정보보호에 관한 법률, 전기통신 기본법, 전기통신 사업법, 정보통신 윤리위원회 심의규정, 정보통신 윤리강령, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관계 법령과 일반 거래 관행에 따릅니다.
						</div>

						<h2>제 5조(회원가입)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회원가입은 신청자가 플랫폼을 통해 소정의 가입신청 양식에서 요구하는 사항을 기입하고 본 약관 및 개인정보수집 및 이용동의서 등 회원의 동의가 필요한 사항에 대해 동의한다는 의사표시를 하고 회사가 이를 승낙하여 회원가입이 완료됩니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회원은 회원가입 시 등록한 사항에 변경이 있는 경우 상당한 기간 이내에 회사에 회원정보 수정 등의 방법으로 그 변경사항을 알려야 하며, 변경된 회원정보를 회사에 알리지 않아 발생하는 손해에 대한 책임은 이용자에게 있습니다.</div></li>
						</ol>

						<h2>제 6조(회원가입의 제한)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span>
								<div className='desc'>회사는 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
									<ol className="num-list">
										<li><span className='num'>a.</span><div className='desc'>다른 사람의 명의나 이메일 등 타인의 개인정보를 사용하여 신청한 경우</div></li>
										<li><span className='num'>b.</span><div className='desc'>회원가입 신청서의 내용을 허위로 기재하였거나 신청한 경우</div></li>
										<li><span className='num'>c.</span><div className='desc'>사회의 안녕, 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우</div></li>
										<li><span className='num'>d.</span><div className='desc'>다른 사람의 플랫폼 이용을 방해하거나 그 정보를 도용하는 등의 행위를 한 경우</div></li>
										<li><span className='num'>e.</span><div className='desc'>플랫폼을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우</div></li>
										<li><span className='num'>f.</span><div className='desc'>기타 플랫폼이 정한 이용신청요건이 미비된 경우</div></li>
									</ol>
								</div>
							</li>
							<li><span className='num'>2.</span>
								<div className='desc'>회사는 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다.
									<ol className="num-list">
										<li><span className='num'>a.</span><div className='desc'>서비스 관련 제반 용량이 부족한 경우</div></li>
										<li><span className='num'>b.</span><div className='desc'>기술상 장애 사유가 있는 경우</div></li>
										<li><span className='num'>c.</span><div className='desc'>기타 회사의 재정적, 기술적으로 필요하다고 인정하는 경우</div></li>
									</ol>
								</div>
							</li>
						</ol>

						<h2>제 7조(이용자의 정보보안)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>이용자는 플랫폼 서비스 가입 절차를 완료하는 순간부터 입력한 정보의 비밀을 유지할 책임이 있으며 본인 인증을 통하여 발생하는 모든 결과에 대한 책임은 이용자 본인에게 있습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>이용자는 자신의 아이디 및 비밀번호에 관한 관리 책임이 있으며 제 3자가 이용하게 해서는 안됩니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>이용자가 자신의 아이디 및 비밀번호를 도난당하거나 제 3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내 또는 조치가 있는 경우에는 이에 따라야 하며, 회사의 안내 또는 조치를 따르지 않아 발생하는 손해에 대하여 회사는 책임을 부담하지 않습니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>이용자는 플랫폼 서비스를 개인의 보안이 유지되는 기기에서 사용하거나, 사용 종료 시마다 정확히 접속을 종료하여 제 3자가 이용자에 관한 정보를 습득하거나 이용할 수 없도록 관리해야 합니다. 이를 관리하지 않아 발생하는 손해 및 손실에 대하여 회사는 책임을 지지 않습니다. </div></li>
						</ol>

						<h2>제 8조(개인정보보호)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사는 서비스 제공을 위하여 이용자의 개인정보를 수집할 수 있으며, 이 경우 필요한 최소한의 범위 내에서 개인정보를 수집합니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사는 이용자의 개인정보 보호를 위하여 ‘개인정보처리방침’을 수립하고, ‘개인정보처리방침’ 및 개인정보 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령에 따라 개인정보를 보호하기 위해 노력합니다.</div></li>
						</ol>

						<h2>제 9조(서비스의 종류 및 이용 방법)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span>
								<div className='desc'>본 플랫폼에서 제공하는 서비스는 아래와 같습니다.
									<ol className="num-list">
										<li><span className='num'>a.</span><div className='desc'>회사가 자체 개발하거나 다른 기관과의 협의 등을 통해 본 플랫폼에서 제공하는 일체의 서비스</div></li>									
									</ol>									
								</div>
							</li>
							<li><span className='num'>2.</span><div className='desc'>제 1항에 의한 서비스 중 일부에 대하여서는, 해당 서비스 및 해당 서비스의 파생 서비스에 대해 서비스의 원활한 제공 및 이용을 위한 개별 약관 혹은 이용계약 등의 방법을 거쳐야 이용할 수 있습니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>본 플랫폼의 서비스는 무료 제공함을 원칙으로 하나, 플랫폼 서비스에 포함된 일부 서비스의 경우 유료 서비스로 제공할 수 있습니다. 또한 무료로 제공되는 서비스라 할지라도 지속적이고 원활한 서비스의 제공을 위해 유료 서비스로 전환될 수 있습니다. </div></li>
							<li><span className='num'>4.</span><div className='desc'>유료 서비스의 이용 및 회사에서 서비스에 따른 용역을 제공할 경우, 별도의 이용계약을 체결하고, 체결한 이용계약에 의한 규정에 따릅니다.</div></li>
							<li><span className='num'>5.</span><div className='desc'>본 플랫폼의 서비스 중 일부는 서비스의 원활한 제공 및 정보 보호 등의 이유로 테스트 기간을 두고 베타서비스로 제공할 수 있으며, 테스트 기간동안 회사는 특정 분류 고객의 서비스 제공 등 서비스를 제한적으로 제공할 수 있습니다. 또한 베타서비스의 결과로 회사에서 서비스의 제공이 부적절하다고 판단될 경우 테스트 기간 이후 서비스를 중단할 수 있습니다.</div></li>
							<li><span className='num'>6.</span><div className='desc'>본 플랫폼의 서비스 중, CCTV 등의 장비 사용과 장비를 통한 영상 분석 및 알림 서비스 및 AI서비스를 사용한 시설 이용자의 사진 분석과 선생님정보, 반정보, 아동정보 , 출결정보 등의 시설 관련자의 개인정보를 사용한 분류 서비스 등의 개인정보 및 민감정보가 포함된 모든 서비스를 이용하기 위해서는, 플랫폼 서비스를 이용하는 시설의 모든 이용자에게 민감정보처리에 대한 동의를 필요로 하며, 민감정보처리에 대한 동의의 수집 책임은 시설에 있습니다.</div></li>
						</ol>

						<h2>제 10조(이용계약의 해지)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>본 약관의 제 9조 제 3항에 따른 이용계약은 플랫폼의 이용해지와는 별도로 각 계약에 관하여 해지를 신청하여야 합니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>일부 유료 서비스의 경우 이용계약의 해지시 계약 조항에 따라 위약금 및 장비 철거 등의 비용이 별도로 발생할 수 있습니다.</div></li>
						</ol>						

						<h2>제 11조(서비스의 변경)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사는 지속적이고 원활한 서비스의 제공에 필요한 경우 서비스의 내용 및 비용을 변경할 수 있습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>이때 회사는 회원에게 불리하다고 판단되는 경우, 서비스의 변경 일자, 변경 내용을 법령이 정하는 최소한의 기간 이상 서비스 화면의 일부 또는 기타방법을 통해 플랫폼 이용자에게 공지하며, 관련 서비스를 이용 중인 이용자에게는 전자우편, SMS, 푸시알림 등의 방법을 사용하여 적극적으로 서비스의 변경을 고지합니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>회사가 회원의 권리를 위해 제 2항의 방법으로 고지에 대한 노력을 다하였음에도 불구하고, 회원이 정보 변경을 알리지 않거나, 회원이 고지 내용을 확인하지 않아 발생한 손해에 대하여서는 회사는 책임지지 않습니다.</div></li>
						</ol>						

						<h2>제 12조(서비스의 이용시간)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>서비스의 이용은 본 플랫폼의 업무상 또는 기술상 특별한 지장이 없는 한, 연중무휴, 1일 24시간 제공하는 것을 원칙으로 합니다. 다만, 플랫폼이나 관계사의 서비스의 정기점검 등의 서비스 점검 및 조치 등을 위하여 필요로 하는 시간은 그러하지 않습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>본 플랫폼은 서비스별로 이용할 수 있는 시간을 별도로 정할 수 있으며, 필요한 경우 이를 조정할 수 있습니다.</div></li>
						</ol>						

						<h2>제 13조(서비스의 중단)</h2>
						<div className="text">회사는 서비스의 제공과 관련한 아래의 사항 발생 시 서비스의 전부 또는 일부를 중단 할 수 있습니다.</div>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사의 정책 변경, 서비스의 유지보수 등을 포함한 기술적 사양의 변경 필요성이 있는 경우 </div></li>
							<li><span className='num'>2.</span><div className='desc'>정전, 제반 설비의 장애 또는 이용량의 증가 등으로 정상적인 서비스 이용에 지장이 있는 경우</div></li>
							<li><span className='num'>3.</span><div className='desc'>관계사와의 계약 종료, 정부의 명령이나 규제 등의 회사의 제반 사정으로 서비스의 전부 또는 일부를 유지할 수 없는 경우</div></li>
							<li><span className='num'>4.</span><div className='desc'>기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</div></li>
						</ol>						
						<div className="text">
							서비스의 전부 또는 일부 중단이 발생할 경우, 회사는 중단되는 서비스의 내용 및 중단 기간을 최소 1주일 전 플랫폼 서비스 일부 화면 공지 및 기타 방법으로 사전에 공지하며, 서비스의 중단이 이용자에게 중대한 영향을 미치는 경우, 전자우편 또는 SMS 등의 방법으로 개별적으로 공지합니다. 다만, 회사가 예측할 수 없거나 통제할 수 없는 사유로 인해 사전 공지 또는 통지가 불가능한 경우, 사전 공지 또는 통지 기간의 단축 및 사후 공지할 수 있습니다.
						</div>

						<h2>제 14조(서비스의 이용상의 책임)</h2>
						<div className="text">이용자는 본 플랫폼 이용 시 아래와 같은 행위를 금지하고 있습니다.</div>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>본 플랫폼의 서비스를 이용하여 상품이나 서비스를 판매하거나 고객을 유인하는 영업활동</div></li>
							<li><span className='num'>2.</span><div className='desc'>해킹, 광고를 통한 수익, 음란사이트를 통한 상업적 행위</div></li>
							<li><span className='num'>3.</span><div className='desc'>상용 프로그램 및 영상, 이미지 등 게시물의 저작권이 게시자에게 있지 아니한 온라인 콘텐츠를 무료 배포하는 행위</div></li>
							<li><span className='num'>4.</span><div className='desc'>서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도 증여 및 담보로 제공하는 행위</div></li>
						</ol>						
						<div className="text">이를 어기고 발생한 결과 및 손실, 관계기관에 의한 수사 및 처벌 등 법적조치 등에 관해서는 회사가 책임지지 않으며, 회사는 서비스 이용을 제한할 수 있습니다.</div>						

						<h2>제 15조(서비스의 이용제한 등)</h2>
						<div className="text">회사는 이용자가 다음 각 호에 해당하는 경우 사전통지 없이 이용계약의 해지 또는 서비스 제공을 중지하거나 관계 당국에 고발하는 등의 필요한 조치를 취할 수 있습니다.</div>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>상용 또는 불법, 음란, 저속하다고 판단되는 게시물, 타인의 사생활 침해 기타 공공질서 및 미풍양속에 위반되는 내용인 경우</div></li>
							<li><span className='num'>2.</span><div className='desc'>다른 이용자, 제3자를 비방, 모욕하거나 명예를 훼손하는 내용인 경우</div></li>
							<li><span className='num'>3.</span><div className='desc'>국익 또는 사회적 공익을 저해하는 경우</div></li>
							<li><span className='num'>4.</span><div className='desc'>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 경우</div></li>
							<li><span className='num'>5.</span><div className='desc'>회사 및 제3자의 지적재산권, 기타 권리를 침해하는 내용인 경우</div></li>
							<li><span className='num'>6.</span><div className='desc'>타인의 개인정보, 아이디(ID)와 비밀번호 및 공동인증서 등의 정보를 부정 사용하거나 이를 무단수집 또는 저장하는 경우</div></li>
							<li><span className='num'>7.</span><div className='desc'>다량의 정보 전송, 광고성 정보의 전송, 컴퓨터 바이러스 프로그램의 유포 등 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 경우</div></li>
							<li><span className='num'>8.</span><div className='desc'>정보통신윤리위원회 등 외부기관의 시정 요구가 있거나 선거관리위원회의 중지, 경고 또는 시정명령을 받는 선거법 위반행위가 있는 경우</div></li>
							<li><span className='num'>9.</span><div className='desc'>본 약관 및 플랫폼의 운영기준, 기타 관계 법령 등에 위배되는 경우</div></li>
						</ol>						

						<h2>제 16조(게시물의 저작권 및 책임)</h2>
						<div className="text">
							회사가 작성한 저작물에 대한 저작권 및 기타 지식재산권의 일체는 회사에 귀속됩니다.
							<br />이용자는 회사에게 지식재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로 이용하거나 제 3자가 이용하게 하여서는 안됩니다.
							<br />본 플랫폼의 서비스 중 이용자가 작성한 저작물의 경우 해당 저작물의 저작권 및 기타 지식재산권의 일체는 이를 작성한 이용자에게 귀속됩니다.
							<br />본 약관에서 회사에 부여된 권리를 제외하고 이용자는 이용자가 작성한 저작물에 대한 모든 권리를 보유하며 회사는 이용자의 동의없이 이용자가 작성한 저작물을 공개, 수정, 삭제 할 수 없습니다. 
							<br />다만 다음 각 호의 경우 이용자가 저작물을 게시할 경우, 이용자가 작성한 저작물에 관해 회사 및 본 약관이 정하는 대상에 관하여 해당 권한을 부여하는 것에 동의한 것으로 간주합니다. 
						</div>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>이용자가 투약의뢰서, 귀가동의서, 출석관리, 알림장, 앨범과 같이 특수 목적으로 제공하여야 하는 저작물을 작성한 경우 이 저작물에 관해 이를 수정, 격리, 삭제할 수 있는 권리를 포함하여 복제권, 공연권, 공중송신권, 전시권, 배포권, 대여권, 2차적저작물작성권 등 저작재산권 일체에 대한 권리를 회사와 서비스 계약 및 이용상 관계가 있는 동일 시설 이용자 혹은 서비스 계약 및 이용상 관계가 있는 제 3자에게 부여합니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>이용자가 공유를 목적으로 배포한 저작물 또는 이용자의 동의를 얻은 저작물에 한해서는 회사는 이용자의 저작물을 이용, 전시, 배포 및 수정할 수 있습니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>제 2항과 관련하여 회사는 서비스 내에서 이를 노출할 필요가 있는 경우 혹은 서비스의 개선 등을 위해 필요한 최소 범위에서만 저작권법 등 관련 법령의 제한에 따라 이용하며, 부득이 이러한 범위를 넘어 이용자의 저작물을 이용하고자 할 경우 사전에 이용 목적에 관해 이용자의 동의를 얻어 이용합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>이용자의 저작물이 법령에 위반되는 내용을 포함하는 경우 혹은 관계 시설 및 이용자에게 부당한 불이익을 초래할 수 있다고 판단되는 경우 회사 및 시설의 관리자는 해당 저작물의 게시 중단 및 삭제 등을 요청할 수 있으며, 관련 법령에 따라 조치를 취할 수 있습니다.</div></li>
							<li><span className='num'>5.</span><div className='desc'>동일 시설 이용자의 회원이 알림장, 공지, 앨범 등 특정 목적이 있는 저작물을 게시할 시 회원 및 회원 아동의 얼굴 및 기타 사회통념상 특정인임을 식별 할 수 있는 신체적 특징이 촬영 또는 그림으로 묘사되거나 공표될 수 있습니다.</div></li>
							<li><span className='num'>6.</span><div className='desc'>제 5항과 관련하여 해당 저작물에 포함된 초상권 권리자 모두의 동의를 얻어야 하며, 이를 위반함으로 인해 발생할 수 있는 법적 책임은 위반한 해당 회원에게 귀속되고, 회사와 시설 관계자는 이에 대한 법적 책임을 부담하지 않습니다.</div></li>
						</ol>						
						<div className="text">회사는 시설 관계자의 요청이 없는 경우라도 다음 각호의 경우에는 사전통지 없이 해당 저작물에 대해 삭제 또는 격리와 같은 임시조치를 취할 수 있습니다.</div>						
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>법령을 위반하거나 범죄 행위에 결부된다고 인정되는 경우</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사 또는 제 3자의 권리를 침해한다고 인정될 만한 사유가 있는 경우</div></li>
							<li><span className='num'>3.</span><div className='desc'>주민등록번호, 장애인등록정보, 운전면허 정보 등 서비스 이용과 관계없는 개인의 민감정보가 포함된 경우</div></li>
							<li><span className='num'>4.</span><div className='desc'>기타 회사의 정책에 위반되는 경우</div></li>
						</ol>

						<h2>제 17조(회사의 의무)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적, 안정적으로 서비스를 제공하기 위해 노력할 의무가 있습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사는 이용자의 개인정보를 본인의 승낙없이 타인에게 누설, 배포하지 않습니다. 다만 전기통신 관련 법령 등 관계 법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 않으며, 본 플랫폼과 회사가 운영하는 다른 서비스의 회원정보 통합관리와 관련하여 필요한 경우에는 개인정보 등 관련정보를 회사가 운영하는 다른 서비스에 제공할 수 있습니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안시스템을 갖추어야 합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</div></li>
						</ol>									

						<h2>제 18조(이용자의 의무)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>이용자는 서비스의 이용 및 가입시에 요구되는 정보를 정확하게 기입하여야 하며, 이미 제공된 정보는 정확한 정보가 되도록 유지, 갱신하여야 합니다. 만일, 해당 정보를 정확히 기입하지 않거나 이미 제공된 정보를 유지, 갱신하지 않아 발생하는 문제에 대한 책임은 본인에게 있습니다.</div></li>
							<li><span className='num'>2.</span>
								<div className='desc'>이용자는 서비스를 이용할 때 다음 각 호의 행위를 해서는 안 되며, 이로 인하여 문제가 발생될 경우 그 책임은 본인에게 있습니다.
									<ol className="num-list">
										<li><span className='num'>a.</span><div className='desc'>타인의 개인정보, 아이디(ID)와 비밀번호 등의 정보를 부정 사용하는 행위</div></li>
										<li><span className='num'>b.</span><div className='desc'>자기의 개인정보, 아이디(ID)와 비밀번호 등의 정보를 타인에게 이용하게 하는 행위</div></li>
										<li><span className='num'>c.</span><div className='desc'>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</div></li>
										<li><span className='num'>d.</span><div className='desc'>선량한 풍속, 기타 사회질서를 해하는 행위</div></li>
										<li><span className='num'>e.</span><div className='desc'>타인의 명예를 훼손하거나 모욕하는 행위</div></li>
										<li><span className='num'>f.</span><div className='desc'>타인의 지적재산권 등의 권리를 침해하는 행위</div></li>
										<li><span className='num'>g.</span><div className='desc'>해킹행위 또는 컴퓨터바이러스의 유포행위</div></li>
										<li><span className='num'>h.</span><div className='desc'>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</div></li>
										<li><span className='num'>i.</span><div className='desc'>서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위</div></li>
										<li><span className='num'>j.</span><div className='desc'>본 플랫폼에 게시된 정보를 동의없이 변경 및 유포하는 행위</div></li>
										<li><span className='num'>k.</span><div className='desc'>본 약관 및 본 플랫폼의 운영기준, 기타 관계 법령 등에 위배되는 행위</div></li>
									</ol>
								</div>
							</li>
							<li><span className='num'>3.</span><div className='desc'>이용자는 본 약관에서 규정하는 사항과 서비스 이용안내, 공지사항 또는 주의사항을 준수하여야 합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>이용자는 본 플랫폼의 서비스를 이용하여 얻은 정보를 회사의 사전승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.</div></li>
						</ol>				

						<h2>제 19조(이용제한)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span>
								<div className='desc'>회사는 이용자가 본 약관 및 회사가 서비스의 운영을 위하여 정하는 정책에 따른 의무를 위반하거나 서비스의 정상적인 운영을 방해하거나 다음 각 호에 해당하는 경우, 사전통보 후 경고, 일시정지, 영구이용정지, 회원자격 상실 등으로 서비스 이용을 제한할 수 있습니다. 회사가 사전통보 후 경고, 일시정지의 조치를 취하였음에도 동일 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 않는 경우 회사는 영구이용정지, 회원자격 상실 등의 조치를 취할 수 있습니다.
									<ol className="num-list">
										<li><span className='num'>a.</span><div className='desc'>가입 신청 시에 허위 내용을 등록한 경우</div></li>
										<li><span className='num'>b.</span><div className='desc'>다른 사람의 서비스 이용을 방해하거나 정보를 도용하는 경우</div></li>
										<li><span className='num'>c.</span><div className='desc'>서비스를 이용하여 법령 또는 본 약관이 금지하거나 공공의 질서에 반하는 행위를 하는 경우</div></li>
										<li><span className='num'>d.</span><div className='desc'>회사의 운영과 관련하여 근거 없는 사실 또는 허위의 사실을 적시하거나 유포하여 회사, 서비스의 명예를 실추시키거나 회사, 서비스의 신뢰성을 해하는 경우</div></li>
										<li><span className='num'>e.</span><div className='desc'>서비스의 이용과정에서 담당직원에게 폭언, 협박 또는 음란한 언행 등으로 서비스의 운영을 방해하는 경우</div></li>
									</ol>
								</div>
							</li>
							<li><span className='num'>2.</span><div className='desc'>회사는 주민등록법을 위반한 명의도용 및 결제도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 하거나 이용계약을 해지할 수 있습니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>본 조에 따른 이용제한 제재를 받은 이용자가 이의를 제기하고자 할 경우 회사의 고객센터에 문의할 수 있습니다.</div></li>
						</ol>														

						<h2>제 20조(회원탈퇴)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>이용자가 서비스의 이용을 더 이상 원하지 않을 경우 언제든지 본인이 플랫폼의 회원 탈퇴 과정을 거처 회원탈퇴를 할 수 있습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사는 이용자가 이용계약의 해지를 신청한 경우 관련 법령에 따라 이용자의 정보를 일정 기간 보유하여야 하는 경우를 제외하고는 해지 즉시 이용자가 등록한 정보 및 게시물 등의 데이터를 삭제합니다. 다만 다른 이용자의 정상적 서비스의 이용을 위하여 필요한 범위 내의 데이터, 법령상 회사의 보관 의무가 있는 데이터는 삭제되지 않습니다.</div></li>
						</ol>											

						<h2>제 21조(면책사항 및 손해배상)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>회사는 이용자가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해 등에 관하여 책임을 지지 않으며, 이용자가 본 플랫폼에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 대하여 책임을 지지 않습니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사는 이용자간 또는 이용자와 제3자간에 서비스를 매개로 하여 물품거래, 금전거래 등과 관련하여 어떠한 책임도 부담하지 않습니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>회사는 국가의 비상사태, 천재지변, 정전, 당 사이트의 관리 범위 외의 서비스 설비 장애, 서비스 이용량의 폭주 기타 서비스 장애 등으로 정상적인 서비스를 제공하지 못하여 생기는 손해 등에 대하여 책임을 지지 않습니다.</div></li>
							<li><span className='num'>4.</span><div className='desc'>회사는 회사의 고의, 과실이 없는 한 이용자 상호간 또는 이용자와 제3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해 배상 책임을 지지 않습니다.</div></li>
							<li><span className='num'>5.</span><div className='desc'>이용자가 본 약관의 규정 또는 관련 법령을 위반하여 회사에 손해가 발생한 경우 회사는 이용자에 대하여 손해배상을 청구할 수 있습니다. 이 경우 이용자는 고의, 과실이 없음을 입증하여야 하며, 입증하지 못하는 경우 책임을 면할 수 없습니다.</div></li>
							<li><span className='num'>6.</span><div className='desc'>회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 그 손해 또는 손실에 대해 책임을 지지 않습니다.	</div></li>
						</ol>											

						<h2>제 22조(준거법 및 재판권)</h2>
						<ol className='num-list'>
							<li><span className='num'>1.</span><div className='desc'>본 약관은 대한민국법령에 의하여 규정되고 이행됩니다.</div></li>
							<li><span className='num'>2.</span><div className='desc'>회사와 이용자는 분쟁이 발생할 경우 이의 해결을 위해 성실히 협의하여야 합니다.</div></li>
							<li><span className='num'>3.</span><div className='desc'>협의에도 불구하고 분쟁이 해소되지 않으면 이에 관한 제소 관할 법원은 회사의 주소를 근거로 합니다	</div></li>
						</ol>											

						<h2>부칙</h2>
						<div className="text">본 약관은 2024년 00년 00일부터 시행합니다.</div>
						
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
