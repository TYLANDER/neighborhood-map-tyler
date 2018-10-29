import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'

/* NEXT STEPS
1. Add Filtering logic to map Markers ref: handleChangeBook(), "markers and list view should update accordingly in real time"
2. Add clicking on a pin to display more information.
3. Tie in Foursquare API to marker.

For Next Session:
1. Read about closures
2. Filter and Search Function JS built-ins
3. */

class App extends Component {
  render() {
    return (<div className="App">
      <Filter/>
      <Map/>
    </div>);
  }
}

export default App;
