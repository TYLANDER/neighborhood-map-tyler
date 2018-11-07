import React from 'react'
import './styles.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import LocationInfo from '../locationInfo/LocationInfo'



export class Marker extends React.Component {
  handleClick = () => {
   // this.showMarkerInfo()
  }
  render() {
    return <Tippy trigger="click" content={<LocationInfo location={this.props.location}/>}>
    <div className='pin' onClick={() => this.props.setSelectedLocation(this.props.location) }></div>
    </Tippy>
  }
}

export default Marker
