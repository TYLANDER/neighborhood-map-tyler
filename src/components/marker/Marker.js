import React from 'react'
import './styles.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import App from '../../App.js'
import LocationInfo from '../locationInfo/LocationInfo'



export class Marker extends React.Component {
  handleClick = () => {
    this.showMarkerInfo()
  }
  render() {
    return <Tippy content={<LocationInfo key={this.locations}/>}>
    <div className='pin' onClick={this.handleClick}></div>
    </Tippy>
  }
}

export default Marker
