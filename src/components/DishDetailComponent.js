import React, { Component } from "react";
import { Row, Label, Col, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
     Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


//// validators
const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

// Assignment 3 CommentForm implementation
class CommentForm extends Component {
    constructor(props){
        super(props)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);


        this.state = {
            isModalOpen: false
        };

    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentFormSubmit(values){
        this.toggleModal();
        console.log("current state: "+ JSON.stringify(values));
        alert(JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
        

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span 
                        className="fa fa-pencil">
                    </span> Submit Comment
                </Button>

               {/* comment form modal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleCommentFormSubmit(values)}>

                            {/* rating */}
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select 
                                        model=".rating" 
                                        name="rating"
                                        id="rating"
                                        className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            {/* author */}
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text 
                                        placeholder="Your Name"
                                        model=".author" 
                                        name="author"
                                        id="author"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    >
                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required,
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* comments */}
                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control"

                                    ></Control.textarea>
                                </Col>
                            </Row>

                            {/* submit btn */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>



                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>

        );
    }

};


// end of Assignment 3 CommentForm implementation


    
    function RenderDish({dish}) {    
        if (dish != null)
            return(
                <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg  width="100%"  src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }  

    function RenderComments({comments, addComment, dishId}) {        
        if (comments != null){                
            
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map( (comment) => {
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
                        })}
                        
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }

    }

    const  DishDetail = (props) => {
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                       <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
            );
        } else{
            return (
                <div></div>
            );
        }


    }

            
    


export default DishDetail;