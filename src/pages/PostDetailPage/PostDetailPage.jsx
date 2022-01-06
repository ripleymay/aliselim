import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import * as postAPI from '../../utilities/posts-api';


export default function PostDetailPage() {

    const [posts, setPosts] = useState(null);
    const {id} = useParams();
    
    useEffect(function(){
    async function postDetail(){
            console.log(id)
            const post = await postAPI.detail(id);
            setPosts(post);
        }
        postDetail();
    },[]);

    if (!posts) return null;
    return(
        <>
            <div className="Pic">
                <h1>{posts.title}</h1>
                <img src={posts.image} alt={posts.title} />
            </div>
            <p>
                {posts.body}
            </p>
            {posts.link &&
                <a href={posts.link}>{posts.link}</a>
            }
        </>
    )
}