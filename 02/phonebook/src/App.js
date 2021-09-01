import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  })

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (!(persons.some((person) => person.name === newName))) {
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <AddPerson addName={addName} 
                 newName={newName} 
                 handleNameChange={handleNameChange} 
                 newNumber={newNumber} 
                 handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
    </div>
  )

}

export default App