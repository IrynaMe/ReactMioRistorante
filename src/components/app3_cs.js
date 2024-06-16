import React, { Component } from 'react';
import MyNavbar from './myNavbar';
import Scheda_menu from './scheda_menu';
import Carello from './carello';
import '../App.css';
import zuppa1 from '../images/borshch.jpg';
import zuppa2 from '../images/shchi.jpg';
import piatto1 from '../images/draniki.jpeg';
import piatto2 from '../images/shuba.jpg';
import dolce1 from '../images/napoleon.jpg';
import dolce2 from '../images/honey_cake.jpg';

class App3_cs extends Component {
  counter = 0;

  categorie = [
    "primi",
    "secondi",
    "dolci"
  ];

  state = {
    piatti: [
      { id: 1, name: "Borshcht", image: zuppa1, descr: "Zuppa densa a base di barbabietole", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[0], prezzo: 8.50, quantity: 0, stato: 1 },
      { id: 2, name: "Shchi", image: zuppa2, descr: "Zuppa rustica e saporita a base di cavolo", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[0], prezzo: 9.50, quantity: 0, stato: 1 },
      { id: 3, name: "Aringa sotto una coperta", image: piatto2, descr: "Insalata stratificata di aringhe salate con verdure e uova", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[1], prezzo: 7.50, quantity: 0, stato: 1 },
      { id: 4, name: "Draniki", image: piatto1, descr: "Frittelle di patate", testo_btn2: "Ordina", testo_btn1: "Elimina", categoria: this.categorie[1], prezzo: 8.50, quantity: 0, stato: 1 },
      { id: 5, name: "Napoleon", image: dolce1, descr: "Torta di pasta sfoglia e crema pasticcera", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[2], prezzo: 9.50, quantity: 0, stato: 1 },
      { id: 6, name: "Torta al miele", image: dolce2, descr: "Torta di pasta al miele con una crema leggera", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[2], prezzo: 7.50, quantity: 0, stato: 1 }
    ],
    prezzo_finale: 0
  };

  cambia_stato_categoria = (cat) => {
    this.setState(prevState => ({
      piatti: prevState.piatti.map(piatto =>
        // Check if the piatto's category matches the given category
        piatto.categoria === cat
          // If it matches, create a new object with all properties of piatto and toggle the stato property
          ? { ...piatto, stato: piatto.stato === 1 ? 0 : 1 }
          // If it doesn't match, return the piatto object as is
          : piatto
      )
    }));
  }

  add_in_carello = (id_to_add) => {
    // Use setState to update the state based on the previous state
    this.setState(prevState => {
      // Create a new array of piatti with the quantity updated for the specific piatto
      const updatedPiatti = prevState.piatti.map(piatto =>
        // Check if the piatto's id matches the id_to_add
        piatto.id === id_to_add
          // If it matches, create a new object with all properties of piatto and increment the quantity
          ? { ...piatto, quantity: piatto.quantity + 1 }
          // If it doesn't match, return the piatto object as is
          : piatto
      );
  
      // Find the updated piatto object that matches the id_to_add
      const piattoToAdd = updatedPiatti.find(piatto => piatto.id === id_to_add);
  
      // Calculate the new total price by adding the price of the added piatto
      const newPrezzoFinale = prevState.prezzo_finale + piattoToAdd.prezzo;
  
      // Return the new state object
      return {
        // Update the piatti array with the updated quantities
        piatti: updatedPiatti,
        // Update the total price
        prezzo_finale: newPrezzoFinale
      };
    });
  }
  
  delete_from_carello = (id_to_delete) => {
    // Use setState to update the state based on the previous state
    this.setState(prevState => {
      // Find the piatto object that matches the id_to_delete
      const piattoToDelete = prevState.piatti.find(piatto => piatto.id === id_to_delete);
  
      // If no matching piatto is found or its quantity is already 0, do not update the state
      if (!piattoToDelete || piattoToDelete.quantity === 0) {
        return null; // No change needed if item not found or quantity is already 0
      }
  
      // Create a new array of piatti with the quantity updated for the specific piatto
      const updatedPiatti = prevState.piatti.map(piatto =>
        // Check if the piatto's id matches the id_to_delete
        piatto.id === id_to_delete
          // If it matches, create a new object with all properties of piatto and decrement the quantity
          ? { ...piatto, quantity: piatto.quantity - 1 }
          // If it doesn't match, return the piatto object as is
          : piatto
      );
  
      // Calculate the new total price by subtracting the price of the deleted piatto
      const updatedPrezzoFinale = prevState.prezzo_finale - piattoToDelete.prezzo;
  
      // Return the new state object
      return {
        // Update the piatti array with the updated quantities
        piatti: updatedPiatti,
        // Update the total price
        prezzo_finale: updatedPrezzoFinale
      };
    });
  }
  

  ripristina_all_cards = () => {
    // Use setState to update the state based on the previous state
    this.setState(prevState => (
      {
        // Create a new array of piatti with the stato property set to 1 for each piatto
        piatti: prevState.piatti.map(piatto => (
          // Create a new piatto object with all properties of piatto and set stato to 1
          { ...piatto, stato: 1 }
        )),
      }
    ));
  }

  render() {
    return (
      <>
        <MyNavbar />
        <div className="container py-4 ">
          <h3 style={{ textAlign: 'center' }}>Cosa desideri ordinare?</h3>
          <hr />

          <div className="row " style={{ padding: '1%' }}>
            <div className="col-9" style={{ textAlign: 'center' }}>
              <div className="row" style={{ padding: '1%' }}>
                <div className="py-2" >
                  {this.categorie.map((categoria, index) => {
                    const isCategoryVisible = this.state.piatti.some(piatto => piatto.categoria === categoria && piatto.stato === 1);
                    return (
                      <button
                        key={index}
                        style={{ margin: '10px' }}
                        className={`btn ${isCategoryVisible ? 'btn-outline-danger' : 'btn-danger'}`}
                        onClick={() => this.cambia_stato_categoria(categoria)}
                      >
                        {isCategoryVisible ? "Nascondi " : "Mostra "} {categoria}
                      </button>
                    );
                  })}
                  <button style={{ margin: '10px' }} className="btn btn-outline-dark" onClick={this.ripristina_all_cards}>Mostra tutto</button>
                </div>

                {this.state.piatti.map((piatto) =>
                  piatto.stato === 1 ? (
                    <Scheda_menu key={piatto.id} card={piatto} add_ordine={() => this.add_in_carello(piatto.id)} />
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
                      <tr >

                        <th scope="col">Piatto</th>
                        <th scope="col">Qtà</th>
                        <th scope="col">€</th>
                        <th scope="col">Modifica</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.state.piatti
                        .filter(piatto => piatto.quantity > 0)
                        .map((piatto, counter) => {
                          counter += 1;
                          return <Carello key={piatto.id} count={counter} card={piatto} elimina_dal_carello={() => this.delete_from_carello(piatto.id)} aggiungi_in_carello={() => this.add_in_carello(piatto.id)} />;
                        })}
                    </tbody>
                    <tfoot>

                      <td colSpan="4">
                        <p className="bg-danger col-12 p-2" style={{ width: '100%', borderRadius: "5px", color: "white" }}>
                          Prezzo finale: {this.state.prezzo_finale.toFixed(2)} €
                        </p>
                      </td>

                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App3_cs;
