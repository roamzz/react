import React from 'react';

function CommentList(props) {
  return (
   
      <div>
         <h1 className="mt-4 mb-4">Functional Component that displays only this view:</h1>
          {props.comments.map(comment => { // using props in child component and looping
              return (
                <ul key={comment.id}>
                  <li>{comment.id} | {comment.author} | {comment.comment}</li>
                </ul>
              );
          })}
      </div>  
  );
}

export default CommentList;