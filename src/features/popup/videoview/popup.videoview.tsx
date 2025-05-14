import { Button } from '@/entities'
import VideoView from './videoview.style'
import 'swiper/css/navigation';

const _ = ({ open, close, src }: any) => {
	return (
    <VideoView className={'photo-view ' + (open ? 'on' : '')}>
      <Button className='close' onClick={close}></Button>
      <div className='video'>
        <video width='100%' height='auto' controls autoPlay muted key={src}>
          <source src={src} type='video/mp4' />
        </video>
      </div>
    </VideoView>
	)
}

export default _
