import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
      personService.
        getAll()
        .then(people => {
          setPersons(people)
        })
        .catch(() => {
          console.log(`error fetching all the persons`)
        })
  },[])

  const handleDelete = (person) => {
    if(window.confirm(`Are you sure you want to delete "${person.name}"?`)){
      personService
        .deletePerson(person.id)
        .then(() => {
          setPersons(
            persons.filter(p => p.id !== person.id)
          )
        })
        .catch(() => {
            console.log(`error deleting person with id ${person.id}`)
        })
    }
  }
  
  const clearForm = () => {
    setNewName('')
    setPhoneNumber('')
  }

  const createNewPerson = () => {
    personService
      .createPerson({name: newName, number: phoneNumber})
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        clearForm()
      })
      .catch(() => {
          console.log(`error creating person with name ${newName}`)
      })
  }

  const updateExistingPerson = (person) => {
    personService.
    updatePerson(person.id, {id: person.id, name: newName, number: phoneNumber})
    .then(updatedPerson => {
      setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
      clearForm()
    })
    .catch(() => {
        console.log(`error updating person with name ${newName}`)
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(persons.some(p => p.number === phoneNumber)){
      alert(`The phone number '${phoneNumber}' has already been added to the phonebook.`)
      return
    }

    const existingByName = persons.find(p => p.name === newName)
    if(existingByName){
      const isConfirmedUpdate = 
        window.confirm(
          `"${existingByName.name}" is already added to the phonebook, replace the old number with a new one?`
        )
      if(isConfirmedUpdate){
        updateExistingPerson(existingByName)
      }
    }
    else{
      createNewPerson()
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} handleChange={e=>setFilter(e.target.value)}/>

      <h3>Add a new</h3>

      <PersonForm 
        handleSubmit={handleSubmit}
        nameValue={newName}
        numberValue={phoneNumber}
        handleNameChange={e => setNewName(e.target.value)}
        handleNumberChange={e => setPhoneNumber(e.target.value)}
      />
      
      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App