import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {

    /*
        mounting lifecycle methods:
            -constructor(),
            -getDerivedStateFromProps(),
            -render(),
            -componentDidMount()
    */

    constructor(props){
        super(props);
        
        this.state = {
        }
    }

    componentDidMount(){
        
    }

    //methods


    displayDish(dish){
        if (dish != null)
            return(
                <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    welcome(){
        return (
            <p>Welcome Hello World!</p>
        );
    }

    render(){
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name}>
                  </CardImg>
                  <CardBody>
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
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
                    <div className="col-12">
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;