import React, { Component } from 'react'
import axios from 'axios'

class AnimalListing extends Component {
  // removeAnimal = () => {
  //   axios
  //     .delete(`http://localhost:3000/animals/${this.props.id}`)
  //     .then(response => {
  //       console.log(response)
  //       this.props.showAnimalList()
  //     })
  // }
  render() {
    return (
      <>
        <li>
          <p>
            A total of {this.props.animal.seenAmount}
            {this.props.animal.species}s were seen here!
          </p>
          <p>Last seen location: {this.props.animal.locationSeen}</p>
          <button className="delete-animal" onClick={this.removeAnimal}>
            X
          </button>
        </li>
      </>
    )
  }
}

export default AnimalListing
