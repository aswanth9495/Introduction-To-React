import React from 'react';

const PostItem = ({ title, body, key }) => {
  return (
    <div className="post-item">
      <h2> 
        {title}
      </h2>
      <p>
        {body}
      </p> 
    </div>
  )
}

export default PostItem;