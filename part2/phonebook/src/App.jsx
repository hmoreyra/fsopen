import { useState } from 'react'

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
      alert(`"Either the name '${newName}' or the phone number '${phoneNumber}' has already been added to the phonebook.`)
    }
    else{
      setPersons(persons.concat({name: newName, number: phoneNumber}))
      setNewName('')
      setPhoneNumber('')
    }
  }

  const personsToShow = filter === '' 
    ? persons 
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Filter shown with: <input value={filter} onChange={e => setFilter(e.target.value)}/>
      </div>

      <h2>Add a new</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          Number: <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App