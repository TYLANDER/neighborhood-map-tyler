import React, {Component} from 'react';
import './styles.css';
import PropTypes from 'prop-types';





class Filter extends Component {
  render() {
    const items = this.props.filteredLocations.map(location => {
      const selected = this.props.selectedLocation.name === location.name
      const selectedClass = selected ? 'selected' : ''

      return <li className={selectedClass} tabindex="0" key={location.name} onClick={() => { this.props.setSelectedLocation(location) }}>{location.name}</li>
    })
    return (<div className='filter-component'>
      <div>
        <h1>FILTER AREA</h1>
        <input tabindex="1" type='text' placeholder='filter dim sum' onChange={this.props.filterList}/>
        <ul className='filter-list'tabindex="2">
          {items}
        </ul>
      </div>
    </div>);
  }
}

Filter.propTypes = {
  filteredLocations: PropTypes.array,
  selectedLocation: PropTypes.object,
  filterList: PropTypes.func.isRequired
};

export default Filter;
