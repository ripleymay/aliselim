import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
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