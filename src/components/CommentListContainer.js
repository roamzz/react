import React, { Component } from 'react';
import COMMENTSOLD  from '../shared/commentsold';
import CommentList from "./CommentList";


class CommentListContainer extends Component {
    constructor(props){
        super(props);
        
        //set the initial state
        this.state = {
            comments: COMMENTSOLD
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