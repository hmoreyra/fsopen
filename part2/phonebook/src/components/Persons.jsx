import Person from "./Person"

const Persons = ({persons, filter}) => {

    const personsToShow = filter === '' 
        ? persons 
        : persons.filter(p => 
            p.name.toLowerCase().includes(filter.toLowerCase())
        )

    return(
        <div>
            {personsToShow.map(person => 
                <Person key={person.name} person={person}/>
            )}
        </div>
    )
}

export default Persons
