import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'
import locations from './locations'
import axios from 'axios'

//My Foursquare Keys
const foursquareAPIKeys = {
  clientId: '0RC1CRVJRVCWLETOSECTROX2YFKXKVGLYV5HJZGQYSZDSWBY',
  clientSecret: '0OZ3RJX4CKQ2JYDOIN5NS3HPDJ0BACXBJ01THBE0NXU5MTE5',
  v: "20181107"
}

//The App Entry Point
class App extends Component {
  state = {
    locations,
    filteredLocations: locations,
    foursquareVenueData: [],
    selectedLocation: {},


  }

  componentDidMount() {
    this.getAllVenues()
  }

  filterList = (event) => {
    var updatedList = this.state.locations;
    updatedList = updatedList.filter(function(item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredLocations: updatedList});
  }

  setSelectedLocation = (location) => {
    this.setState({selectedLocation: location})
  }


//pulling in the data from the foursquare API
  getVenue = (name) => {
    const endPoint = 'https://api.foursquare.com/v2/venues/search?'
    const parameters = {
      client_id: foursquareAPIKeys.clientId,
      client_secret: foursquareAPIKeys.clientSecret,
      query: name,
      near: "San Francisco, CA",
      v: foursquareAPIKeys.v
    }

    const url = endPoint + new URLSearchParams(parameters);

    let venue = ''

    axios.get(url)
      .then(response => {
        venue = response.data.response.venues[0]
        return this.getPhoto(venue.id)
      }).then(photoUrl => {
        venue.photoUrl = photoUrl
        const venues = this.state.foursquareVenueData.slice()

        venues.push(venue)

        this.setState({
          foursquareVenueData: venues
        })
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

  getPhoto = (venueId) => {
    const endPoint = 'https://api.foursquare.com/v2/venues/' + venueId + '/photos?'
    const parameters = {
      client_id: foursquareAPIKeys.clientId,
      client_secret: foursquareAPIKeys.clientSecret,
      v: foursquareAPIKeys.v
    }

    const url = endPoint + new URLSearchParams(parameters);

    return axios.get(url)
      .then(response => {
        console.log('photo res', response)
        const photoObj = response.data.response.photos.items[0]
        const size = '200x200'
        const photoUrl = photoObj.prefix + size + photoObj.suffix
        return photoUrl
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

  getAllVenues = () => {
    for (let i = 0; i < locations.length; i++) {
      this.getVenue(locations[i].name)
    }
  }

  render() {

    const { selectedLocation, filteredLocations, foursquareVenueData } = this.state

    return (<div className="App">
      <Filter 
        filteredLocations={filteredLocations} 
        filterList={this.filterList} 
        setSelectedLocation={this.setSelectedLocation} 
        selectedLocation={selectedLocation}
      />
      <Map 
        role="application"
        className='map' 
        filteredLocations={filteredLocations} 
        setSelectedLocation={this.setSelectedLocation} 
        selectedLocation={selectedLocation}
        foursquareVenueData={foursquareVenueData}
      />
    </div>);
  }
}

App.propTypes ={

}


export default App;
