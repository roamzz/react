import React from 'react';
// import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/" className="mr-auto">Restorante Con Fusion</NavbarBrand>

      </div>
      </Navbar>
      <h1>Header 1</h1>
      
    </div>
  );
}

export default App;
