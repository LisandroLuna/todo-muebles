import React from 'react';
import './assets/App.css';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import Home from "./containers/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {CartProvider} from "./contexts/cartContext";

function App() {
  return (
      <Router>
          <CartProvider>
              <div className="container-fluid">
                  <header className="App-header">
                      <NavBar/>
                  </header>
                  <div className="row mx-0">
                      <Switch>
                          <Route path="/item/:id">
                              <ItemDetailContainer />
                          </Route>
                          <Route path="/cart">
                              <Cart />
                          </Route>
                          <Route exact path="/">
                              <Home />
                          </Route>
                      </Switch>
                  </div>
                  <Footer/>
              </div>
          </CartProvider>
      </Router>
  );
}

export default App;
