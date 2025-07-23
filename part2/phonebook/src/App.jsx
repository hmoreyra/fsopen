import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(persons.some(p => p.name === newName || p.number === phoneNumber)){
      alert(`Either the name '${newName}' or the phone number '${phoneNumber}' has already been added to the phonebook.`)
    }
    else{
      setPersons(persons.concat({name: newName, number: phoneNumber, id: persons.length + 1}))
      setNewName('')
      setPhoneNumber('')
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