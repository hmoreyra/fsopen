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
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(persons.some(p => p.name === newName || p.number === phoneNumber)){
      alert(`Either the name '${newName}' or the phone number '${phoneNumber}' has already been added to the phonebook.`)
    }
    else{
      personService
        .postPerson({name: newName, number: phoneNumber})
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setPhoneNumber('')
        })
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

      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App