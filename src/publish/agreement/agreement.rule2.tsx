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
			title: '개인정보 처리 방침',
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

						<div className='text'>
              이노뎁㈜은 개인정보보호법 제30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 우리아이AI 서비스 이용자의 개인정보 처리 방침을 수립합니다. 
						</div>

						<h2>제 1조 개인정보의 수집항목 및 개인정보의 처리 및 보유 기간 등</h2>
						<div className='text'>
              수집 및 이용하는 개인정보는 아래와 같습니다.
              <br />이용자는 동의를 거부할 수 있으나, 필수 동의정보 거부 시 서비스 이용이 제한됩니다.
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
                        <ul className="dot">
                          <li>회원가입의사확인</li>
                          <li>본인 식별 및 인증</li>
                          <li>회원자격 유지 및 관리</li>
                          <li>서비스 부정이용 방지</li>
                          <li>각종 고지 및 고충처리</li>
                        </ul>
                      </td>
                      <td>
                        아이디
                        <br />비밀번호
                        <br />휴대폰번호
                      </td>
                      <td rowSpan={6}>
                        <span className="line">회원탈퇴시까지</span>
                        <br /><br />단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
                      </td>
                    </tr>
										<tr>
                      <td>원장님, 선생님 속성 등록</td>
                      <td>시설 관계자의 등록</td>
                      <td>
                        호칭
                        <br />[선택]프로필사진
                        <br />휴대폰번호
                      </td>
                    </tr>
										<tr>
                      <td>학부모 속성 등록</td>
                      <td>자녀 정보 등록 및 서비스 제공</td>
                      <td>
                        아동명
                        <br />사진
                        <br />학부모 휴대폰번호
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
                        <br />선생님 휴대폰번호
                      </td>
                    </tr>
										<tr>
                      <td>반정보 등록</td>
                      <td>원 내 반의 선생님 정보 확인</td>
                      <td>
                        성명
                        <br />휴대폰번호
                      </td>
                    </tr>
                    <tr>
                      <td>아동정보 등록</td>
                      <td>원 내 자녀 관리를 위한 정보 확인</td>
                      <td>아동명
                        <br />사진 
                      </td>
                      <td><span className="line">영유아보육법</span>
                        <br /><br />공공기록물 관리에 관한 법률  기준에 따라 기관 퇴소 후 5년 간 보관
                      </td>
                    </tr>
                    <tr>
                      <td>알림장</td>
                      <td>학부모에게 자녀의 원 활동 정보 제공</td>
                      <td>아동명 <br />사진 </td>
                      <td rowSpan={4}>
                        <span className="line">회원탈퇴시까지</span>
                        <br /><br />단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
                      </td>
                    </tr>
                    <tr>
                      <td>아동 식별정보</td>
                      <td>원내 아동 위험관리 등을 위한 아동 식별 및 식별 성능 개선</td>
                      <td>아동 얼굴정보 사진</td>
                    </tr>
                    <tr>
                      <td>앨범</td>
                      <td>학부모에게 자녀의 원 활동 정보 제공</td>
                      <td>아동명 <br />사진 및 영상 </td>
                    </tr>
                    <tr>
                      <td>일반 공지</td>
                      <td>학부모에게 원관련 알림 정보 제공</td>
                      <td>아동명 <br />사진 </td>
                    </tr>
                    <tr>
                      <td>의무 공지</td>
                      <td>학부모에게 원의 의무 알림 공지 정보 제공</td>
                      <td>아동명 <br />생년월일 </td>
                      <td rowSpan={2}>
                        <span className="line">영유아보육법 </span>
                        <br /><br />공공기록물 관리에 관한 법률  기준에 따라 기관 퇴소 후 5년 간 보관
                      </td>
                    </tr>
                    <tr>
                      <td>출결</td>
                      <td>아동의 출결 기록 관리</td>
                      <td>아동명
                        <br />사진
                        <br />전자출결 태그 정보
                        <br />해당 출결일의 출결정보
                        <br />등원 시간
                        <br />하원 시간
                      </td>
                    </tr>

                    <tr>
                      <td>투약의뢰서</td>
                      <td>아동의 투약 정보를 시설에 전달하여 적절한 투약 정보 공유</td>
                      <td>아동명</td>
                      <td rowSpan={3}>
                        <span className="line">회원탈퇴시까지</span>
                        <br /><br />단, 관계법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사 조사 종료시까지 보유
                      </td>
                    </tr>                    
                    <tr>
                      <td>귀가동의서</td>
                      <td>아동의 귀가 방법에 대한 정보를 시설에 전달하여 안전한 귀가 정보 공유</td>
                      <td>보호자와 아동과의 관계 <br />보호자의 휴대폰 번호 </td>
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
              <br />이용자는 동의를 거부할 수 있으나, 필수 동의 정보의 거부시 서비스 이용이 제한됩니다.
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
                        <span className="line">회원탈퇴시까지</span>
                        <br /><br />단, 법정 의무 보유기간에 따라 추가 보관
                      </td>
                    </tr>
										<tr>
                      <td>알림장</td>
                      <td>아동의 행동 기록</td>
                      <td>자녀 행동 정보 <br />AI 아동 행동 분석 정보 </td>
                    </tr>
										<tr>
                      <td>의무 공지</td>
                      <td>학부모에게 원의 의무 알림 공지 정보</td>
                      <td>아동의 건강 정보 (건강 검진 일자)</td>
                      <td><span className="line">영유아보육법</span>
                        <br /><br />공공기록물 관리에 관한 법률  기준에 따라 기관 퇴소 후 5년 간 보관
                      </td>
                    </tr>
										<tr>
                      <td>위험관리</td>
                      <td>아동의 행동을 추적 분석하여 원내 안전 및 위험관리에 활용</td>
                      <td>아동의 식별 영상 위험상황 분석 영상 및 영상 캡쳐</td>
                      <td rowSpan={2}><span className="line">회원 탈퇴 시까지</span></td>
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
						<div className='text'>
              이노뎁㈜은 이용자의 사전 동의 없이 개인정보를 제 3자에게 제공하지 않습니다. 다만, 이용자가 외부 제휴사 등의 서비스를 이용하기 위하여 필요한 범위 내에서 이용자의 동의를 얻은 후에 개인정보를 제 3자에게 제공하고 있습니다.
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
                        <br />쿠키정보
                        <br />사용자연령
                        <br />사용자 성별
                        <br />사용자 관심사
                        <br />서비스 페이지 사용 정보
                        <br />서비스 페이지 체류 시간
                      </td>
                      <td>
                        <span className="line">회원탈퇴 혹은 서비스 해지시까지</span>
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
            <ol className="num-list">
              <li><span className='num'>1.</span>
                <div className='desc'>개인정보 열람 요구 :「개인정보보호법」제35조(개인정보의 열람)에 따라 열람을 요구할 수 있습니다. 단, 아래에 해당하는 경우에는 법 제35조 4항에 의하여 열람 요구를 거절할 수 있습니다.
                  <ol className="num-list">
                    <li><span className='num'>a.</span><div className='desc'>법률에 따라 열람이 금지되거나 제한되는 경우</div></li>
                    <li><span className='num'>b.</span><div className='desc'>다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</div></li>
                    <li><span className='num'>c.</span>
                      <div className='desc'>공공기관이 다음 각 목의 어느 하나에 해당하는 업무를 수행할 때 중대한 지장을 초래하는 경우
                        <ol className="num-list">
                          <li><span className='num'>ⅰ.</span><div className='desc'>조세의 부과·징수 또는 환급에 관한 업무</div></li>
                          <li><span className='num'>ⅱ.</span><div className='desc'>학력·기능 및 채용에 관한 시험, 자격심사에 관한 업무</div></li>
                          <li><span className='num'>ⅲ.</span><div className='desc'>보상금·급부금 산정 등에 대하여 진행 중인 평가 또는 판단에 관한 업무</div></li>
                          <li><span className='num'>ⅳ.</span><div className='desc'>다른 법률에 따라 진행중인 감사 및 조사에 관한 업무</div></li>
                        </ol>
                      </div>
                    </li>
                  </ol>
                </div>
              </li>
              <li><span className='num'>2.</span><div className='desc'>개인정보 정정·삭제 요구 :「개인정보보호법」제36조(개인정보의 정정·삭제)에 따라 정정·삭제를 요구 할 수 있습니다. 다만, 다른 법령에서 그 개인정보가 수집대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</div></li>
              <li>
                <span className='num'>3.</span>
                <div className='desc'>개인정보 처리정지 요구 : 「개인정보보호법」제37조(개인정보의 처리정지 등)에 따라 처리정지를 요구할 수 있습니다. 단, 아래에 해당하는 경우에는 법 제37조 2항에 의하여 처리정지 요구를 거절할 수 있습니다.
                  <ol className="num-list">
                    <li><span className='num'>a.</span><div className='desc'>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</div></li>
                    <li><span className='num'>b.</span><div className='desc'>다른 사람의 생명 · 신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우</div></li>
                    <li><span className='num'>c.</span><div className='desc'>개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우</div></li>
                  </ol>
                </div>
              </li>
            </ol>

						<h2>제 5조 개인정보의 파기</h2>
            <ol className="num-list">
              <li><span className='num'>1.</span><div className='desc'>이노뎁㈜은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</div></li>
              <li><span className='num'>2.</span><div className='desc'>정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당개인정보(또는 개인정보파일)을 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.</div></li>
              <li><span className='num'>3.</span><div className='desc'>전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법 방법을 이용하여 파기하며, 종이 문서에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</div></li>
            </ol>

						<h2>제 6조 개인정보의 안전성 확보조치</h2>
						<div className='text'>개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</div>            
            <ol className="num-list">
              <li><span className='num'>1.</span><div className='desc'>내부관리계획의 수립 및 시행<br />개인정보보호 관련 내부관리계획 및 규정을 수립하여 시행하고 있습니다. </div></li>
              <li><span className='num'>2.</span><div className='desc'>개인정보의 암호화<br />정보주체의 비밀번호 등 주요 개인정보는 암호화하여 저장 및 관리되고 있으며, 중요한 정보는 저장 및 전송 시 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</div></li>
              <li><span className='num'>3.</span><div className='desc'>해킹 등에 대비한 기술적 대책<br />해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고, 주기적인 갱신·점검을 하며, 외부로부터 접근이 통제된 구역에 시스템을 설치하여 기술적/물리적으로 감시 및 차단을 실시하고 있습니다.</div></li>
              <li><span className='num'>4.</span><div className='desc'>개인정보처리시스템 접근 제한<br />개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</div></li>
              <li><span className='num'>5.</span><div className='desc'>접속기록의 보관 및 위변조 방지<br />개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 2년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 관리하고 있습니다.</div></li>
              <li><span className='num'>6.</span><div className='desc'>비인가자에 대한 출입 통제<br />개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대한 비인가자 통제 절차를 수립, 운영하고 있습니다.</div></li>
              <li><span className='num'>7.</span><div className='desc'>개인정보 취급 직원의 최소화 및 교육<br />개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하고 있으며, 관련규정 및 법규 등을 준수하도록 주기적인 교육 등을 통해 개인정보의 안전성을 확보하고 있습니다.</div></li>
            </ol>

						<h2>제 7조 개인정보 자동 수집 장치의 설치 운영 및 거부에 관한 사항</h2>
            <ol className="num-list">
              <li><span className='num'>1.</span><div className='desc'>이노뎁㈜은 이용자에게 서비스를 개선하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</div></li>
              <li><span className='num'>2.</span>
                <div className='desc'>쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
                  <ol className="num-list">
                    <li><span className='num'>a.</span><div className='desc'>쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</div></li>
                    <li><span className='num'>b.</span><div className='desc'>쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.</div></li>
                    <li><span className='num'>c.</span><div className='desc'>쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</div></li>
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
            <div className="text">
              정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.아래의 기관은 이노뎁㈜ 서비스와는 별개의 기관으로서, 이노뎁㈜ 서비스의 자체적인 개인정보 불만 처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
            </div>

            <div className="contact-list">
              <dt>개인정보 침해신고센터 (한국인터넷진흥원 운영)</dt>
              <dd>
                <ul className="dot">
                  <li>소관업무 : 개인정보 침해사실 신고, 상담 신청</li>
                  <li>홈페이지 : <Button as='a' to='https://privacy.kisa.or.kr' target='_blank'>privacy.kisa.or.kr</Button></li>
                  <li>전화 : <Button as='a' to="tel:118">(국번없이) 118</Button></li>
                </ul>
              </dd>
              <dt>개인정보 분쟁조정위원회</dt>
              <dd>
                <ul className="dot">
                  <li>소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
                  <li>홈페이지 : <Button as='a' to='https://www.kopico.go.kr' target='_blank'>www.kopico.go.kr</Button></li>
                  <li>전화 : <Button as='a' to="tel:1833-6972">1833-6972</Button></li>
                </ul>
              </dd>
              <dt>대검찰청 사이버수사과</dt>
              <dd>
                <ul className="dot">
                  <li>홈페이지 : <Button as='a' to='https://www.spo.go.kr' target='_blank'>www.spo.go.kr</Button></li>
                  <li>전화 : <Button as='a' to="tel:02-3480-3570">02-3480-3570</Button></li>
                  <li>이메일 : <Button as='a' to="mailto:cid@spo.go.kr">cid@spo.go.kr</Button></li>
                </ul>
              </dd>
              <dt>경찰청 사이버수사국</dt>
              <dd>
                <ul className="dot">
                  <li>홈페이지 : <Button as='a' to='https://cyberbureau.police.go.kr' target='_blank'>cyberbureau.police.go.kr</Button></li>
                  <li>전화 : <Button as='a' to="tel:182">(국번없이) 182</Button></li>
                </ul>
              </dd>
            </div>


            <h2>부칙</h2>            
            <div className="text">이 개인정보 처리방침은 2024.00.00부터 적용됩니다.</div>            
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
