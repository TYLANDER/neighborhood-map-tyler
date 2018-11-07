import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'
import locations from './locations'
import axios from 'axios'

/* HOMEWORK:
1. Refactor Marker.js to create a LocationInfo.js component for the tooltip content prop.
*/



class App extends Component {
  state = {
    locations,
    filteredLocations: locations,
    venues: [],
    selectedLocation: null

  }

  componentDidMount() {
    this.getVenues()
  }

  filterList = (event) => {
    var updatedList = this.state.locations;
    updatedList = updatedList.filter(function(item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredLocations: updatedList});
  }

  setSelectedLocation = (location) => {
    console.log('Set Selected Location: ', location)
    this.setState({selectedLocation: location})
  }


//pulling in the data from the foursquare API
  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore'
    const parameters = {
      client_id: "0RC1CRVJRVCWLETOSECTROX2YFKXKVGLYV5HJZGQYSZDSWBY",
      client_secret: "0OZ3RJX4CKQ2JYDOIN5NS3HPDJ0BACXBJ01THBE0NXU5MTE5",
      query: "food",
      near: "San Francisco, CA",
      v: "20181107"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      })
      console.log(response.data.response.groups[0].items, 'Axios response fired')
    })
    .catch(error => {
      console.log("ERROR!! " + error)
    })
  }

  render() {
    return (<div className="App">
      <Filter filteredLocations={this.state.filteredLocations} filterList={this.filterList} setSelectedLocation={this.setSelectedLocation}/>
      <Map google={this.props.google} className='map' filteredLocations={this.state.filteredLocations} setSelectedLocation={this.setSelectedLocation}/>
    </div>);
  }
}

export default App;
