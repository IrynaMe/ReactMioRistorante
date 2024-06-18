import React from 'react';

function Carello(props) {
  const { state, add_in_carello, delete_from_carello } = props;
  
  const buttonStyle = {
    margin: '3px'  
  };

  return (
    <div className="p-4">
      <h3>Il tuo ordine:</h3>
      <div className='col'>
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">Piatto</th>
              <th scope="col">Qtà</th>
              <th scope="col">€</th>
              <th scope="col">Modifica</th>
            </tr>
          </thead>
          <tbody>
            {state.piatti
              .filter(piatto => piatto.quantity > 0)
              .map((piatto, counter) => (
                <tr key={piatto.id}>
                  <td>{piatto.name}</td>
                  <td>{piatto.quantity}</td>
                  <td>{piatto.prezzo}</td>
                  <td>
                    <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={() => add_in_carello(piatto.id)}>+</button>
                    <button className="btn btn-sm btn-danger bg-gradient" style={buttonStyle} onClick={() => delete_from_carello(piatto.id)}>-</button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <p className="bg-danger col-12 p-2" style={{ width: '100%', borderRadius: "5px", color: "white" }}>
                  Prezzo finale: {state.prezzo_finale.toFixed(2)} €
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Carello;