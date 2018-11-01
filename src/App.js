import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'
import locations from './locations'

/* HOMEWORK:
1. Refactor Marker.js to create a LocationInfo.js component for the tooltip content prop.
*/




class App extends Component {
  state = {
    locations,
    filteredLocations: locations
  }

  filterList = (event) => {
    var updatedList = this.state.locations;
    updatedList = updatedList.filter(function(item) {
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredLocations: updatedList});
  }

  render() {
    return (<div className="App">
      <Filter filteredLocations={this.state.filteredLocations} filterList={this.filterList}/>
      <Map google={this.props.google} className='map' filteredLocations={this.state.filteredLocations}/>
    </div>);
  }
}

export default App;
