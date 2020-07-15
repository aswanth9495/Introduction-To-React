import React from 'react';
import { Component } from 'react';
import PostList from '../components/PostList'

const getBlogs = async () => {
  const response = await fetch(
    'http://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );
  return response.json();
};

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    //Fetching done here.
    getBlogs().then((data) => {
      this.setState({
        posts: data,
      })
    })
  }
  
  render() {
    return (
    <div>
      {
        this.state.posts.length > 0 ? <PostList posts={this.state.posts} /> : 'Loading...'
      }
    </div>
    );
  }
}

export default Blog;