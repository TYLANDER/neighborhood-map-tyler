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
    markerInfo: locations

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

  showMarkerInfo = (event) => {
    var markerInfo = this.state.locations;
    markerInfo = markerInfo.filter(function(item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({markerInfo: locations})
  }
//pulling in the data from the foursquare API
  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore'
    const parameters = {
      client_id: "0RC1CRVJRVCWLETOSECTROX2YFKXKVGLYV5HJZGQYSZDSWBY",
      client_secret: "0OZ3RJX4CKQ2JYDOIN5NS3HPDJ0BACXBJ01THBE0NXU5MTE5",
      query: "food",
      near: "San Francisco, CA",
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      console.log(response, 'Axios response fired')
    })
    .catch(error => {
      console.log("ERROR!! " + error)
    })
  }
/*
  locationInfo = (locations) => {
    var tooltipContent = this.state.locations;
    updateToolTip = tooltipContent.filter(function(item) {
    });
    this.setState({mapLocations: updatedList});
  }
  */

  render() {
    return (<div className="App">
      <Filter filteredLocations={this.state.filteredLocations} filterList={this.filterList}/>
      <Map google={this.props.google} className='map' filteredLocations={this.state.filteredLocations}/>
    </div>);
  }
}

export default App;
