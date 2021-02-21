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
        const comments = this.state.comments.map( (comment) => {
            if(this.props.selectedDish === null) return;
            if(comment.dishId === this.props.selectedDish.id){
                return (
                    <ul key={comment.id} className="col-12 col-md-12 m-1 list-unstyled">
                    <li>
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
                    </ul>
                );

            } 
                
        });

        return (
                <div className="row">
                    <div className="col-12 col-sm-5">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-sm-5 ml-1">
                    <h5>Comments</h5>
                        {comments}
                    </div>

                </div>
        );

    }



}

export default DishDetail;