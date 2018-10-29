import React, {Component} from 'react';
import './styles.css';
import locations from '../../locations'

class Filter extends Component {
  state = {
    locations,
    items:locations
  }

  filterList = (event) => {
    var updatedList = this.state.locations;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  moreInfo = () => {
    console.log("Showing Info From Foursquare API")
    //this function should display more info on the map about the restaurant. 
  }

  render() {
    console.log(this.state)
    const items = this.state.items.map(location => {
      return <li key={location.name} onClick={this.moreInfo}>{location.name}</li>
    })
    return (
      <div className='filter-component'>
      <div>
        <h1>FILTER AREA</h1>
        <input type='text' placeholder='filter dim sum' onChange={this.filterList}/>
        <ul>
        {items}
        </ul>
      </div>
    </div>);
  }
}

export default Filter;
