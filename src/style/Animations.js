
import { keyframes } from 'styled-components'


export const jump = keyframes`
 0% { transform: translate3d(0, 0, 0); }
 40% { transform: translate3d(0, 50%, 0);}
 100% { transform: translate3d(0, 0, 0); }
`

export const jumpTwo = keyframes`
 0% { transform: translate3d(0, 0, 0); }
 40% { transform: translate3d(0, 20px, 0);}
 100% { transform: translate3d(0, 0, 0); }
`

export const jumpThree = keyframes`
 0% { transform: translate3d(0, 0, 0); }
 40% { transform: translate3d(0, -20px, 0);}
 100% { transform: translate3d(0, 0, 0); }
`

export const rotatedTwo = keyframes`
 0% { transform: rotate(0); }
 100% { transform: rotate(-360deg); }
`

  