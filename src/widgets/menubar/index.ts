// import MenuBar from './menubar.ui'
import dynamic from 'next/dynamic'
const MenuBar = dynamic(() => import('./menubar.ui'), { ssr: false })

export default MenuBar
