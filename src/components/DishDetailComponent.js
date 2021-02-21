import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

import { COMMENTS } from './../shared/comments'

class DishDetail extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            comments: COMMENTS
        }
    }
    
    renderDish(selectedDish){
        
        if (selectedDish != null)
            return(
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                      <CardTitle>{selectedDish.name}</CardTitle>
                      <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }  

    renderComments(dish){    
        if (dish != null){                
            
            return(
                <div className="col-12 col-md-5 ml-1">
                <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish.comments.map( (comment) => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                </div>

                            );
                        })}
                        
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }

    }

    //render function
    render(){
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 ml-1">
                        {this.renderDish(this.props.dish)}
                        </div>
                       
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        } else{
            return (
                <div></div>
            );
        }
            
    }
}

export default DishDetail;