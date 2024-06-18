
import { Outlet } from 'react-router-dom';
import '../App.css';
import MyNavbar from '../components/myNavbar';
import MyNavbar2 from '../components/myNavbar2';
import Carello from '../components/carello';

import React from 'react';
import NavbarVert from '../components/navbarVert';


function Layout(props) {
  const { state, add_in_carello, delete_from_carello } = props;

  return (
    <>
      <MyNavbar />
      <MyNavbar2 title="Benvenuti nel mio ristorante" VettoreLink={props.VettoreLink} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <Outlet />
          </div>
          <div className="col-3">
      
            <Carello 
              state={state}
              add_in_carello={add_in_carello}
              delete_from_carello={delete_from_carello}
            />
          </div>
{/*           <div className="col-3">
            <NavbarVert VettoreLink={props.VettoreLink}  />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Layout;