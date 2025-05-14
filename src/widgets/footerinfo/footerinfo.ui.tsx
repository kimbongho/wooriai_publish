import { Button } from '@/entities'
import { FooterInfo } from './footerinfo.style'

const _ = () => {
	return (
		<FooterInfo className='footer-info'>
			<ul className='footer-menu'>
				<li>
					<Button as='a' to='/publish/agreement/rule'>
						이용약관
					</Button>
				</li>
				<li>
					<Button as='a' to='/publish/agreement/rule2'>
						개인정보처리방침
					</Button>
				</li>
			</ul>
			<p className='copyright'>2024 ⓒ 이노뎁(주), All rights reserved.</p>
			<address>
				<div className='row'>
					<span className='unit'>
						대표자 : <b>이성진</b>
					</span>
					<span className='bar'></span>
					<span className='unit'>
						사업자등록번호 : <b>113-86-18789</b>
					</span>
				</div>
				<div className='row'>
					<span className='unit'>본사 : 서울특별시 금천구 디지털로 9길 47, 9층 (가산동, 한신 IT타워 2차) </span>
				</div>
				<div className='row'>
					<span className='unit'>
						고객 센터 :{' '}
						<Button as='a' to='tel:1661-6806' className='tel'>
							<b>1661-6806</b>
						</Button>{' '}
					</span>
				</div>
			</address>
			<p className='ps'>※ 전화번호 및 이메일의 무단수집을 금지합니다.</p>
		</FooterInfo>
	)
}

export default _
