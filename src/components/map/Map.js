import React, {Component} from 'react';
import './styles.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/Marker'
import PropTypes from 'prop-types';

const googleMapKey = 'AIzaSyB1jeZYx7O8UR-TFm5K1e3ZBdkd5cEWcsw';

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 37.7775,
      lng: -122.4333
    },
    zoom: 13
  };

  render() {
    const Markers = this.props.filteredLocations.map(location => {
      const selected = this.props.selectedLocation.name === location.name
      const foursquareSingleLocation = this.props.foursquareVenueData.filter(venue => venue.name.includes(location.name)) 
      return <Marker 
      selected={selected} 
      location={location} 
      key={location.name} 
      lat={location.lat} 
      lng={location.lng} 
      setSelectedLocation={this.props.setSelectedLocation}
      foursquareData={foursquareSingleLocation}
      />
    })

    return (<div className='map'>
      <GoogleMapReact bootstrapURLKeys={{
          key: googleMapKey
        }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        {Markers}
      </GoogleMapReact>
    </div>);
  }
}

Map.propTypes = {
  center: PropTypes.object,
  filteredLocations: PropTypes.array,
  zoom: PropTypes.number,
  selectedLocation: PropTypes.object,
  selected: PropTypes.bool,
  location: PropTypes.string,
  foursquareVenueData: PropTypes.array

}

export default Map;
