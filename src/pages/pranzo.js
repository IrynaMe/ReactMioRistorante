import '../App.css';
import Scheda_menu from '../components/scheda_menu';
import Carello from '../components/carello';


function Pranzo(props) {
    const { categorie, formulaPasti, state, cambia_stato_categoria, add_in_carello, delete_from_carello, ripristina_all_cards } = props;

    return (
        <div className="container py-4 ">
            <h3 style={{ textAlign: 'center' }}>{props.title}</h3>
            <hr />

            <div className="row " style={{ padding: '1%' }}>
                <div className="col-9" style={{ textAlign: 'center' }}>
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
                                && piatto.formula === formulaPasti[1])
                                ? (
                                    <Scheda_menu key={piatto.id} card={piatto} add_ordine={() => add_in_carello(piatto.id)} />
                                ) : null
                        )}
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="p-4">
                        <h3>Il tuo ordine:</h3>
                        <div className='col '>
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
                                        .map((piatto, counter) => {
                                            return <Carello key={piatto.id} count={counter} card={piatto} elimina_dal_carello={() => delete_from_carello(piatto.id)} aggiungi_in_carello={() => add_in_carello(piatto.id)} />;
                                        })}
                                </tbody>
                                <tfoot>
                                    <td colSpan="4">
                                        <p className="bg-danger col-12 p-2" style={{ width: '100%', borderRadius: "5px", color: "white" }}>
                                            Prezzo finale: {state.prezzo_finale.toFixed(2)} €
                                        </p>
                                    </td>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pranzo;
