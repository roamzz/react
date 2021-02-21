import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Clock from './components/Clock';
import "./App.css";
import { DISHES } from './shared/dishes'

class App extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      dishes: DISHES

    };

}

  render(){
    
    return (
      <div>
        <Navbar dark color="warning">
        <div className="container">
        <NavbarBrand href="/" className="mr-auto">Restorante Con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        <Clock/>
      </div>
    );

  }

}

export default App;
