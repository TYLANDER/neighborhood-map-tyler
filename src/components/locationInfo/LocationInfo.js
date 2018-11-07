import React, {Component} from 'react';
import './styles.css';

  
class LocationInfo extends Component {
    render() {
        return <div>{this.props.location.name}</div>
    }    
}  
  
  export default LocationInfo;
  