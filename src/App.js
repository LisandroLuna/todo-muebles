import React from 'react';
import logo from './media/img/logo.svg';
import './assets/App.css';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="container-fluid">
        <header className="App-header">
            <NavBar></NavBar>
        </header>
        <div class="row">
            <Home greeting="El sitio se encuentra en construccion, pronto estara disponible."></Home>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
