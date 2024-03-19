import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post =useLoaderData()
    const navigate = useNavigate();
    const handelBackPostDedtails=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Post Deatils ID :{post.id} </h2>
            <p>{post.body}</p>
            <button onClick={handelBackPostDedtails}>view back</button>
        </div>
    );
};

export default PostDetails;