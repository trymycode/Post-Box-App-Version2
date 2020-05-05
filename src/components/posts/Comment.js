import React, { Component } from "react";
import moment from "moment";
class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { comment } = this.props;
    return (
      <div key={comment.id} className="comment-container">
        <p className="comment-details">{comment.description}</p>
        <p className="Grey-text">
          Created by {comment.authorName}{" "}
          <span className="Grey-text">{moment(comment.createdAt.toDate()).fromNow()}</span>
        </p>
        
      </div>
    );
  }
}

export default Comment;
