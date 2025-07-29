import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [countrySearch, setCountrySearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (e) => {
    setCountrySearch(e.target.value)
  }

  return (
    <div>
      <span>
        find countries 
        <input value={countrySearch} onChange={handleSearch}/>
      </span>

      <Countries countries={countries} search={countrySearch}/>
      
    </div>
  )
}

export default App
