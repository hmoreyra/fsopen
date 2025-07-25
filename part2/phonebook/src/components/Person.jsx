import './Person.css'

const Person = ({person, handleDelete}) =>{
    return(
        <div className="person-row">
            <p className="person-text">{person.name} {person.number}</p>
            <button className="person-button" onClick={() => handleDelete(person)}>delete</button>
        </div>
    )
}

export default Person