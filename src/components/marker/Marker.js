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

  state = {
    pinClass: "pin"
  }

  componentDidUpdate = (prevProps) => {
    const isMarkerSelected = this.props.selected && !prevProps.selected
    const markerDeselect = prevProps.selected && !this.props.selected 
    if (isMarkerSelected) {
      setTimeout(() => { this.tip.show() }, 0);
      this.setState({pinClass: "pin animate"} )
    } else if (markerDeselect){
      this.setState({pinClass: "pin"})
    }
  }

  render() {
    return <Tippy 
      trigger="manual" 
      content={<LocationInfo location={this.props.location} foursquareData={this.props.foursquareData}/>}
      onCreate={tip => (this.tip = tip)}
      theme = "tyler"
    >
      <div 
        className={this.state.pinClass} 
        onClick={ () => this.props.setSelectedLocation(this.props.location) }
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
