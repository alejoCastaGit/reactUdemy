import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styles from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Alejandro', age: 24 },
      { id: 'p2', name: 'Lina', age: 23 },
      { id: 'p3', name: 'Teo', age: 24 }
    ],
    showPersons: false
  }

  changeNameHandler = (e, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index
    })

    const person = { ...this.state.persons[personIndex] }
    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        delete={this.deletePersonHandler}
        change={this.changeNameHandler}
        showPerson={this.togglePersonsHandler}
      />
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;