function Books (props) {
    return (
        <> 
    <h3>Genre {props.name}</h3>
    <p>{props.role ? props.role : 'No role'}</p>
    </>
    )  
 }

export default Books;