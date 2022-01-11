import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';

export default function VisualPage({posts, setPosts}) {

    useEffect(function(){
        async function getCatPosts() {
          const post = await postsAPI.getCat('Visual');
          setPosts(post)
        }
        getCatPosts();
      }, []);

  return (
    <>
      <h1>Visual Work</h1>
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