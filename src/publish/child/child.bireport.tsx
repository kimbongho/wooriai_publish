import { Button, Img, TabList, TabPanel, Tabs, Icon, Checkbox } from '@/entities'
import { BarChart, LineChart, StandardDeviationChart, GageBarChart, DeviationChart, ThumbChart } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'

import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'BI 리포트',
			back: true,
		})
	}, [])

	const [tabIndex, setTabIndex] = useState(0)
	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
	}

	const moreToggle = (e: any) => {
		const chartMore = e.currentTarget.closest('.chart-box').querySelector('.chart-more')
		if (!chartMore.classList.contains('on')) {
			chartMore.classList.add('on')
		} else {
			chartMore.classList.remove('on')
		}
	}

	const Info = () => {
		return (
			<>
				<div className='banner-profile'>
					<div className='on'>
						<div className='img'>
							<Img src={'/images/temp/temp-profile.png'} alt='' />
						</div>
						<div className='desc'>
							<span className='cls-name'>아리스토텔레스반</span>
							<span className='name'>홍길동</span>
							<div className='parent'>학부모 : 소이현</div>
						</div>
					</div>
				</div>

				{/* <div className='legend'>
					<span className='warning'>
						<i></i>
						<span className='txt'>경고</span>
					</span>
					<span className='caution'>
						<i></i>
						<span className='txt'>주의</span>
					</span>
					<span className='normal'>
						<i></i>
						<span className='txt'>정상</span>
					</span>
				</div> */}
			</>
		)
	}


	// 단일선택
	const [checkItems, setCheckItems] = useState<any>(Array(3).fill(true))
	const handleSingleCheck = (idx: any) => {
		const newItems = checkItems.map((value: any, i: any) => {
			if (i === idx) {
				return !value
			} else {
				return value
			}
		})
		setCheckItems(newItems)
	}	

	const [chartOption1, setChartOption1] = useState({
		label: ['1주', '2주', '3주', '4주', '5주'],
		series: [{
				name:'활동성',
				type:'type1',
				data :[2, 3, 4, 1, 1],
			},
			{
				name:'사회성',
				type:'type2',
				data :[3, null, 2, 3, 2],
			}
		]
	});	

	const [chartOption2, setChartOption2] = useState({
		label: ['1주', '2주', '3주', '4주', '5주'],
		series: [{
				name:'안전 사고 발생 가능 행동 수',
				type:'type3',
				data :[2, 3, 4, 1, 1],
			}
		]
	});	

	const [chartOption3, setChartOption3] = useState({
		label: ['1월', '2월', '3월'],
		series: [{
				name:'미술',
				data :[30, 50, 30],
				color: '#6b74ff'
			},
			{
				name:'역할놀이',
				data: [20, 30, 20],
				color: '#1ddbd9'
			},
			{
				name:'과학',
				data: [25, 20, 40],
				color: '#f6c25a'
			}
		]
	});	

	const [preferenceOption, setPreferenceOption] = useState([
		{title:'미술', value:45.8, time:42, bg:'linear-gradient(90deg, rgba(66, 82, 226, 0.6) 0%, #4252E2 100%)', tagBg:'#4252E2'},
		{title:'역할놀이', value:30, time:17, bg:'linear-gradient(90deg, rgba(0, 212, 212, 0.6) 0%, #00D4D4 100%)', tagBg:'#09D5D5'},
		{title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(249, 183, 54, 0.6) 0%, #F9B736 100%)', tagBg:'#F8BA42'}
	]);	

	const [relationshipOption, setRelationshipOption] = useState([
		{name:'이선화', value:45.8, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'김연우', value:40.5, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'윤소윤', value:38.4, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이시우', value:30.8, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이지호', value:28.6, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'김연아', value:25.3, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이단비', value:12.4, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
	]);	

	return (
		<Contents>
			<div className='bireport-wrap'>
				<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
					<div className='page-top-area'>
						<TabList>
							<Button>주</Button>
							<Button>월</Button>
							<Button>분기</Button>
						</TabList>
					</div>
					<TabPanel>
						{/* 주주 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024.03</b>
									<span className='sub'>(1주차)</span>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								<div className='bi-chart-wrap'>
									<div className='chart-box'>
										<div className='report-main-text'>
											<b><strong>딸기반 이동욱</strong> 원아의</b>
											<p>2025.01~2025.03 동안의 분석 결과입니다.</p>
										</div>

										<div className='character-summary'>
											<div className='character-wrap'>
												<div className='text'>
													오늘은 재기발랄한
													<br />
													<b>토끼</b> 같았어요
												</div>
												<Icon type='character-rabbit' />

												<div className='text'>
													오늘은 얌전한
													<br />
													<b>코알라</b> 같았어요
												</div>
												<Icon type='character-koala' />

												<div className='text'>
													오늘은 차분한
													<br />
													<b>나무늘보</b> 같았어요
												</div>
												<Icon type='character-sloth' />

												<div className='text'>
													오늘은 협동적인
													<br />
													<b>비버</b> 같았어요
												</div>
												<Icon type='character-beaver' />

												<div className='text'>
													오늘은 옹기종기 활발한
													<br />
													<b>알파카</b> 같았어요
												</div>
												<Icon type='character-alpaca' />

												<div className='text'>
													오늘은 활기찬
													<br />
													<b>돌고래</b> 같았어요
												</div>
												<Icon type='character-dolphin' />
											</div>
											<div className='report-notice'>
												<span>어린이집에서 <em>105시간</em>을 함께 하면서</span>
												<br /><span>총 <em>14명</em>의 친구들과 어울렸고 
												<br /><em>미술 놀이</em>를 가장 많이 했어요.</span>
											</div>											
											<ul className='summary-list'>
												<li>
													<Icon type='toy' /><span>놀이 활동에 적극적으로 참여하고 여러 활동에 관심이 많아요.</span>
												</li>
												<li>
													<Icon type='friend' /><span>친구들과 두루두루 친하고 친구와 함께할 때 더욱 활발해져요.</span>
												</li>
											</ul>
										</div>
																			
										<div className='chart-area'>
											<div className='chart-tit'><b>기간별 관찰 추이</b></div>
											<LineChart option={chartOption1}  />
											<div className='data-table'>
												<table>
													<colgroup>
													<col style={{ minWidth: '8rem' }} />
													<col style={{ minWidth: '8rem' }} />
													<col style={{ minWidth: '8rem' }} />
													<col style={{ minWidth: '8rem' }} />
													<col style={{ minWidth: '8rem' }} />
													<col style={{ minWidth: '8rem' }} />
													</colgroup>
													<thead>
														<tr>
															<th>구분</th>
															<th>1주</th>
															<th>2주</th>
															<th>3주</th>
															<th>4주</th>
															<th>5주</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>활동성</td>
															<td><b>42.5</b></td>
															<td><b>52.0</b></td>
															<td><b>39.7</b></td>
															<td><b>39.7</b></td>
															<td><b>39.7</b></td>
														</tr>
														<tr>
															<td>사회성</td>
															<td><b>42.5</b></td>
															<td><b>52.0</b></td>
															<td><b>39.7</b></td>
															<td><b>39.7</b></td>
															<td><b>39.7</b></td>
														</tr>
													</tbody>
												</table>
											</div>

											<div className='list-dot'>
												<li>활동성이 2월에 급격히 증가하였다가 3월에 급격히 감소하였습니다.</li>
												<li>사회성이 2월에 약간 줄었다가 3월에 다시 증가하였습니다.</li>
											</div>
										</div>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													안전강화
												</Checkbox>
											</div>
											<p className='txt'>우리아이AI는 선생님과 함께 우리 아이의 안전을 지키고 있습니다.</p>
										</div>
										<div className='chart-more on'>
											<div className='chart-area'>
												<div className='chart-tit'><b>기간별 관찰 추이</b></div>
												<LineChart option={chartOption2}  />
												<div className='list-dot'>
													<li>안전 추적을 시작한 일자를 기준으로, 안전 사고 발생 가능 행동이 24.7% 줄었습니다. </li>
												</div>
											</div>	
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													활동성
												</Checkbox>
											</div>
											<p className='txt'>평균 활동성은 연령 평균에 비해 낮으나, 활동성 편차가 크게 나타납니다. 좋아하는 활동과 싫어하는 활동에 대한 선호도가 분명한 아동에게서 나타나는 특징입니다.</p>
										</div>
										<div className='chart-more on'>
											<div className='chart-area'>
												<div className='chart-tit'><b>평균 비교</b></div>
												<StandardDeviationChart value={32.8} />
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>활동성 편차</b></div>
												<DeviationChart value={[20, 30]} label={['-8.7', '+7.2']} />
												<div className='data-table'>
													<table>
														<colgroup>
															<col style={{ width: '50%' }} />
															<col style={{ width: '50%' }} />
														</colgroup>														
														<thead>
															<tr>
																<th>반평균 편차</th>
																<th>아동 편차</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><b>42.5</b></td>
																<td><b>52.0</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>가장 활동이 <em>많았던 날 <strong>Top3</strong></em></b></div>
												<div className='data-table'>
													<table>
														<colgroup>
															<col style={{ width: '50%' }} />
															<col style={{ width: '50%' }} />
														</colgroup>
														<thead>
															<tr>
																<th>일자</th>
																<th>활동성 지수</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><span className='light'>2025년 1월 14일</span></td>
																<td><b>52.7</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 2월 03일</span></td>
																<td><b>31.3</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 3월 07일</span></td>
																<td><b>25.9</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>가장 활동이 <em>적었던 날 <strong>Top3</strong></em></b></div>
												<div className='data-table'>
													<table>
													<colgroup>
														<col style={{ width: '50%' }} />
														<col style={{ width: '50%' }} />
													</colgroup>														
														<thead>
															<tr>
																<th>일자</th>
																<th>활동성 지수</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><span className='light'>2025년 1월 14일</span></td>
																<td><b>52.7</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 2월 03일</span></td>
																<td><b>31.3</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 3월 07일</span></td>
																<td><b>25.9</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													사회성
												</Checkbox>
											</div>
											<p className='txt'>평균 사회성이 연령 평균에 비해 월등히 높으며, 사회성 편차도 안정적입니다. 또래와 안정적으로 어울리며, 단체 활동 참여에 적극적인 아동에게서 나타나는 특징입니다.</p>
										</div>
										<div className='chart-more on'>
											<div className='chart-area'>
												<div className='chart-tit'><b>평균 비교</b></div>
												<StandardDeviationChart value={78} />
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>사회성 편차</b></div>
												<DeviationChart value={[20, 30]} label={['-8.7', '+7.2']} />
												<div className='data-table'>
													<table>
														<colgroup>
															<col style={{ width: '50%' }} />
															<col style={{ width: '50%' }} />
														</colgroup>														
														<thead>
															<tr>
																<th>반평균 편차</th>
																<th>아동 편차</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><b>42.5</b></td>
																<td><b>52.0</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>가장 사회성이 <em>높았던 날 <strong>Top3</strong></em></b></div>
												<div className='data-table'>
													<table>
														<colgroup>
															<col style={{ width: '50%' }} />
															<col style={{ width: '50%' }} />
														</colgroup>
														<thead>
															<tr>
																<th>일자</th>
																<th>사회성 지수</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><span className='light'>2025년 1월 14일</span></td>
																<td><b>52.7</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 2월 03일</span></td>
																<td><b>31.3</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 3월 07일</span></td>
																<td><b>25.9</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>가장 사회성이 <em>적었던 날 <strong>Top3</strong></em></b></div>
												<div className='data-table'>
													<table>
													<colgroup>
														<col style={{ width: '50%' }} />
														<col style={{ width: '50%' }} />
													</colgroup>														
														<thead>
															<tr>
																<th>일자</th>
																<th>사회성 지수</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td><span className='light'>2025년 1월 14일</span></td>
																<td><b>52.7</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 2월 03일</span></td>
																<td><b>31.3</b></td>
															</tr>
															<tr>
																<td><span className='light'>2025년 3월 07일</span></td>
																<td><b>25.9</b></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>	
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													놀이
												</Checkbox>
											</div>
											<p className='txt'>총 놀이 시간 98시간 중 42시간을 미술에 보냈습니다.  놀이 선호도는 미술, 역할놀이, 쌓기 순입니다.</p>
										</div>
										<div className='chart-more on'>	
											<div className='chart-area'>
												<div className='chart-tit'><b>선호도</b></div>
												<GageBarChart options={preferenceOption} />
											</div>	
											<div className='chart-area'>
												<div className='chart-tit'><b>월별추이</b></div>
												<BarChart option={ chartOption3 } />
											</div>	
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													교우관계
												</Checkbox>
											</div>
										</div>
										<div className='chart-more on'>	
											<div className='chart-area'>
												<div className='chart-tit'><b>상호 작용 원아</b></div>
												<ThumbChart options={relationshipOption} />
											</div>	
												
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='tit-wrap st2'>
											<div className='check-box'>
												<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
													우리아이 하이라이트
												</Checkbox>
											</div>
										</div>
										<div className='chart-more on'>
											<div className='photo-desc-list'>
												<ul>
													<li>
														<div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
														<div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
														<div className='date'>2025.01.05</div>
													</li>
													<li>
														<div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
														<div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
														<div className='date'>2025.01.05</div>
													</li>
													<li>
														<div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
														<div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
														<div className='date'>2025.01.05</div>
													</li>
												</ul>
											</div>

										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐두기</span>
											<span className='off'>접어두기</span>
										</button>
									</div>
									
								</div>
							</div>
						</div>
						{/* 월월 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024.03</b>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								
							</div>
						</div>
						{/* 분기기 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024</b>
									<span className='sub'>(1분기)</span>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								
							</div>
						</div>
					</TabPanel>
				</Tabs>
				<div className='btn-wrap'>
					<Button className='btn-type2 st1'>일지생성</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
