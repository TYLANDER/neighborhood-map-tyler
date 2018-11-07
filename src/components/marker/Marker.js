import React from 'react'
import './styles.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import LocationInfo from '../locationInfo/LocationInfo'
import tippy from 'tippy.js';



export class Marker extends React.Component {
  handleClick = () => {
   // this.showMarkerInfo()
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.selected && !prevProps.selected) {
      console.log('should show tip for: ', this.props.location.name, this.tip)
      setTimeout(() => { this.tip.show() }, 0);
    }
}
  render() {
    return <Tippy 
      trigger="click manual" 
      content={<LocationInfo location={this.props.location}/>}
      onCreate={tip => (this.tip = tip)}
    >
      <div 
        className='pin' 
        onClick={() => this.props.setSelectedLocation(this.props.location) }
      />
    </Tippy>
  }
}

export default Marker
