import Country from "./Country"

const Countries = ({countries, search}) => {
    const filtered = countries
        .filter(c =>
            c.name.common.toLowerCase().includes(search.toLowerCase())
        )

    if (filtered.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    if (filtered.length > 1){
        return (
            filtered.map(c => <div key={c.cca3}>{c.name.common}</div>)
        )
    }

    if (filtered.length === 1){
        return <Country country={filtered[0]}/>
    }

    else{
        return <p>No results</p>
    }
}

export default Countries

