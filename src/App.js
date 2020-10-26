import React,{useState,useEffect} from 'react';
import {Route,Switch} from "react-router-dom";


import './App.css';
import Home from './pages/Home';
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import ScrollToTop from './components/ScrollToTop';


import MyNavbar from './components/Navbar';
import UpperNav from './UpperNav';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import ProductItem from './pages/ProductItem';



function App({}) {

 
  const [scroll, setscroll] = useState(false);
  const scrollNav= ()=>{
    if(window.scrollY>=70){
      setscroll(true)
    }
    else(setscroll(false))
  }
 
  useEffect(() => {
    window.addEventListener("scroll",scrollNav)
  }, [])
 
  return (
    <div className="App">
       <ScrollToTop/>
      <UpperNav/>
     <MyNavbar scroll={scroll}/>
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


export default  App;
