
import { Chart } from './chart.style'

interface PreferenceOption {
  title: string
  value: number
  time: number
  bg: string
  tagBg: string
}

interface Props {
  options: PreferenceOption[]
}

const _ = ({options}: Props) => {
		
return (
    <>
      {options.map((opt, index) => (
        <Chart className="chart gage-bar-unit" key={index}>
          <div className="info">
            <span className="name">
              <b>{opt.title}</b>
            </span>
            <span className="unit">{opt.time}시간</span>
          </div>
          <div className="gage-bar-wrap">
            <div className="gage-bar">
              <div className="gage" style={{ width: opt.value + '%' }}>
                <span className="bar" style={{ background: opt.bg }}></span>
                <span className="tag">
                  <span style={{ backgroundColor: opt.tagBg }}>
                    <b>{opt.value}</b>
                    <span className="unit">%</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Chart>
      ))}
    </>
  )
}

export default _
