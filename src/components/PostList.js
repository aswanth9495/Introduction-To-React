import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem title={post.title} key={post.id} body={post.body} />
      ))}
    </div> 
  )
}

export default PostList;