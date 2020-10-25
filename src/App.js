import React from 'react';
import {Route,Switch} from "react-router-dom";
import {connect} from "react-redux"

import './App.css';
import Home from './pages/Home';
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";


import MyNavbar from './components/Navbar';
import UpperNav from './UpperNav';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import ProductItem from './pages/ProductItem';



function App({login}) {

 
  
 
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
    <Route exact path="/register">
       <Register/>
    </Route>
    <Route exact path="/login">
       <SignIn/>
    </Route>
    <Route exact path="/product/:hash">
        <ProductItem/>
    </Route>
    
    </Switch>
   
    
    </div>
  );
}

const mapStateToProps=(state)=>({
  login: state.authR.login
})
export default connect(mapStateToProps,{})( App);
