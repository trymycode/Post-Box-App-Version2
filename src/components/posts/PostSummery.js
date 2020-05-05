import React from "react";
import moment from "moment";
const PostSummery = ({ post }) => {
  let date = moment(post.createdAt.toDate()).calendar();
  return (
    <div className="card z-depth-0 post-summery">
      <div className="card-content grey-text text-darken-3 summeryBox">
        <div className="side-left">
          <span className="card-title cardTitle">{post.title}</span>
          <p className="space">
            Post created by {post.authorFirstName + " " + post.authorLastName}
          </p>
          <p className="date">{date}</p>
        </div>
        {post.postImgUrl && <div className="side-right">
          <img src={post.postImgUrl} alt="photo" />
        </div>}
      </div>
    </div>
  );
};
export default PostSummery;
