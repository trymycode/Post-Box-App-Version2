import React, { Component } from "react";
import { createPostAction } from "../../store/actions/postActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      postImgUrl: "",
      showWarning: false,
      likedByIds: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    if (title === "" || content === "") {
      this.setState({
        showWarning: true,
      });
    } else {
      this.props.createPostAction(this.state);
      this.props.history.push("/");
    }
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">Add ImageUrl(Optional)</label>
            <input
              type="text"
              id="postImgUrl"
              className="postImgUrl"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Post Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              maxlength="500"
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn signInBtn lighten-1 z-depth-0">
              Create
            </button>
          </div>
          {this.state.showWarning && (
            <p className="red-text">Please provide required information</p>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPostAction: (post) => dispatch(createPostAction(post)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
