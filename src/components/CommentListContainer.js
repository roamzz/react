import React, { Component } from 'react';
import COMMENTS  from '../shared/comments';
import CommentList from "./CommentList";


class CommentListContainer extends Component {
    constructor(props){
        super(props);
        
        //set the initial state
        this.state = {
            comments: COMMENTS
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CommentList comments={this.state.comments} />
                    </div>
                </div>
            </div>
        );
      }

}

export default CommentListContainer;