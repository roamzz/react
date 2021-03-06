import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import CommentListContainer from './CommentListContainer';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {

      /*
        mounting lifecycle methods:
            -constructor(),
            -getDerivedStateFromProps(),
            -render(),
            -componentDidMount()
    */

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDishId: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDishId: dishId});
  }

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />
        <CommentListContainer />
        <Footer />
      </div>
    );
  }
}

export default Main;