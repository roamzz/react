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

    //render function
    render(){
   
         const comments = this.state.comments.map( (comment, i) => {             
             if (this.props.dish != null){
                if (this.props.dish.id === comment.dishId){
                    return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>
                                    -- {comment.author} ,{" "}
                                    {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                    }).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>
                        
                    );
                } else {
                    return (
                        false
                    );
                }
                   
             }
            
            });
        
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-sm-5 ml-1">
                    <h5>Comments</h5>
                    {comments}
                    </div>

                </div>
            </div>
        );

    }



}

export default DishDetail;