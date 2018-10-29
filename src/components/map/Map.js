import React, {Component} from 'react';
import './styles.css';
import GoogleMapReact from 'google-map-react';

const googleMapKey = 'AIzaSyB1jeZYx7O8UR-TFm5K1e3ZBdkd5cEWcsw';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.7775,
      lng: -122.4333
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.7775}
            lng={-122.4333}
            text={'Alamo Square Park'}
          />
        </GoogleMapReact>
    </div>);
  }
}

export default Map;
