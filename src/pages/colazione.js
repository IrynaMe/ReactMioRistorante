

import '../App.css';
import Scheda_menu from '../components/scheda_menu';
import Carello from '../components/carello';


function Colazione(props) {
  const { categorie, formulaPasti, state, cambia_stato_categoria, add_in_carello, delete_from_carello, ripristina_all_cards } = props;

  return (
    <div className="container py-4 ">
      <h3 style={{ textAlign: 'center' }}>{props.title}</h3>
      <hr />

      <div className="row " style={{ padding: '1%' }}>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <div className="row" style={{ padding: '1%' }}>
            <div className="py-2" >
              {categorie.map((categoria) => {
                const isCategoryVisible = state.piatti.some(piatto => piatto.categoria === categoria && piatto.stato === 1);
                return (
                  <button
                    style={{ margin: '10px' }}
                    className={`btn ${isCategoryVisible ? 'btn-outline-danger' : 'btn-danger'}`}
                    onClick={() => cambia_stato_categoria(categoria)}
                  >
                    {isCategoryVisible ? "Nascondi " : "Mostra "} {categoria}
                  </button>
                );
              })}
              <button style={{ margin: '10px' }} className="btn btn-outline-dark" onClick={ripristina_all_cards}>Mostra tutto</button>
            </div>

            {state.piatti.map((piatto) =>
        
              (piatto.stato === 1
              &&piatto.formula===formulaPasti[0])
              ? (
                <Scheda_menu key={piatto.id} card={piatto} add_ordine={() => add_in_carello(piatto.id)} />
              ) : null
            )}
          </div>
        </div>


      </div>
    </div>
  );
}

export default Colazione;
