import styled from '@emotion/styled'

export const Loading = styled.div`
	position:fixed;top:0;width:100%;height:100%;min-width:280px;z-index:80;z-index:105;max-width: 475px;
	background:#fff;display:flex;justify-content:center;align-items:center; color:#383838;flex-direction: column;text-align:center;
	b{font-size:1.8rem;
		em{ color:#4252E2;vertical-align:baseline;}
	}
	.text{font-size:1.4rem;margin-top:2rem; color:#878AA1; }

	.loader-wrap{position:relative;	height: 16.5rem;
		margin-bottom:5rem;
		.loader {
			width: 5rem;
			height: 16.5rem;
			position: absolute;
			transform:translateX(-50%);
		}
		.loader::before {
			content: '';
			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-50% , 0);
			width: 1.6rem;
			height: 1.6rem;
			background: #00DDDD;
			border-radius: 50%;
			animation: bounce 2s linear infinite;
		}
		.loader::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			height: 4.8rem;
			width: 4.8rem;
			background: #4252E2;
			border-radius: 0.4rem;
			animation: rotate 2s linear infinite;
		}

	}
	@keyframes bounce {
		0% , 50% , 100%{
			transform: translate(-50%, 0px);
			height: 2rem;
		}
		20% {
			transform: translate(-25%, 85px);
			height: 2.8rem;
		}
		25% {
			transform: translate(-25%, 110px);
			height: 1.2rem;
		}
		70% {
			transform: translate(-75%, 85px);
			height: 2.8rem;
		}
		75% {
			transform: translate(-75%, 108px);
			height: 1.2rem;
		}
	}
	@keyframes rotate {
		0% , 50% , 100%{ transform: rotate(0deg)}
		25% { transform: rotate(90deg)}
		75%{ transform: rotate(-90deg)}
	}

`
export default Loading