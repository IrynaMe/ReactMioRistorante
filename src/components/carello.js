function Carello(props) {
  const buttonStyle = {
    margin: '3px'  
  };

  return (
    <tr >
      <td >{props.card.name}</td>
      <td >{props.card.quantity}</td>
      <td >{props.card.prezzo}</td>
      <td >
        <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={props.aggiungi_in_carello}>+</button>
        <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={props.elimina_dal_carello}>-</button>
      </td>
    </tr>
  );
}

export default Carello;