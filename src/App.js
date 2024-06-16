
import './App.css';
import MyNavbar from './components/myNavbar';
import Scheda_menu from './components/scheda_menu';

function App() {
  return (
    <>
      <MyNavbar/>
      <div className="container py-4">
        <h3 style="text-align: center">Cosa desideri ordinare?</h3>
        <hr/>
        <div className="row">
<Scheda_menu title={"Pasta col sugo"}/>
<Scheda_menu title={"Pasta senza sugo"}/>
<Scheda_menu title={"Sugo senza pasta"}/>
        </div>
      </div>
    </>
  );
}

export default App;
