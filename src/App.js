import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'
import Marker from './components/Marker'

/* NEXT STEPS
1. Add Filtering logic to map Markers ref: handleChangeBook(), "markers and list view should update accordingly in real time"
2. Add clicking on a pin to display more information.
3. Tie in Foursquare API to marker.

For Next Session:
1. Read about closures
2. Filter and Search Function JS built-ins
3. */

/* Tylers log
1. Added more listings.
2. Beginning to add Markers, Got stuck.
3. Messing around with the 'google-maps-react' api
4. Setup Foursquare API */

class App extends Component {
  render() {
    return (<div className="App">
      <Filter/>
      <Map google={this.props.google} className={'map'}>
        <Marker title={'The marker`s title will appear as a tooltip.'} name={'SOMA'} position={{
            lat: 37.778519,
            lng: -122.405640
          }}/>
        <Marker name={'Dolores park'} position={{
            lat: 37.759703,
            lng: -122.428093
          }}/>
        <Marker/>
      </Map>
    </div>);
  }
}

export default App;
