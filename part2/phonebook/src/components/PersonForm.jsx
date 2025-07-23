const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                Name: <input value={props.nameValue} onChange={props.handleNameChange}/>
            </div>

            <div>
                Number: <input value={props.numberValue} onChange={props.handleNumberChange}/>
            </div>

            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm