import dynamic from 'next/dynamic'
// import PrimaryLayout from './layout.primary'
import PublshLayout from './layout.publish'

const PrimaryLayout = dynamic(() => import('./layout.primary'), { ssr: false })

export { PrimaryLayout, PublshLayout }
