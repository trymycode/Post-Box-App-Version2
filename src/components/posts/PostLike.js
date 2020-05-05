import React, { Component } from "react";
import moment from "moment";
import { likePost } from "../../store/actions/postActions";
import { connect } from "react-redux";
class PostLike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeNum: this.props.likes,
      warning: false,
      alreadyLiked: true,
    };
  }
  componentDidMount() {
    const { loggedInUserId, likedByIds } = this.props;
    let likedBy = [];
    let LikedBy = likedBy.concat(likedByIds);
    let check = LikedBy.filter((id) => id == loggedInUserId);

    let alreadyLiked = check.length == 0 ? false : true;
    this.setState({
      alreadyLiked,
    });
  }
  render() {
    const {
      likes,
      date,
      post,
      postId,
      likePost,
      loggedInUserId,
      likedByIds,
    } = this.props;
    const { alreadyLiked } = this.state;
    const postLike = () => {
      let likedBy = [];
      let LikedBy = likedBy.concat(likedByIds);
      let check = LikedBy.filter((id) => id == loggedInUserId);

      let addLike = check.length == 0 ? true : false;

      if (addLike) {
        LikedBy.push(loggedInUserId);
        this.setState(
          {
            likeNum: this.state.likeNum + 1,
            alreadyLiked: true,
          },
          () => {
            likePost({
              likes: this.state.likeNum,
              postId,
              likedByIds: LikedBy,
            });
          }
        );
      } else if (addLike == false) {
        let id = LikedBy.filter((id) => id != loggedInUserId);
        this.setState(
          {
            likeNum: this.state.likeNum - 1,
            alreadyLiked: false,
          },
          () => {
            likePost({
              likes: this.state.likeNum,
              postId,
              likedByIds: id,
            });
          }
        );
      }
    };
    return (
      <div className="card-action gret lighten-4 grey-text">
        <div className="alignment">
          {alreadyLiked == true ? (
            <div className="item" onClick={postLike}>
              {"Liked" + " "}
              <i className="fa fa-heart likedColor" aria-hidden="true"></i>{" "}
              {likes}
            </div>
          ) : (
            <div className="item" onClick={postLike}>
              {"Like" + " "}
              <i className="fa fa-heart" aria-hidden="true"></i> {likes}
            </div>
          )}

          <div className="lighten-4 grey-text item">
            {moment(date.toDate()).calendar()}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likePost: ({ likes, postId, likedByIds }) => {
      dispatch(likePost({ likes, postId, likedByIds }));
    },
  };
};
export default connect(null, mapDispatchToProps)(PostLike);
