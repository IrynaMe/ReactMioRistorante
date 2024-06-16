function Carello(props) {
  const buttonStyle = {
    margin: '3px'  
  };

  return (
    <tr >
      <td scope="row">{props.card.name}</td>
      <td scope="row">{props.card.quantity}</td>
      <td scope="row">{props.card.prezzo}</td>
      <td scope="row">
        <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={props.aggiungi_in_carello}>+</button>
        <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={props.elimina_dal_carello}>-</button>
      </td>
    </tr>
  );
}

export default Carello;