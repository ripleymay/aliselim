import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
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
      <div className="PostCards">
        {posts.map((p, idx) => 
          <Link to={`/posts/${p._id}`} key={idx}>
            <div>
              <h1> {p.title} </h1>
              <img src={p.image} alt={p.title} width="300" />
            </div>
          </Link>
        )}
      </div>
    </>
  );
}