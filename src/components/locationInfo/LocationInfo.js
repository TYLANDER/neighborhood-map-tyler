import React, {Component} from 'react';
import './styles.css';
import PropTypes from 'prop-types';

  
class LocationInfo extends Component {
    render() {
        console.log('Foursquare Data', this.props.foursquareData[0])
        const venue = this.props.foursquareData[0]
        return <div>
            { venue && <img src={venue.photoUrl} alt="Venue Photo" /> }
            <div>{this.props.location.name}</div>
            { venue && <div>{venue.location.crossStreet}</div> }
        </div>

    }    
}  

LocationInfo.propTypes ={
    location: PropTypes.object
}

export default LocationInfo;