import React, {Component} from 'react';
import './App.css';
import Filter from './components/filter/Filter'
import Map from './components/map/Map'

class App extends Component {
  render() {
    return (<div className="App">
      <Filter/>
      <Map/>
    </div>);
  }
}

export default App;
