const Country = ({country}) => {
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital(s): {country.capital?.join(', ')}</p>
            <p>Area: {country.area} km²</p>

            <h2> Languages: </h2>
            <ul>
                {country.languages && Object.entries(country.languages).map(([code, lang]) => (
                    <li key={code}>{lang}</li>
                ))}
            </ul>

            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="256" />
        </div>
    )
}

export default Country