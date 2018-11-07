import React, {Component} from 'react';
import './styles.css';




class Filter extends Component {

  render() {
    console.log('selected loc: ', this.props.selectedLocation)
    const items = this.props.filteredLocations.map(location => {
      const selected = this.props.selectedLocation.name === location.name
      const selectedClass = selected ? 'selected' : ''

      return <li className={selectedClass} key={location.name} onClick={() => { this.props.setSelectedLocation(location) }}>{location.name}</li>
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
