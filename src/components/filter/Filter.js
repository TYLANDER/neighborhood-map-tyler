import React, {Component} from 'react';
import './styles.css';




class Filter extends Component {

  moreInfo = () => {
    console.log("Showing Info From Foursquare API")
    //this function should display more info on the map about the restaurant.

  }

  render() {
    const items = this.props.filteredLocations.map(location => {
      return <li key={location.name} onClick={() => { this.props.setSelectedLocation(location) }}>{location.name}</li>
    })
    return (<div className='filter-component'>
      <div>
        <h1>FILTER AREA</h1>
        <input type='text' placeholder='filter dim sum' onChange={this.props.filterList}/>
        <ul>
          {items}
        </ul>
      </div>
    </div>);
  }
}

export default Filter;
