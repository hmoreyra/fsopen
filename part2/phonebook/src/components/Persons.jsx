import Person from "./Person"

const Persons = ({persons, filter, handleDelete}) => {

    const personsToShow = filter === '' 
        ? persons 
        : persons.filter(p => 
            p.name.toLowerCase().includes(filter.toLowerCase())
        )

    return(
        <div>
            {personsToShow.map(person => 
                <Person key={person.name} person={person} handleDelete={handleDelete}/>
            )}
        </div>
    )
}

export default Persons
