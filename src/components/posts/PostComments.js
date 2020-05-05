import React, { Component } from "react";
import Comment from "./Comment";


export class PostComments extends Component {
  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="post-list section">
            <Comment />
          </div>
        </div>
      </div>
    );
  }
}



export default PostComments;
