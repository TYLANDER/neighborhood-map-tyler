import React, {Component} from 'react';
import './styles.css';
import PropTypes from 'prop-types';

  
class LocationInfo extends Component {
    render() {
        console.log('this.props.foursquareData[0]', this.props.foursquareData[0])
        return <div>
            <div>{this.props.location.name}</div>
            { this.props.foursquareData[0] && <div>{this.props.foursquareData[0].location.crossStreet}</div> }
        </div>

    }    
}  

LocationInfo.propTypes ={
    location: PropTypes.object
}

export default LocationInfo;