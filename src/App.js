import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import AnimalListing from './AnimalListing'

class App extends Component {
  state = {
    animals: [],
    name: ''
  }
  showAllAnimals = () => {
    axios.get('http://localhost:3000/animals').then(response => {
      console.log(response.data)
      this.setState({
        animals: response.data
      })
    })
  }

  componentDidMount() {
    this.showAllAnimals()
  }

  incrementSeenCount = () => {
    console.log(this.state.animals)
    let allAnimalsListed = this.state.animals
    let AnimalSeenCount = []
    let allAnimalSeenSum = 0
    for (let i = 0; i < allAnimalsListed.length; i++) {
      console.log(allAnimalsListed[i].seen_count)
      allAnimalSeenSum += allAnimalsListed[i].seen_count
      console.log(allAnimalSeenSum)
    }
    return allAnimalSeenSum
  }

  handleSearchChange = event => {
    const location = event.target.value
    this.setState({ name: location }, () => {
      //make api call to search for animals

      fetch(`http://localhost:3000/animals?location=${this.state.name}`)
        .then(response => response.json())
        .then(response => {
          console.log(response.data)
          this.setState({ animals: response.data })
        })
    })
  }

  // removeAnimal = id => {
  //   axios.delete(`http://localhost:3000/animals/${id}`)
  // }

  submit = form => {
    console.log(form)
    fetch('http://localhost:3000/animals', {
      method: 'POST',

      body: JSON.stringify({ animal: form.formData })
    }).then(response => {
      fetch('http://localhost:3000/animals')
        .then(response => response.json())
        .then(response => {
          console.log(response)
          this.setState({ animals: response })
        })
    })
  }

  render() {
    return (
      <section>
        <h1>Search here:</h1>
        <input
          value={this.state.name}
          onChange={this.handleSearchChange}
          type="text"
        />
        <h3>The List of Animals Seen is:</h3>
        <ul>
          {this.state.animals.map(animal => {
            return <AnimalListing key={animal.id} animal={animal} />
          })}
        </ul>
        <section>
          <h1>Total of Animals Seen is: {this.incrementSeenCount()}</h1>
        </section>
        <section>
          <h1>Total Lions, Tigers, and Bears is: {this.state.ohMyCount}</h1>
        </section>
      </section>
    )
  }
}

export default App
