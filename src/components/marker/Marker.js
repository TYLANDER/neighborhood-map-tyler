import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'




export class Marker extends React.Component {
  handleClick = () => {
    console.log('Pin clicked')
  }
  render() {
    return <div className='pin' onClick={this.handleClick}></div>
  }
}

export default Marker
