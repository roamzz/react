import React, { Component } from 'react';
import { COMMENTS } from '../shared/comments';


class CommentList extends Component {
    constructor(props){
        super(props);
        
        //set the initial state
        this.state = {
            comments: COMMENTS
        };
    }

    //mounted
    componentDidMount() {        
        // this.setState({ comments: [{author: "author1"}, {author: 'author2'}]});
    }
  
    //unmounted
    componentWillUnmount() {


    } 

    render(){
        return (
            <div>
            <h2>Authors</h2>
            <ul>
                {
                    this.state.comments.map ( ({author}, index) => 
                        <li key={index}>{author}</li>
                    )
                }     
            </ul>
            </div>
        );
    }

}

export default CommentList;