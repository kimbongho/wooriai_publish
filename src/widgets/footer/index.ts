// import Footer from './footer.ui'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./footer.ui'), { ssr: false })

export default Footer
