// import PopAddress from './popup.address'
import dynamic from 'next/dynamic'
const PopAddress = dynamic(() => import('./popup.address'), { ssr: false })

export { PopAddress }
