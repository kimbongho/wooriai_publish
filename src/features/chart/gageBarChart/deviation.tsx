
import { Chart } from './chart.style'

const _ = ({value, label}: any) => {
		
	return <Chart className='chart gage-bar-unit st-both'>
				<div className='gage-bar-unit'>
          <div className='gage-bar-wrap'>
            <div className='gage-bar'>
              <div className='gage-wrap'>
              <div className="gage" style={{ width: value[0] + '%' }}>
                <span
                  className="bar"
                  style={{
                    background: 'linear-gradient(90deg, #00D4D4 100%, rgba(0, 212, 212, 0.6) 0%)',
                  }}
                ></span>
                <span className="tag">
                  <span style={{ backgroundColor: '#09D5D5' }}>
                    <b>{ label[0] }</b>
                  </span>
                </span>
              </div>
              </div>
              <div className='gage-wrap'>
              <div className="gage" style={{ width: value[1] + '%' }}>
                  <span
                    className="bar"
                    style={{
                      background: 'linear-gradient(90deg, rgba(66, 82, 226, 0.6) 0%, #4252E2 100%)',
                    }}
                  ></span>
                  <span className="tag">
                    <span style={{ backgroundColor: '#4252E2' }}>
                      <b>{ label[1] }</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='x-axis'>0</div>
        </div>
	</Chart>
}

export default _
