import React, { Component } from 'react'
import axios from 'axios'

class AnimalListing extends Component {
  render() {
    return (
      <li>
        <p>
          A total of {this.props.seenAmount} {this.props.species}s were seen
          here!
        </p>
        <p>Last seen location: {this.props.locationSeen}</p>
        <button
          className="delete-animal"
          onClick={this.props.removeAnimal(this.props.id)}
        >
          X
        </button>
      </li>
    )
  }
}

export default AnimalListing
