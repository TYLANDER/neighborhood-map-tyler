import React, {Component} from 'react';
import './styles.css';
import locations from '../../locations'

class Filter extends Component {
  render() {
    const items = locations.map(location => {
      return <li key={location.name}>{location.name}</li>
    })
    return (
      <div className='filter-component'>
      <div>
        <h1>FILTER AREA</h1>
        <ul>
        {items}
        </ul>
      </div>
    </div>);
  }
}

export default Filter;
