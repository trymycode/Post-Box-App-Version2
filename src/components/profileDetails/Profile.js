import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import PersonDetails from "../personDetails/PersonDetails";
import Notification from "../notifications/Notification";
import Loading  from "../loader/loading";
class Profile extends Component {
  render() {
    const { posts, auth, profileDetails, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    else {
      if (posts) {
        let firstName = profileDetails && profileDetails.firstName;
        let lastName = profileDetails && profileDetails.lastName;
        return (
          <div className="profile container">
            <div className="box-left">
              {posts.length == 0 &&<div className="noPostTitle"> No post added yet</div>}
              <PostList posts={posts} />
            </div>
            <div className="box-right">
              <PersonDetails
                details={profileDetails}
                firstName={firstName}
                lastName={lastName}
                emailId={auth.email}
              />
              <Notification notifications={notifications} />
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
const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    profileDetails: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),

  firestoreConnect([
    { collection: "posts",orderBy: ['createdAt', 'desc'] },
    { collection: "notifications", limit: 5 , orderBy: ['time', 'desc']},
  ])
)(Profile);
