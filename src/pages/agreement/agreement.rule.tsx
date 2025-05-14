/** @jsxImportSource react */
import { Button } from '@/entities'
import { AGREE_TERM, globalStore, isEmptyArray } from '@/shared'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const params = useParams()

	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '',
		})
	}, [])

	const termArray: Array<AgreeTerm> = AGREE_TERM.filter((v: AgreeTerm) => v.value.toString() === params?.id)
	const term: AgreeTerm | boolean = !isEmptyArray(termArray) && termArray[0]

	useEffect(() => {
		if (term) {
			setHeader({
				type: 'sub',
				back: true,
				title: term.title,
			})
		}
	}, [term])

	if (!term) {
		return <></>
	}

	return (
		<>
			{params?.id === '1' && (
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

							<h2>제 1조(목적)</h2>
							<div className='text'>
								본 약관은 이노뎁(주)(이하 회사)이 운영하는 인터넷 및 모바일 플랫폼인 우리아이AI(이하 플랫폼)를 통해 제공하는 서비스 및 플랫폼에 부속하는 서비스의 이용조건과 절차, 이용자와 회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
							</div>

							<h2>제 2조(용어의 정의)</h2>
							<div className='text'>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>플랫폼이란 회사가 운영하는 어린이집과 이용자 간 소통을 할 수 있는 인터넷, 모바일 애플리케이션(이하 앱)을 뜻합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>서비스란 회사가 운영하는 우리아이AI를 통해서 제공하는 모든 기능 및 서비스와 인공지능 분석을 통해 파생된 서비스를 포함합니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>AI서비스란 인공지능 기술을 사용하여 본 플랫폼에서 제공하는 모든 기능 및 서비스를 말합니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>이용자란 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 말합니다.</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>회원이란 서비스를 이용하기 위하여 회원약관 및 필수 동의 문서에 동의하고, 우리아이AI 플랫폼에 회원 가입을 완료한 개인 및 시설의 장을 말합니다.</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>시설이란 우리아이AI 플랫폼을 사용하는 어린이집을 뜻합니다.</div>
								</li>
								<li>
									<span className='num'>7.</span>
									<div className='desc'>시설 관계자란 우리아이AI플랫폼을 사용하는 어린이집의 원장선생님, 선생님 등의 시설 관리 관계자를 뜻합니다.</div>
								</li>
								<li>
									<span className='num'>8.</span>
									<div className='desc'>시설 이용자란 시설 관계자를 포함하여 우리아이AI플랫폼을 이용하는 어린이집의 등록 및 등록 예정 아동 및 아동과 관계되어 어린이집을 방문하는 이용자를 뜻합니다. </div>
								</li>
							</ol>

							<h2>제 3조(약관의 게시 및 효력과 개정)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>회사는 본 약관의 내용을 이용자 또는 회원이 쉽게 알 수 있도록 플랫폼을 통해 게시합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>본 약관은 플랫폼에서 제공하는 서비스를 이용하는 모든 약관에 동의한 이용자에 대하여 그 효력을 발생합니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>본 약관의 내용은 서비스의 일부 화면 또는 기타 방법에 의하여 이를 공지하거나 그 내용을 전자우편 등의 방법으로 통지함으로써 효력이 발생합니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 개인정보 보호법 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>
										회사가 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행약관과 함께 개정약관의 적용일자 최소 일주일 전 플랫폼에 공지합니다. 단, 회원에게 불리한 약관 개정의 경우 최소 30일 전 플랫폼에 공지하며 공지 외에 전자우편, SMS 등의 방법을 통해
										명확히 통지합니다.
									</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>
										회사가 전항에 따라 약관개정을 공지 또는 통지하면서, 회원이 개정 약관 변경 적용일까지 거부 의사를 표시하지 않을 경우, 약관 개정에 동의한 것으로 간주한다는 내용을 함께 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 않은
										경우에는 회원이 개정약관에 동의한 것으로 간주합니다.
									</div>
								</li>
								<li>
									<span className='num'>7.</span>
									<div className='desc'>
										회원이 개정 약관의 적용에 동의하지 않는 경우 회사는 개정약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사도 이용 계약을 해지할 수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>8.</span>
									<div className='desc'>
										이 약관에 동의하는 것은 정기적으로 회사가 운영하는 플랫폼에 방문하여 약관의 변경 사항을 확인하는 것에 동의하는 것을 의미합니다. 회사가 본 약관에 따라 변경 고지 의무를 다하였음에도 회원이 변경된 약관에 대한 정보를 알지 못하여 발생하는 피해에
										대하여 회사는 책임을 부담하지 않습니다.
									</div>
								</li>
							</ol>

							<h2>제 4조(약관 외 준칙)</h2>
							<div className='text'>
								본 약관에 명시되지 않은 사항은 신의성실의 원칙에 따라 회원과 회사의 합의에 의해 결정할 수 있으며, 합의가 되지 않은 사항은 개인정보보호에 관한 법률, 전기통신 기본법, 전기통신 사업법, 정보통신 윤리위원회 심의규정, 정보통신 윤리강령, 정보통신망
								이용촉진 및 정보보호 등에 관한 법률 및 기타 관계 법령과 일반 거래 관행에 따릅니다.
							</div>

							<h2>제 5조(회원가입)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										회원가입은 신청자가 플랫폼을 통해 소정의 가입신청 양식에서 요구하는 사항을 기입하고 본 약관 및 개인정보수집 및 이용동의서 등 회원의 동의가 필요한 사항에 대해 동의한다는 의사표시를 하고 회사가 이를 승낙하여 회원가입이 완료됩니다.
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>회원은 회원가입 시 등록한 사항에 변경이 있는 경우 상당한 기간 이내에 회사에 회원정보 수정 등의 방법으로 그 변경사항을 알려야 하며, 변경된 회원정보를 회사에 알리지 않아 발생하는 손해에 대한 책임은 이용자에게 있습니다.</div>
								</li>
							</ol>

							<h2>제 6조(회원가입의 제한)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										회사는 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>다른 사람의 명의나 이메일 등 타인의 개인정보를 사용하여 신청한 경우</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>회원가입 신청서의 내용을 허위로 기재하였거나 신청한 경우</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>사회의 안녕, 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우</div>
											</li>
											<li>
												<span className='num'>d.</span>
												<div className='desc'>다른 사람의 플랫폼 이용을 방해하거나 그 정보를 도용하는 등의 행위를 한 경우</div>
											</li>
											<li>
												<span className='num'>e.</span>
												<div className='desc'>플랫폼을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우</div>
											</li>
											<li>
												<span className='num'>f.</span>
												<div className='desc'>기타 플랫폼이 정한 이용신청요건이 미비된 경우</div>
											</li>
										</ol>
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										회사는 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>서비스 관련 제반 용량이 부족한 경우</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>기술상 장애 사유가 있는 경우</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>기타 회사의 재정적, 기술적으로 필요하다고 인정하는 경우</div>
											</li>
										</ol>
									</div>
								</li>
							</ol>

							<h2>제 7조(이용자의 정보보안)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>이용자는 플랫폼 서비스 가입 절차를 완료하는 순간부터 입력한 정보의 비밀을 유지할 책임이 있으며 본인 인증을 통하여 발생하는 모든 결과에 대한 책임은 이용자 본인에게 있습니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>이용자는 자신의 아이디 및 비밀번호에 관한 관리 책임이 있으며 제 3자가 이용하게 해서는 안됩니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>
										이용자가 자신의 아이디 및 비밀번호를 도난당하거나 제 3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내 또는 조치가 있는 경우에는 이에 따라야 하며, 회사의 안내 또는 조치를 따르지 않아 발생하는 손해에 대하여 회사는 책임을
										부담하지 않습니다.
									</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>
										이용자는 플랫폼 서비스를 개인의 보안이 유지되는 기기에서 사용하거나, 사용 종료 시마다 정확히 접속을 종료하여 제 3자가 이용자에 관한 정보를 습득하거나 이용할 수 없도록 관리해야 합니다. 이를 관리하지 않아 발생하는 손해 및 손실에 대하여 회사는
										책임을 지지 않습니다.{' '}
									</div>
								</li>
							</ol>

							<h2>제 8조(개인정보보호)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>회사는 서비스 제공을 위하여 이용자의 개인정보를 수집할 수 있으며, 이 경우 필요한 최소한의 범위 내에서 개인정보를 수집합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>회사는 이용자의 개인정보 보호를 위하여 ‘개인정보처리방침’을 수립하고, ‘개인정보처리방침’ 및 개인정보 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령에 따라 개인정보를 보호하기 위해 노력합니다.</div>
								</li>
							</ol>

							<h2>제 9조(서비스의 종류 및 이용 방법)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										본 플랫폼에서 제공하는 서비스는 아래와 같습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>회사가 자체 개발하거나 다른 기관과의 협의 등을 통해 본 플랫폼에서 제공하는 일체의 서비스</div>
											</li>
										</ol>
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>제 1항에 의한 서비스 중 일부에 대하여서는, 해당 서비스 및 해당 서비스의 파생 서비스에 대해 서비스의 원활한 제공 및 이용을 위한 개별 약관 혹은 이용계약 등의 방법을 거쳐야 이용할 수 있습니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>
										본 플랫폼의 서비스는 무료 제공함을 원칙으로 하나, 플랫폼 서비스에 포함된 일부 서비스의 경우 유료 서비스로 제공할 수 있습니다. 또한 무료로 제공되는 서비스라 할지라도 지속적이고 원활한 서비스의 제공을 위해 유료 서비스로 전환될 수 있습니다.{' '}
									</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>유료 서비스의 이용 및 회사에서 서비스에 따른 용역을 제공할 경우, 별도의 이용계약을 체결하고, 체결한 이용계약에 의한 규정에 따릅니다.</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>
										본 플랫폼의 서비스 중 일부는 서비스의 원활한 제공 및 정보 보호 등의 이유로 테스트 기간을 두고 베타서비스로 제공할 수 있으며, 테스트 기간동안 회사는 특정 분류 고객의 서비스 제공 등 서비스를 제한적으로 제공할 수 있습니다. 또한 베타서비스의
										결과로 회사에서 서비스의 제공이 부적절하다고 판단될 경우 테스트 기간 이후 서비스를 중단할 수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>
										본 플랫폼의 서비스 중, CCTV 등의 장비 사용과 장비를 통한 영상 분석 및 알림 서비스 및 AI서비스를 사용한 시설 이용자의 사진 분석과 선생님정보, 반정보, 아동정보 , 출결정보 등의 시설 관련자의 개인정보를 사용한 분류 서비스 등의 개인정보 및
										민감정보가 포함된 모든 서비스를 이용하기 위해서는, 플랫폼 서비스를 이용하는 시설의 모든 이용자에게 민감정보처리에 대한 동의를 필요로 하며, 민감정보처리에 대한 동의의 수집 책임은 시설에 있습니다.
									</div>
								</li>
							</ol>

							<h2>제 10조(이용계약의 해지)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>본 약관의 제 9조 제 3항에 따른 이용계약은 플랫폼의 이용해지와는 별도로 각 계약에 관하여 해지를 신청하여야 합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>일부 유료 서비스의 경우 이용계약의 해지시 계약 조항에 따라 위약금 및 장비 철거 등의 비용이 별도로 발생할 수 있습니다.</div>
								</li>
							</ol>

							<h2>제 11조(서비스의 변경)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>회사는 지속적이고 원활한 서비스의 제공에 필요한 경우 서비스의 내용 및 비용을 변경할 수 있습니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										이때 회사는 회원에게 불리하다고 판단되는 경우, 서비스의 변경 일자, 변경 내용을 법령이 정하는 최소한의 기간 이상 서비스 화면의 일부 또는 기타방법을 통해 플랫폼 이용자에게 공지하며, 관련 서비스를 이용 중인 이용자에게는 전자우편, SMS, 푸시알림
										등의 방법을 사용하여 적극적으로 서비스의 변경을 고지합니다.
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>회사가 회원의 권리를 위해 제 2항의 방법으로 고지에 대한 노력을 다하였음에도 불구하고, 회원이 정보 변경을 알리지 않거나, 회원이 고지 내용을 확인하지 않아 발생한 손해에 대하여서는 회사는 책임지지 않습니다.</div>
								</li>
							</ol>

							<h2>제 12조(서비스의 이용시간)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										서비스의 이용은 본 플랫폼의 업무상 또는 기술상 특별한 지장이 없는 한, 연중무휴, 1일 24시간 제공하는 것을 원칙으로 합니다. 다만, 플랫폼이나 관계사의 서비스의 정기점검 등의 서비스 점검 및 조치 등을 위하여 필요로 하는 시간은 그러하지 않습니다.
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>본 플랫폼은 서비스별로 이용할 수 있는 시간을 별도로 정할 수 있으며, 필요한 경우 이를 조정할 수 있습니다.</div>
								</li>
							</ol>

							<h2>제 13조(서비스의 중단)</h2>
							<div className='text'>회사는 서비스의 제공과 관련한 아래의 사항 발생 시 서비스의 전부 또는 일부를 중단 할 수 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>회사의 정책 변경, 서비스의 유지보수 등을 포함한 기술적 사양의 변경 필요성이 있는 경우 </div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>정전, 제반 설비의 장애 또는 이용량의 증가 등으로 정상적인 서비스 이용에 지장이 있는 경우</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>관계사와의 계약 종료, 정부의 명령이나 규제 등의 회사의 제반 사정으로 서비스의 전부 또는 일부를 유지할 수 없는 경우</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</div>
								</li>
							</ol>
							<div className='text'>
								서비스의 전부 또는 일부 중단이 발생할 경우, 회사는 중단되는 서비스의 내용 및 중단 기간을 최소 1주일 전 플랫폼 서비스 일부 화면 공지 및 기타 방법으로 사전에 공지하며, 서비스의 중단이 이용자에게 중대한 영향을 미치는 경우, 전자우편 또는 SMS 등의
								방법으로 개별적으로 공지합니다. 다만, 회사가 예측할 수 없거나 통제할 수 없는 사유로 인해 사전 공지 또는 통지가 불가능한 경우, 사전 공지 또는 통지 기간의 단축 및 사후 공지할 수 있습니다.
							</div>

							<h2>제 14조(서비스의 이용상의 책임)</h2>
							<div className='text'>이용자는 본 플랫폼 이용 시 아래와 같은 행위를 금지하고 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>본 플랫폼의 서비스를 이용하여 상품이나 서비스를 판매하거나 고객을 유인하는 영업활동</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>해킹, 광고를 통한 수익, 음란사이트를 통한 상업적 행위</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>상용 프로그램 및 영상, 이미지 등 게시물의 저작권이 게시자에게 있지 아니한 온라인 콘텐츠를 무료 배포하는 행위</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도 증여 및 담보로 제공하는 행위</div>
								</li>
							</ol>
							<div className='text'>이를 어기고 발생한 결과 및 손실, 관계기관에 의한 수사 및 처벌 등 법적조치 등에 관해서는 회사가 책임지지 않으며, 회사는 서비스 이용을 제한할 수 있습니다.</div>

							<h2>제 15조(서비스의 이용제한 등)</h2>
							<div className='text'>회사는 이용자가 다음 각 호에 해당하는 경우 사전통지 없이 이용계약의 해지 또는 서비스 제공을 중지하거나 관계 당국에 고발하는 등의 필요한 조치를 취할 수 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>상용 또는 불법, 음란, 저속하다고 판단되는 게시물, 타인의 사생활 침해 기타 공공질서 및 미풍양속에 위반되는 내용인 경우</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>다른 이용자, 제3자를 비방, 모욕하거나 명예를 훼손하는 내용인 경우</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>국익 또는 사회적 공익을 저해하는 경우</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 경우</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>회사 및 제3자의 지적재산권, 기타 권리를 침해하는 내용인 경우</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>타인의 개인정보, 아이디(ID)와 비밀번호 및 공동인증서 등의 정보를 부정 사용하거나 이를 무단수집 또는 저장하는 경우</div>
								</li>
								<li>
									<span className='num'>7.</span>
									<div className='desc'>다량의 정보 전송, 광고성 정보의 전송, 컴퓨터 바이러스 프로그램의 유포 등 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 경우</div>
								</li>
								<li>
									<span className='num'>8.</span>
									<div className='desc'>정보통신윤리위원회 등 외부기관의 시정 요구가 있거나 선거관리위원회의 중지, 경고 또는 시정명령을 받는 선거법 위반행위가 있는 경우</div>
								</li>
								<li>
									<span className='num'>9.</span>
									<div className='desc'>본 약관 및 플랫폼의 운영기준, 기타 관계 법령 등에 위배되는 경우</div>
								</li>
							</ol>

							<h2>제 16조(게시물의 저작권 및 책임)</h2>
							<div className='text'>
								회사가 작성한 저작물에 대한 저작권 및 기타 지식재산권의 일체는 회사에 귀속됩니다.
								<br />
								이용자는 회사에게 지식재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로 이용하거나 제 3자가 이용하게 하여서는 안됩니다.
								<br />본 플랫폼의 서비스 중 이용자가 작성한 저작물의 경우 해당 저작물의 저작권 및 기타 지식재산권의 일체는 이를 작성한 이용자에게 귀속됩니다.
								<br />본 약관에서 회사에 부여된 권리를 제외하고 이용자는 이용자가 작성한 저작물에 대한 모든 권리를 보유하며 회사는 이용자의 동의없이 이용자가 작성한 저작물을 공개, 수정, 삭제 할 수 없습니다.
								<br />
								다만 다음 각 호의 경우 이용자가 저작물을 게시할 경우, 이용자가 작성한 저작물에 관해 회사 및 본 약관이 정하는 대상에 관하여 해당 권한을 부여하는 것에 동의한 것으로 간주합니다.
							</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										이용자가 투약의뢰서, 귀가동의서, 출석관리, 알림장, 앨범과 같이 특수 목적으로 제공하여야 하는 저작물을 작성한 경우 이 저작물에 관해 이를 수정, 격리, 삭제할 수 있는 권리를 포함하여 복제권, 공연권, 공중송신권, 전시권, 배포권, 대여권,
										2차적저작물작성권 등 저작재산권 일체에 대한 권리를 회사와 서비스 계약 및 이용상 관계가 있는 동일 시설 이용자 혹은 서비스 계약 및 이용상 관계가 있는 제 3자에게 부여합니다.
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>이용자가 공유를 목적으로 배포한 저작물 또는 이용자의 동의를 얻은 저작물에 한해서는 회사는 이용자의 저작물을 이용, 전시, 배포 및 수정할 수 있습니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>
										제 2항과 관련하여 회사는 서비스 내에서 이를 노출할 필요가 있는 경우 혹은 서비스의 개선 등을 위해 필요한 최소 범위에서만 저작권법 등 관련 법령의 제한에 따라 이용하며, 부득이 이러한 범위를 넘어 이용자의 저작물을 이용하고자 할 경우 사전에 이용
										목적에 관해 이용자의 동의를 얻어 이용합니다.
									</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>
										이용자의 저작물이 법령에 위반되는 내용을 포함하는 경우 혹은 관계 시설 및 이용자에게 부당한 불이익을 초래할 수 있다고 판단되는 경우 회사 및 시설의 관리자는 해당 저작물의 게시 중단 및 삭제 등을 요청할 수 있으며, 관련 법령에 따라 조치를 취할
										수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>
										동일 시설 이용자의 회원이 알림장, 공지, 앨범 등 특정 목적이 있는 저작물을 게시할 시 회원 및 회원 아동의 얼굴 및 기타 사회통념상 특정인임을 식별 할 수 있는 신체적 특징이 촬영 또는 그림으로 묘사되거나 공표될 수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>
										제 5항과 관련하여 해당 저작물에 포함된 초상권 권리자 모두의 동의를 얻어야 하며, 이를 위반함으로 인해 발생할 수 있는 법적 책임은 위반한 해당 회원에게 귀속되고, 회사와 시설 관계자는 이에 대한 법적 책임을 부담하지 않습니다.
									</div>
								</li>
							</ol>
							<div className='text'>회사는 시설 관계자의 요청이 없는 경우라도 다음 각호의 경우에는 사전통지 없이 해당 저작물에 대해 삭제 또는 격리와 같은 임시조치를 취할 수 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>법령을 위반하거나 범죄 행위에 결부된다고 인정되는 경우</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>회사 또는 제 3자의 권리를 침해한다고 인정될 만한 사유가 있는 경우</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>주민등록번호, 장애인등록정보, 운전면허 정보 등 서비스 이용과 관계없는 개인의 민감정보가 포함된 경우</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>기타 회사의 정책에 위반되는 경우</div>
								</li>
							</ol>

							<h2>제 17조(회사의 의무)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>회사는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적, 안정적으로 서비스를 제공하기 위해 노력할 의무가 있습니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										회사는 이용자의 개인정보를 본인의 승낙없이 타인에게 누설, 배포하지 않습니다. 다만 전기통신 관련 법령 등 관계 법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 않으며, 본 플랫폼과 회사가 운영하는 다른 서비스의 회원정보
										통합관리와 관련하여 필요한 경우에는 개인정보 등 관련정보를 회사가 운영하는 다른 서비스에 제공할 수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안시스템을 갖추어야 합니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</div>
								</li>
							</ol>

							<h2>제 18조(이용자의 의무)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										이용자는 서비스의 이용 및 가입시에 요구되는 정보를 정확하게 기입하여야 하며, 이미 제공된 정보는 정확한 정보가 되도록 유지, 갱신하여야 합니다. 만일, 해당 정보를 정확히 기입하지 않거나 이미 제공된 정보를 유지, 갱신하지 않아 발생하는 문제에
										대한 책임은 본인에게 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										이용자는 서비스를 이용할 때 다음 각 호의 행위를 해서는 안 되며, 이로 인하여 문제가 발생될 경우 그 책임은 본인에게 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>타인의 개인정보, 아이디(ID)와 비밀번호 등의 정보를 부정 사용하는 행위</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>자기의 개인정보, 아이디(ID)와 비밀번호 등의 정보를 타인에게 이용하게 하는 행위</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</div>
											</li>
											<li>
												<span className='num'>d.</span>
												<div className='desc'>선량한 풍속, 기타 사회질서를 해하는 행위</div>
											</li>
											<li>
												<span className='num'>e.</span>
												<div className='desc'>타인의 명예를 훼손하거나 모욕하는 행위</div>
											</li>
											<li>
												<span className='num'>f.</span>
												<div className='desc'>타인의 지적재산권 등의 권리를 침해하는 행위</div>
											</li>
											<li>
												<span className='num'>g.</span>
												<div className='desc'>해킹행위 또는 컴퓨터바이러스의 유포행위</div>
											</li>
											<li>
												<span className='num'>h.</span>
												<div className='desc'>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</div>
											</li>
											<li>
												<span className='num'>i.</span>
												<div className='desc'>서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위</div>
											</li>
											<li>
												<span className='num'>j.</span>
												<div className='desc'>본 플랫폼에 게시된 정보를 동의없이 변경 및 유포하는 행위</div>
											</li>
											<li>
												<span className='num'>k.</span>
												<div className='desc'>본 약관 및 본 플랫폼의 운영기준, 기타 관계 법령 등에 위배되는 행위</div>
											</li>
										</ol>
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>이용자는 본 약관에서 규정하는 사항과 서비스 이용안내, 공지사항 또는 주의사항을 준수하여야 합니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>이용자는 본 플랫폼의 서비스를 이용하여 얻은 정보를 회사의 사전승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.</div>
								</li>
							</ol>

							<h2>제 19조(이용제한)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										회사는 이용자가 본 약관 및 회사가 서비스의 운영을 위하여 정하는 정책에 따른 의무를 위반하거나 서비스의 정상적인 운영을 방해하거나 다음 각 호에 해당하는 경우, 사전통보 후 경고, 일시정지, 영구이용정지, 회원자격 상실 등으로 서비스 이용을
										제한할 수 있습니다. 회사가 사전통보 후 경고, 일시정지의 조치를 취하였음에도 동일 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 않는 경우 회사는 영구이용정지, 회원자격 상실 등의 조치를 취할 수 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>가입 신청 시에 허위 내용을 등록한 경우</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>다른 사람의 서비스 이용을 방해하거나 정보를 도용하는 경우</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>서비스를 이용하여 법령 또는 본 약관이 금지하거나 공공의 질서에 반하는 행위를 하는 경우</div>
											</li>
											<li>
												<span className='num'>d.</span>
												<div className='desc'>회사의 운영과 관련하여 근거 없는 사실 또는 허위의 사실을 적시하거나 유포하여 회사, 서비스의 명예를 실추시키거나 회사, 서비스의 신뢰성을 해하는 경우</div>
											</li>
											<li>
												<span className='num'>e.</span>
												<div className='desc'>서비스의 이용과정에서 담당직원에게 폭언, 협박 또는 음란한 언행 등으로 서비스의 운영을 방해하는 경우</div>
											</li>
										</ol>
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										회사는 주민등록법을 위반한 명의도용 및 결제도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는
										즉시 영구이용정지를 하거나 이용계약을 해지할 수 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>본 조에 따른 이용제한 제재를 받은 이용자가 이의를 제기하고자 할 경우 회사의 고객센터에 문의할 수 있습니다.</div>
								</li>
							</ol>

							<h2>제 20조(회원탈퇴)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>이용자가 서비스의 이용을 더 이상 원하지 않을 경우 언제든지 본인이 플랫폼의 회원 탈퇴 과정을 거처 회원탈퇴를 할 수 있습니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										회사는 이용자가 이용계약의 해지를 신청한 경우 관련 법령에 따라 이용자의 정보를 일정 기간 보유하여야 하는 경우를 제외하고는 해지 즉시 이용자가 등록한 정보 및 게시물 등의 데이터를 삭제합니다. 다만 다른 이용자의 정상적 서비스의 이용을 위하여
										필요한 범위 내의 데이터, 법령상 회사의 보관 의무가 있는 데이터는 삭제되지 않습니다.
									</div>
								</li>
							</ol>

							<h2>제 21조(면책사항 및 손해배상)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										회사는 이용자가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해 등에 관하여 책임을 지지 않으며, 이용자가 본 플랫폼에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 대하여 책임을 지지 않습니다.
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>회사는 이용자간 또는 이용자와 제3자간에 서비스를 매개로 하여 물품거래, 금전거래 등과 관련하여 어떠한 책임도 부담하지 않습니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>회사는 국가의 비상사태, 천재지변, 정전, 당 사이트의 관리 범위 외의 서비스 설비 장애, 서비스 이용량의 폭주 기타 서비스 장애 등으로 정상적인 서비스를 제공하지 못하여 생기는 손해 등에 대하여 책임을 지지 않습니다.</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>회사는 회사의 고의, 과실이 없는 한 이용자 상호간 또는 이용자와 제3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해 배상 책임을 지지 않습니다.</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>
										이용자가 본 약관의 규정 또는 관련 법령을 위반하여 회사에 손해가 발생한 경우 회사는 이용자에 대하여 손해배상을 청구할 수 있습니다. 이 경우 이용자는 고의, 과실이 없음을 입증하여야 하며, 입증하지 못하는 경우 책임을 면할 수 없습니다.
									</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 그 손해 또는 손실에 대해 책임을 지지 않습니다. </div>
								</li>
							</ol>

							<h2>제 22조(준거법 및 재판권)</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>본 약관은 대한민국법령에 의하여 규정되고 이행됩니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>회사와 이용자는 분쟁이 발생할 경우 이의 해결을 위해 성실히 협의하여야 합니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>협의에도 불구하고 분쟁이 해소되지 않으면 이에 관한 제소 관할 법원은 회사의 주소를 근거로 합니다 </div>
								</li>
							</ol>

							<h2>부칙</h2>
							<div className='text'>본 약관은 2024년 00년 00일부터 시행합니다.</div>
						</section>
					</div>
				</Contents>
			)}
			{params?.id === '2' && (
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

							<div className='text'>이노뎁㈜은 개인정보보호법 제30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 우리아이AI 서비스 이용자의 개인정보 처리 방침을 수립합니다.</div>

							<h2>제 1조 개인정보의 수집항목 및 개인정보의 처리 및 보유 기간 등</h2>
							<div className='text'>
								수집 및 이용하는 개인정보는 아래와 같습니다.
								<br />
								이용자는 동의를 거부할 수 있으나, 필수 동의정보 거부 시 서비스 이용이 제한됩니다.
							</div>
							<div className='rule-table'>
								<table>
									<colgroup>
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
									</colgroup>
									<thead>
										<tr>
											<th>이용목적</th>
											<th>수집목적</th>
											<th>수집항목</th>
											<th>보유 및 이용기간</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>회원가입</td>
											<td>
												<ul className='dot'>
													<li>회원가입의사확인</li>
													<li>본인 식별 및 인증</li>
													<li>회원자격 유지 및 관리</li>
													<li>서비스 부정이용 방지</li>
													<li>각종 고지 및 고충처리</li>
												</ul>
											</td>
											<td>
												아이디
												<br />
												비밀번호
												<br />
												휴대폰번호
											</td>
											<td rowSpan={6}>
												<span className='line'>회원탈퇴시까지</span>
												<br />
												<br />
												단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
											</td>
										</tr>
										<tr>
											<td>원장님, 선생님 속성 등록</td>
											<td>시설 관계자의 등록</td>
											<td>
												호칭
												<br />
												[선택]프로필사진
												<br />
												휴대폰번호
											</td>
										</tr>
										<tr>
											<td>학부모 속성 등록</td>
											<td>자녀 정보 등록 및 서비스 제공</td>
											<td>
												아동명
												<br />
												사진
												<br />
												학부모 휴대폰번호
											</td>
										</tr>
										<tr>
											<td>원정보 등록</td>
											<td>원 정보 확인</td>
											<td>원장님 호칭</td>
										</tr>
										<tr>
											<td>선생님 정보 등록</td>
											<td>원 내 선생님 정보 확인</td>
											<td>
												선생님 성명
												<br />
												선생님 휴대폰번호
											</td>
										</tr>
										<tr>
											<td>반정보 등록</td>
											<td>원 내 반의 선생님 정보 확인</td>
											<td>
												성명
												<br />
												휴대폰번호
											</td>
										</tr>
										<tr>
											<td>아동정보 등록</td>
											<td>원 내 자녀 관리를 위한 정보 확인</td>
											<td>
												아동명
												<br />
												사진
											</td>
											<td>
												<span className='line'>영유아보육법</span>
												<br />
												<br />
												공공기록물 관리에 관한 법률 기준에 따라 기관 퇴소 후 5년 간 보관
											</td>
										</tr>
										<tr>
											<td>알림장</td>
											<td>학부모에게 자녀의 원 활동 정보 제공</td>
											<td>
												아동명 <br />
												사진{' '}
											</td>
											<td rowSpan={3}>
												<span className='line'>회원탈퇴시까지</span>
												<br />
												<br />
												단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
											</td>
										</tr>
										<tr>
											<td>앨범</td>
											<td>학부모에게 자녀의 원 활동 정보 제공</td>
											<td>
												아동명 <br />
												사진 및 영상{' '}
											</td>
										</tr>
										<tr>
											<td>일반 공지</td>
											<td>학부모에게 원관련 알림 정보 제공</td>
											<td>
												아동명 <br />
												사진{' '}
											</td>
										</tr>
										<tr>
											<td>의무 공지</td>
											<td>학부모에게 원의 의무 알림 공지 정보 제공</td>
											<td>
												아동명 <br />
												생년월일{' '}
											</td>
											<td rowSpan={2}>
												<span className='line'>영유아보육법 </span>
												<br />
												<br />
												공공기록물 관리에 관한 법률 기준에 따라 기관 퇴소 후 5년 간 보관
											</td>
										</tr>
										<tr>
											<td>출결</td>
											<td>아동의 출결 기록 관리</td>
											<td>
												아동명
												<br />
												사진
												<br />
												전자출결 태그 정보
												<br />
												해당 출결일의 출결정보
												<br />
												등원 시간
												<br />
												하원 시간
											</td>
										</tr>

										<tr>
											<td>투약의뢰서</td>
											<td>아동의 투약 정보를 시설에 전달하여 적절한 투약 정보 공유</td>
											<td>아동명</td>
											<td rowSpan={3}>
												<span className='line'>회원탈퇴시까지</span>
												<br />
												<br />
												단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
											</td>
										</tr>
										<tr>
											<td>귀가동의서</td>
											<td>아동의 귀가 방법에 대한 정보를 시설에 전달하여 안전한 귀가 정보 공유</td>
											<td>
												보호자와 아동과의 관계 <br />
												보호자의 휴대폰 번호{' '}
											</td>
										</tr>
										<tr>
											<td>BI리포트</td>
											<td>아동의 행동을 추적 분석하여 보육 환경 개선 활용</td>
											<td>아동명</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h2>제 2조 민감정보의 수집항목 및 민감정보의 처리 및 보유 기간 등</h2>
							<div className='text'>
								수집 및 이용하는 개인정보는 아래와 같습니다.
								<br />
								이용자는 동의를 거부할 수 있으나, 필수 동의 정보의 거부시 서비스 이용이 제한됩니다.
							</div>
							<div className='rule-table'>
								<table>
									<colgroup>
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
									</colgroup>
									<thead>
										<tr>
											<th>이용목적</th>
											<th>수집목적</th>
											<th>수집항목</th>
											<th>보유 및 이용기간</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>투약의뢰서</td>
											<td>아동의 투약 정보를 시설에 전달하여 적절한 투약 정보 공유</td>
											<td>아동의 건강 정보 (증상, 복용약의 종류/용량/횟수/시간)</td>
											<td rowSpan={2}>
												<span className='line'>회원탈퇴시까지</span>
												<br />
												<br />
												단, 법정 의무 보유기간에 따라 추가 보관
											</td>
										</tr>
										<tr>
											<td>알림장</td>
											<td>아동의 행동 기록</td>
											<td>
												자녀 행동 정보 <br />
												AI 아동 행동 분석 정보{' '}
											</td>
										</tr>
										<tr>
											<td>의무 공지</td>
											<td>학부모에게 원의 의무 알림 공지 정보</td>
											<td>아동의 건강 정보 (건강 검진 일자)</td>
											<td>
												<span className='line'>영유아보육법</span>
												<br />
												<br />
												공공기록물 관리에 관한 법률 기준에 따라 기관 퇴소 후 5년 간 보관
											</td>
										</tr>
										<tr>
											<td>위험알림</td>
											<td>아동 위험관리</td>
											<td>아동의 식별 영상 위험상황 분석 영상 및 영상 캡쳐</td>
											<td rowSpan={2}>
												<span className='line'>회원 탈퇴 시까지</span>
											</td>
										</tr>
										<tr>
											<td>BI리포트</td>
											<td>아동의 행동을 추적 분석하여 보육 환경 개선 활용</td>
											<td>아동의 식별 영상 AI 아동 행동 분석 데이터 </td>
										</tr>
									</tbody>
								</table>
							</div>

							<h2>제 3조 개인정보 제 3자 제공</h2>
							<div className='text'>이노뎁㈜은 이용자의 사전 동의 없이 개인정보를 제 3자에게 제공하지 않습니다. 다만, 이용자가 외부 제휴사 등의 서비스를 이용하기 위하여 필요한 범위 내에서 이용자의 동의를 얻은 후에 개인정보를 제 3자에게 제공하고 있습니다.</div>
							<div className='rule-table'>
								<table>
									<colgroup>
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
									</colgroup>
									<thead>
										<tr>
											<th>제공받는자</th>
											<th>이용목적</th>
											<th>제공항목</th>
											<th>보유 및 이용기간</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Google</td>
											<td>사용자의 이용 분석 및 서비스 개선</td>
											<td>
												기기정보
												<br />
												쿠키정보
												<br />
												사용자연령
												<br />
												사용자 성별
												<br />
												사용자 관심사
												<br />
												서비스 페이지 사용 정보
												<br />
												서비스 페이지 체류 시간
											</td>
											<td>
												<span className='line'>회원탈퇴 혹은 서비스 해지시까지</span>
											</td>
										</tr>
										<tr>
											<td>알리고</td>
											<td>사용자의 휴대폰점유인증 및 정보 알림</td>
											<td>휴대폰번호</td>
											<td>이용 목적 달성 시까지</td>
										</tr>
										<tr>
											<td>(주)웰티즌</td>
											<td>아동 전자출결 정보 연동</td>
											<td>아동 고유 ID</td>
											<td>이용 목적 달성 시까지</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h2>제 4조 정보주체와 법정대리인의 권리 의무 및 행사방법</h2>
							<div className='text'>정보주체는 이노뎁㈜에 대해 언제든지 다음과 같은 권리를 행사할 수 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										개인정보 열람 요구 :「개인정보보호법」제35조(개인정보의 열람)에 따라 열람을 요구할 수 있습니다. 단, 아래에 해당하는 경우에는 법 제35조 4항에 의하여 열람 요구를 거절할 수 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>법률에 따라 열람이 금지되거나 제한되는 경우</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>
													공공기관이 다음 각 목의 어느 하나에 해당하는 업무를 수행할 때 중대한 지장을 초래하는 경우
													<ol className='num-list'>
														<li>
															<span className='num'>ⅰ.</span>
															<div className='desc'>조세의 부과·징수 또는 환급에 관한 업무</div>
														</li>
														<li>
															<span className='num'>ⅱ.</span>
															<div className='desc'>학력·기능 및 채용에 관한 시험, 자격심사에 관한 업무</div>
														</li>
														<li>
															<span className='num'>ⅲ.</span>
															<div className='desc'>보상금·급부금 산정 등에 대하여 진행 중인 평가 또는 판단에 관한 업무</div>
														</li>
														<li>
															<span className='num'>ⅳ.</span>
															<div className='desc'>다른 법률에 따라 진행중인 감사 및 조사에 관한 업무</div>
														</li>
													</ol>
												</div>
											</li>
										</ol>
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>개인정보 정정·삭제 요구 :「개인정보보호법」제36조(개인정보의 정정·삭제)에 따라 정정·삭제를 요구 할 수 있습니다. 다만, 다른 법령에서 그 개인정보가 수집대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>
										개인정보 처리정지 요구 : 「개인정보보호법」제37조(개인정보의 처리정지 등)에 따라 처리정지를 요구할 수 있습니다. 단, 아래에 해당하는 경우에는 법 제37조 2항에 의하여 처리정지 요구를 거절할 수 있습니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>다른 사람의 생명 · 신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우</div>
											</li>
										</ol>
									</div>
								</li>
							</ol>

							<h2>제 5조 개인정보의 파기</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>이노뎁㈜은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당개인정보(또는 개인정보파일)을 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여
										보존합니다.
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법 방법을 이용하여 파기하며, 종이 문서에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</div>
								</li>
							</ol>

							<h2>제 6조 개인정보의 안전성 확보조치</h2>
							<div className='text'>개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</div>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>
										내부관리계획의 수립 및 시행
										<br />
										개인정보보호 관련 내부관리계획 및 규정을 수립하여 시행하고 있습니다.{' '}
									</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										개인정보의 암호화
										<br />
										정보주체의 비밀번호 등 주요 개인정보는 암호화하여 저장 및 관리되고 있으며, 중요한 정보는 저장 및 전송 시 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>3.</span>
									<div className='desc'>
										해킹 등에 대비한 기술적 대책
										<br />
										해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고, 주기적인 갱신·점검을 하며, 외부로부터 접근이 통제된 구역에 시스템을 설치하여 기술적/물리적으로 감시 및 차단을 실시하고 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>4.</span>
									<div className='desc'>
										개인정보처리시스템 접근 제한
										<br />
										개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>5.</span>
									<div className='desc'>
										접속기록의 보관 및 위변조 방지
										<br />
										개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 2년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 관리하고 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>6.</span>
									<div className='desc'>
										비인가자에 대한 출입 통제
										<br />
										개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대한 비인가자 통제 절차를 수립, 운영하고 있습니다.
									</div>
								</li>
								<li>
									<span className='num'>7.</span>
									<div className='desc'>
										개인정보 취급 직원의 최소화 및 교육
										<br />
										개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하고 있으며, 관련규정 및 법규 등을 준수하도록 주기적인 교육 등을 통해 개인정보의 안전성을 확보하고 있습니다.
									</div>
								</li>
							</ol>

							<h2>제 7조 개인정보 자동 수집 장치의 설치 운영 및 거부에 관한 사항</h2>
							<ol className='num-list'>
								<li>
									<span className='num'>1.</span>
									<div className='desc'>이노뎁㈜은 이용자에게 서비스를 개선하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</div>
								</li>
								<li>
									<span className='num'>2.</span>
									<div className='desc'>
										쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
										<ol className='num-list'>
											<li>
												<span className='num'>a.</span>
												<div className='desc'>쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</div>
											</li>
											<li>
												<span className='num'>b.</span>
												<div className='desc'>쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.</div>
											</li>
											<li>
												<span className='num'>c.</span>
												<div className='desc'>쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</div>
											</li>
										</ol>
									</div>
								</li>
							</ol>

							<h2>제 8조 개인정보 보호책임자</h2>
							<div className='text'>이노뎁㈜은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</div>
							<div className='rule-table'>
								<table>
									<colgroup>
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
										<col style={{ width: '25%' }} />
									</colgroup>
									<thead>
										<tr>
											<th>구분</th>
											<th>직위</th>
											<th>성명</th>
											<th>연락처</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>총괄책임자</td>
											<td>수석</td>
											<td>민동수</td>
											<td>070-4006-0937</td>
										</tr>
										<tr>
											<td>보호책임자</td>
											<td>상무</td>
											<td>김윤성</td>
											<td>070-5117-1809</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h2>제 9조 권익침해 구제방법</h2>
							<div className='text'>
								정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.아래의 기관은 이노뎁㈜ 서비스와는 별개의 기관으로서, 이노뎁㈜ 서비스의 자체적인 개인정보 불만 처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이
								필요하시면 문의하여 주시기 바랍니다.
							</div>

							<div className='contact-list'>
								<dt>개인정보 침해신고센터 (한국인터넷진흥원 운영)</dt>
								<dd>
									<ul className='dot'>
										<li>소관업무 : 개인정보 침해사실 신고, 상담 신청</li>
										<li>
											홈페이지 :{' '}
											<Button as='a' to='https://privacy.kisa.or.kr' target='_blank'>
												privacy.kisa.or.kr
											</Button>
										</li>
										<li>
											전화 :{' '}
											<Button as='a' to='tel:118'>
												(국번없이) 118
											</Button>
										</li>
									</ul>
								</dd>
								<dt>개인정보 분쟁조정위원회</dt>
								<dd>
									<ul className='dot'>
										<li>소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
										<li>
											홈페이지 :{' '}
											<Button as='a' to='https://www.kopico.go.kr' target='_blank'>
												www.kopico.go.kr
											</Button>
										</li>
										<li>
											전화 :{' '}
											<Button as='a' to='tel:1833-6972'>
												1833-6972
											</Button>
										</li>
									</ul>
								</dd>
								<dt>대검찰청 사이버수사과</dt>
								<dd>
									<ul className='dot'>
										<li>
											홈페이지 :{' '}
											<Button as='a' to='https://www.spo.go.kr' target='_blank'>
												www.spo.go.kr
											</Button>
										</li>
										<li>
											전화 :{' '}
											<Button as='a' to='tel:02-3480-3570'>
												02-3480-3570
											</Button>
										</li>
										<li>
											이메일 :{' '}
											<Button as='a' to='mailto:cid@spo.go.kr'>
												cid@spo.go.kr
											</Button>
										</li>
									</ul>
								</dd>
								<dt>경찰청 사이버수사국</dt>
								<dd>
									<ul className='dot'>
										<li>
											홈페이지 :{' '}
											<Button as='a' to='https://cyberbureau.police.go.kr' target='_blank'>
												cyberbureau.police.go.kr
											</Button>
										</li>
										<li>
											전화 :{' '}
											<Button as='a' to='tel:182'>
												(국번없이) 182
											</Button>
										</li>
									</ul>
								</dd>
							</div>

							<h2>부칙</h2>
							<div className='text'>이 개인정보 처리방침은 2024.00.00부터 적용됩니다.</div>
						</section>
					</div>
				</Contents>
			)}
			{params?.id === '4' && (
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
												<td>2024.00.00</td>
												<td>ver. 2.0</td>
											</tr>
											<tr>
												<td>2024.00.00</td>
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
							<div className='text'>
								수신동의 이후에도 언제든지 동의를 철회할 수 있으며, 수신을 동의하지 않아도 회사가 제공하는 기본적인 서비스를 이용하실 수 있습니다. 다만 수신 거부할 경우 신규 서비스나 상품 관련 소식 등의 마케팅 정보를 제공받지 못할 수 있습니다.
							</div>

							<h2>6. 수신동의 변경 및 보유기간</h2>
							<div className='text'>
								보유 기간 : 마케팅 정보 수신 동의로부터 2년, 기간 초과 시 동의 절차 재진행 (미동의 시, 즉시 파기) 우리아이AI 개인정보 수정 페이지에서 마케팅 수신동의를 변경(동의/철회)할 수 있으며, 동의일로부터 회원 탈퇴 혹은 마케팅 수신 동의 해제 시까지 광고성
								정보 전달을 위하여 보유ㆍ이용 됩니다.
							</div>
						</section>
					</div>
				</Contents>
			)}
		</>
	)
}

export default _
