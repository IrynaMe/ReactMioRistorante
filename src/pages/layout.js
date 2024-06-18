
import { Outlet } from 'react-router-dom';
import '../App.css';
import MyNavbar from '../components/myNavbar';
import MyNavbar2 from '../components/myNavbar2';
import Carello from '../components/carello';


function Layout(props) {
  return (
    <>
      <MyNavbar />
      <MyNavbar2 title="Benvenuti nel mio istorante" VettoreLink={props.VettoreLink} />
   
      <Outlet />
    </>
  );
}

export default Layout;
