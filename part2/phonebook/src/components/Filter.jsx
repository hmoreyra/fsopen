const Filter = (props) => {
    return (
        <div>
            Filter shown with: <input value={props.filter} onChange={props.handleChange}/>
        </div>
    )
}

export default Filter