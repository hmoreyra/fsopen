import Country from "./Country"
import { useState, useEffect } from "react"

const Countries = ({countries, search}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        setSelectedCountry(null)
    }, [search])

    const filtered = countries.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
    )

    if (filtered.length === 0){
        return <p>No results</p>
    }

    if (filtered.length === 1) {
        return <Country country={filtered[0]} />
    }

    if (filtered.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        <div>
            {filtered.map(c => (
                <div key={c.cca3}>
                    {c.name.common}
                    <button onClick={() => setSelectedCountry(c)}>Show</button>
                </div>
            ))}

            {selectedCountry && <Country country={selectedCountry} />}
        </div>
    )
}

export default Countries

