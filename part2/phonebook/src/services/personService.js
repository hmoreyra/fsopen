import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return (
        axios
            .get(baseUrl)
            .then(res => res.data)
            .catch(() => {
                console.log(`error fetching all the persons`)
            })
    )
}

const postPerson = (person) => {
    return (
        axios
            .post(baseUrl, person)
            .then(res => res.data)
    )
}

const deletePerson = (personId) => {
    return (
        axios
            .delete(`${baseUrl}/${personId}`)
            .then(res => res.data)
    )
}

export default { getAll, postPerson, deletePerson }