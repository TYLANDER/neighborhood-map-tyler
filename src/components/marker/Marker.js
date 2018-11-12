import React from 'react'
import './styles.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import LocationInfo from '../locationInfo/LocationInfo'
import PropTypes from 'prop-types';



export class Marker extends React.Component {
  handleClick = () => {
   // this.showMarkerInfo()
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.selected && !prevProps.selected) {
      setTimeout(() => { this.tip.show() }, 0);
    }
}
  render() {
    return <Tippy 
      trigger="click manual" 
      content={<LocationInfo location={this.props.location} foursquareData={this.props.foursquareData}/>}
      onCreate={tip => (this.tip = tip)}
    >
      <div 
        className='pin' 
        onClick={() => this.props.setSelectedLocation(this.props.location) }
      />
    </Tippy>
  }
}

Marker.propTypes = {
  setSelectedLocation: PropTypes.func,
  location: PropTypes.object,
  selected: PropTypes.bool,
  name: PropTypes.string,
}

export default Marker
