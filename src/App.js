import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'

/* HOMEWORK:
1. Refactor Marker.js to create a LocationInfo.js component for the tooltip content prop.
*/


class App extends Component {
  render() {
    return (<div className="App">
      <Filter/>
      <Map google={this.props.google} className='map' />
    </div>);
  }
}

export default App;
