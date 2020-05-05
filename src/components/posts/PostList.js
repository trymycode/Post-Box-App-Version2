import React from "react";
import PostSummery from "./PostSummery";
import { Link } from 'react-router-dom';
const PostList = ({posts}) => {
  return (
    <div className="post-list section">
      {posts && posts.map(post =>{
       
        return(
          <Link to={'/post/' + post.id} key={post.id} >
          <PostSummery  post={post} />
        
          </Link>
          
        )
        
      })}
        
      </div>
  );
};
export default PostList;
