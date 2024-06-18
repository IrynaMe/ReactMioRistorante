import React, { Component } from 'react';
//import MyNavbar from './myNavbar';
//import MyNavbar2 from './myNavbar2';
//import Scheda_menu from './scheda_menu';
//import Carello from './carello';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout';
import PrimaPagina from '../pages/primapagina';

import zuppa1 from '../images/borshch.jpg';
import zuppa2 from '../images/shchi.jpg';
import piatto1 from '../images/draniki.jpeg';
import piatto2 from '../images/shuba.jpg';
import dolce1 from '../images/napoleon.jpg';
import dolce2 from '../images/honey_cake.jpg';
import aperitivo1 from '../images/ikra.jpg';
import aperitivo2 from '../images/narezka.jpg';
import aperitivo3 from '../images/shashlyk.jpg';
import Colazione from '../pages/colazione';
import Pranzo from '../pages/pranzo';
import Aperitivo from '../pages/aperitivo';

class App4_cs extends Component {
  ArrayLink = [
    { link: "Colazione", testoLink: "Formula Colazione" },
    { link: "Pranzo", testoLink: "Formula Pranzo" },
    { link: "Aperitivo", testoLink: "Formula Aperitivo" },
  ];

  categorie = [
    "primi",
    "secondi",
    "dolci"
  ];

  formulaPasti = [
    "formula colazione",
    "formula pranzo",
    "formula aperitivo"
  ]

  state = {
    piatti: [
      { id: 1, name: "Borshcht", image: zuppa1, descr: "Zuppa densa a base di barbabietole", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[0], formula: this.formulaPasti[1], prezzo: 8.50, quantity: 0, stato: 1 },
      { id: 2, name: "Shchi", image: zuppa2, descr: "Zuppa rustica e saporita a base di cavolo", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[0], formula: this.formulaPasti[1], prezzo: 9.50, quantity: 0, stato: 1 },
      { id: 3, name: "Aringa sotto una coperta", image: piatto2, descr: "Insalata stratificata di aringhe salate con verdure e uova", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[1], formula: this.formulaPasti[1], prezzo: 7.50, quantity: 0, stato: 1 },
      { id: 4, name: "Draniki", image: piatto1, descr: "Frittelle di patate", testo_btn2: "Ordina", testo_btn1: "Elimina", categoria: this.categorie[1], formula: this.formulaPasti[1], prezzo: 8.50, quantity: 0, stato: 1 },
      { id: 5, name: "Napoleon", image: dolce1, descr: "Torta di pasta sfoglia e crema pasticcera", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[2], formula: this.formulaPasti[0], prezzo: 9.50, quantity: 0, stato: 1 },
      { id: 6, name: "Torta al miele", image: dolce2, descr: "Torta di pasta al miele con una crema leggera", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[2], formula: this.formulaPasti[0], prezzo: 7.50, quantity: 0, stato: 1 },
      { id: 7, name: "Shashlik", image: aperitivo3, descr: "Spiedini di carne marinata", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[1], formula: this.formulaPasti[2], prezzo: 8.50, quantity: 0, stato: 1 },
      { id: 8, name: "Affettato misto", image: aperitivo2, descr: "Prosciutto, pancetta con verdure sottaceti", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[1], formula: this.formulaPasti[2], prezzo: 9.50, quantity: 0, stato: 1 },
      { id: 9, name: "Tartine con caviale rosso", image: aperitivo1, descr: "Fette di baguette leggermente imburrate e guarnite con caviale rosso", testo_btn1: "Elimina", testo_btn2: "Ordina", categoria: this.categorie[1], formula: this.formulaPasti[2], prezzo: 7.50, quantity: 0, stato: 1 }
    ],
    prezzo_finale: 0
  };

  cambia_stato_categoria = (cat) => {
    this.setState(prevState => ({
      piatti: prevState.piatti.map(piatto =>
        piatto.categoria === cat
          ? { ...piatto, stato: piatto.stato === 1 ? 0 : 1 }
          : piatto
      )
    }));
  };

  add_in_carello = (id_to_add) => {
    this.setState(prevState => {
      const updatedPiatti = prevState.piatti.map(piatto =>
        piatto.id === id_to_add
          ? { ...piatto, quantity: piatto.quantity + 1 }
          : piatto
      );

      const piattoToAdd = updatedPiatti.find(piatto => piatto.id === id_to_add);
      const newPrezzoFinale = prevState.prezzo_finale + piattoToAdd.prezzo;

      return {
        piatti: updatedPiatti,
        prezzo_finale: newPrezzoFinale
      };
    });
  };

  delete_from_carello = (id_to_delete) => {
    this.setState(prevState => {
      const piattoToDelete = prevState.piatti.find(piatto => piatto.id === id_to_delete);

      if (!piattoToDelete || piattoToDelete.quantity === 0) {
        return null;
      }

      const updatedPiatti = prevState.piatti.map(piatto =>
        piatto.id === id_to_delete
          ? { ...piatto, quantity: piatto.quantity - 1 }
          : piatto
      );

      const updatedPrezzoFinale = prevState.prezzo_finale - piattoToDelete.prezzo;

      return {
        piatti: updatedPiatti,
        prezzo_finale: updatedPrezzoFinale
      };
    });
  };

  ripristina_all_cards = () => {
    this.setState(prevState => ({
      piatti: prevState.piatti.map(piatto => (
        { ...piatto, stato: 1 }
      )),
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout VettoreLink={this.ArrayLink} />}>
            <Route
              index
              element={<PrimaPagina
                categorie={this.categorie}
                formulaPasti={this.formulaPasti}
                state={this.state}
                cambia_stato_categoria={this.cambia_stato_categoria}
                add_in_carello={this.add_in_carello}
                delete_from_carello={this.delete_from_carello}
                ripristina_all_cards={this.ripristina_all_cards}
                title="Cosa vuoi ordinare?"
              />} />

            <Route path="Colazione" element={<Colazione
              categorie={this.categorie}
              formulaPasti={this.formulaPasti}
              state={this.state}
              cambia_stato_categoria={this.cambia_stato_categoria}
              add_in_carello={this.add_in_carello}
              delete_from_carello={this.delete_from_carello}
              ripristina_all_cards={this.ripristina_all_cards}
              title="Formula colazione 7.00-11.00" />} />

            <Route path="Pranzo" element={<Pranzo
              categorie={this.categorie}
              formulaPasti={this.formulaPasti}
              state={this.state}
              cambia_stato_categoria={this.cambia_stato_categoria}
              add_in_carello={this.add_in_carello}
              delete_from_carello={this.delete_from_carello}
              ripristina_all_cards={this.ripristina_all_cards}
              title="Formula pranzo 13.00-16.00" />} />

            <Route path="Aperitivo" element={<Aperitivo
              categorie={this.categorie}
              formulaPasti={this.formulaPasti}
              state={this.state}
              cambia_stato_categoria={this.cambia_stato_categoria}
              add_in_carello={this.add_in_carello}
              delete_from_carello={this.delete_from_carello}
              ripristina_all_cards={this.ripristina_all_cards}
              title="Formula aperitivo 17.00-20.00" />} />
          </Route>
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App4_cs;
