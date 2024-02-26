function ListGroup() {
    let items = [
        "Lahore", "Islamabad", "KPK", "Mardan", "Murree"
    ]
    items=[]; 
    
  return (
    <>
        <h1>List</h1> 
        <ul className="list-group">
          {items.length == 0 && <p>No item found</p> }
          {items.map((item)=>(
            <li className="list-group-item" key={item}>{item}</li>
          ))}
        </ul>
    </>
  );
}

export default ListGroup;
