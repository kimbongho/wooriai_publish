
import { Icon, Img } from '@/entities'
import { Chart } from './chart.style'

interface PreferenceOption {
  name: string
  value: number
  src: string
}

interface Props {
  options: PreferenceOption[]
}

const _ = ({options}: Props) => {
		
return (
    <>
      {options.map((opt, index) => (
        <Chart className='chart gage-bar-unit st-thumb' key={index}>
        <div className='thumb'>
          <Img src={ opt.src } alt='' />
        </div>
        <div className='gage-bar-unit'>
          <div className='info'>
            {index < 3 ?
            <span className='medal'>
              <Icon type={'medal' + (index + 1)}  />
            </span> : null}
            <span className='name'><b>{ opt.name }</b></span>
            <span className='unit'>{ opt.value + '%' }</span>
          </div>
          <div className='gage-bar-wrap'>
            <div className='gage-bar'>
              <div className='gage' style={{ width: opt.value + '%' }}>
                <span
                  className='bar'
                  style={{
                    background: 'linear-gradient(90deg, rgba(66, 82, 226, 0.6) 0%, #4252E2 100%)',
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </Chart>
      ))}
    </>
  )
}

export default _
