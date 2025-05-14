// import RepleInput from './repleinput.ui'
import dynamic from 'next/dynamic'
const RepleInput = dynamic(() => import('./repleinput.ui'), { ssr: false })

export default RepleInput
