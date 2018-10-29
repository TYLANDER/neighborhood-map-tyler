import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'

/* NEXT STEPS
1. get map rendering in the maps area.
2. Get 1 pin to render on the map.
3. Loop through an array of Pins.
4. Render the pin's var in the filter area to show all locations.
5. Filtering. */

class App extends Component {
  render() {
    return (<div className="App">
      <Filter/>
      <Map/>
    </div>);
  }
}

export default App;
