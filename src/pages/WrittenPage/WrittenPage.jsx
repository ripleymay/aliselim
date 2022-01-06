import React, { useEffect } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default function WrittenPage({posts, setPosts}) {

  useEffect(function(){
    async function getAllPosts() {
      const post = await postsAPI.getAll('Written');
      setPosts(post)
    }
    getAllPosts();
  }, []);

  return (
    <>
    <h1>Written Work</h1>
    {posts.map((p, idx) => 
      <h3>{p.title}</h3>
    )}
    </>
  );
}