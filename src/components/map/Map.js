import React, {Component} from 'react';
import './styles.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/Marker'

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
      return <Marker selected={selected} location={location} key={location.name} lat={location.lat} lng={location.lng} setSelectedLocation={this.props.setSelectedLocation}/>
    })

    return (<div style={{
        height: '100vh',
        width: '100%'
      }}>
      <GoogleMapReact bootstrapURLKeys={{
          key: googleMapKey
        }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        {Markers}
      </GoogleMapReact>
    </div>);
  }
}

export default Map;
