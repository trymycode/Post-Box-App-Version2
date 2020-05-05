import React, { Component } from "react";
import PostLike from "./PostLike";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Loading from "../loader/loading";
class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { post, auth, comments, profileDetails, loggedInUserId } = this.props;
    const postID = this.props.match.params.id;
    const filteredComments =
      comments && comments.filter((comment) => comment.postId === postID);
    const profileCreator =
      profileDetails &&
      profileDetails.firstName + " " + profileDetails.lastName;
    let showMsg =
      filteredComments && filteredComments.length == 0 ? true : false;
    if (!auth.uid) return <Redirect to="/signin" />;
    else {
      if (post) {
        const authorName = post.authorFirstName + " " + post.authorLastName;
        return (
          <div className="container section project-details">
            <div className="card z-depth-0 gap">
              <div className="card-content">
                <span className="card-title cardTitle">{post.title}</span>
                {post.postImgUrl != "" && (
                  <img className="postImgUrl" src={post.postImgUrl} />
                )}
                <p className="postDes">{post.content}</p>
              </div>
              <PostLike
                likes={post.likes}
                likedByIds={post.likedByIds}
                date={post.createdAt}
                post={post}
                postId={this.props.match.params.id}
                postCreator={authorName}
                profileCreator={profileCreator}
                loggedInUserId={loggedInUserId}
              />
              <div className="card-action gret lighten-4 grey-text">
                <div>
                  Posted by{" "}
                  <span className="notification-name">{authorName}</span>
                </div>
              </div>
              <div className="card-action gret lighten-4">
                {/* add create comment box */}

                <CreateComment postId={postID} authorName={profileCreator} />
                {/* comments */}
                {showMsg && (
                  <div className="grey-text lighten-4">
                    {" "}
                    No comments added yet.
                  </div>
                )}
                {!showMsg && <label className="headline">Comments</label>}
                {filteredComments &&
                  filteredComments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <Loading />
        );
      }
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log("state.firestore.ordered",state.firestore.ordered," state.firestore.data.posts", state.firestore.data.posts)
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  const comments = state.firestore.ordered.comments;
  const loggedInUserId = state.firebase.auth.uid;
  return {
    post,
    auth: state.firebase.auth,
    comments,
    profileDetails: state.firebase.profile,
    loggedInUserId,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", orderBy: ["createdAt", "desc"] },
    { collection: "comments", orderBy: ["createdAt", "desc"] },
  ])
)(PostDetails);
