import React from 'react';
import {Route,Switch} from "react-router-dom";


import './App.css';
import Home from './pages/Home';
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import MyNavbar from './components/Navbar';
import UpperNav from './UpperNav';



function App() {

 
  
 
  return (
    <div className="App">
      <UpperNav/>
     <MyNavbar/>
     <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
    <Route exact path="/women">
    <Women/>
    </Route>
      <Route exact path="/men">
      <Men/>
      </Route>
    <Route exact path="/cart">
      <Cart/>
    </Route>
    <Route exact path="/login">
    <Login/>
    </Route>
    
    </Switch>
   
    
    </div>
  );
}


export default ( App);
