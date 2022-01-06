import React, { useEffect } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default function VisualPage({posts, setPosts}) {

    useEffect(function(){
        async function getAllPosts() {
          const post = await postsAPI.getAll('Visual');
          setPosts(post)
        }
        getAllPosts();
      }, []);

  return (
    <>
      <h1>Visual Work</h1>
      {posts.map((p, idx) => 
      <h3>{p.title}</h3>
    )}
    </>
  );
}