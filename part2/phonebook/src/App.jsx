import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(persons.some(p => p.name === newName || p.phoneNumber === phoneNumber)){
      alert(`"Either the name '${newName}' or the phone number '${phoneNumber}' has already been added to the phonebook.`)
    }
    else{
      setPersons(persons.concat({name: newName, phoneNumber: phoneNumber}))
      setNewName('')
      setPhoneNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phoneNumber}</p>)}
    </div>
  )
}

export default App