import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null
        }
    }

    //methods
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    displayDish(dish){
        if(dish){
            return (
                <h1>{dish.name}</h1>
            );
        }
    }

    render(){
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name}>
                  </CardImg>
                  <CardBody>
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    {/* <CardSubtitle>{dish.description}</CardSubtitle> */}
                    {/* <Button>Button</Button> */}
                    </CardImgOverlay>
                  </CardBody>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.displayDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;