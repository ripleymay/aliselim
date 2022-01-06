import React, { useEffect } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default function SpokenPage({posts, setPosts}) {

  useEffect(function(){
    async function getAllPosts() {
      const post = await postsAPI.getAll('Spoken');
      setPosts(post)
    }
    getAllPosts();
  }, []);

  return (
    <>
      <h1>Spoken Work</h1>
      {posts.map((p, idx) => 
      <h3>{p.title}</h3>
      )}
    </>
  );
}