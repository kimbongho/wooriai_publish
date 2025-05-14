import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'Open licence',
			back: true,
		})
	}, [])

	return (
		<Contents>
			<div className='open-license-wrap'>
				<ul className='license-list'>
					<li>
						<Button as='a' target='_blank' to='https://github.com/vercel/next.js' className='license-info'>
							<div className="tit"><b>Next.js</b> <span className="version">(v14.2.15)</span></div>
							<div className="link">https://github.com/vercel/next.js</div>
							<div className="copyright">Copyright (c) 2024 Vercel, Inc.</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/facebook/react' className='license-info'>
							<div className="tit"><b>React</b> <span className="version">(v18.3.1)</span></div>
							<div className="link">https://github.com/facebook/react</div>
							<div className="copyright">Copyright (c) Meta Platforms, Inc. and affiliates.</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/facebookexperimental/Recoil' className='license-info'>
							<div className="tit"><b>Recoil</b> <span className="version">(v0.7.7)</span></div>
							<div className="link">https://github.com/facebookexperimental/Recoil</div>
							<div className="copyright">Copyright (c) Meta Platforms, Inc. and affiliates.</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/pmndrs/zustand' className='license-info'>
							<div className="tit"><b>Zustand</b> <span className="version">(v5.0.1)</span></div>
							<div className="link">https://github.com/pmndrs/zustand</div>
							<div className="copyright">Copyright (c) 2019 Paul Henschel</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/styled-components/styled-components' className='license-info'>
							<div className="tit"><b>Styled Components</b> <span className="version">(v6.1.13)</span></div>
							<div className="link">https://github.com/styled-components/styled-components</div>
							<div className="copyright">Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/axios/axios' className='license-info'>
							<div className="tit"><b>Axios</b> <span className="version">(v1.7.7)</span></div>
							<div className="link">https://github.com/axios/axios</div>
							<div className="copyright">Copyright (c) 2014-present Matt Zabriskie</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/microsoft/TypeScript' className='license-info'>
							<div className="tit"><b>TypeScript</b> <span className="version">(v5.6.3)</span></div>
							<div className="link">https://github.com/microsoft/TypeScript</div>
							<div className="copyright">Copyright (c) Microsoft Corporation</div>
							<div className="license">license Apache-2.0</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/eslint/eslint' className='license-info'>
							<div className="tit"><b>ESLint</b> <span className="version">(v9.12.0)</span></div>
							<div className="link">https://github.com/eslint/eslint</div>
							<div className="copyright">Copyright JS Foundation and other contributors</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/prettier/prettier' className='license-info'>
							<div className="tit"><b>Prettier</b> <span className="version">(v3.3.3)</span></div>
							<div className="link">https://github.com/prettier/prettier</div>
							<div className="copyright">Copyright (c) James Long and contributors</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
					<li>
						<Button as='a' target='_blank' to='https://github.com/stylelint/stylelint' className='license-info'>
							<div className="tit"><b>Stylelint</b> <span className="version">(v16.10.0)</span></div>
							<div className="link">https://github.com/stylelint/stylelint</div>
							<div className="copyright">Copyright (c) 2015-present Stylelint contributors</div>
							<div className="license">license MIT</div>
						</Button>
					</li>
				</ul>
			</div>
		</Contents>
	)
}

export default _
