import React from 'react'
import './styles.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

export class Marker extends React.Component {
  handleClick = () => {
    console.log('Pin clicked')
  }
  render() {
    return <Tippy content={<div className='tooltip-box'>Hello World</div>}>
    <div className='pin' onClick={this.handleClick}></div>
    </Tippy>
  }
}

export default Marker
