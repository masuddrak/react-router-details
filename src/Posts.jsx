import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts=useLoaderData()
    // console.log(posts)
    return (
        <div>
           <h4>All posts {posts.length}</h4> 
           {
            posts.map(post=><Post key={post.id} post={post}></Post>)
           }
        </div>
    );
};

export default Posts;