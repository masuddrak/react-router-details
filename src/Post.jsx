import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    // console.log(post)
    const {id,title}=post
    const navigate = useNavigate();
    console.log(navigate)
    const handelDetailPost=()=>{
        navigate(`/post/${id}`)
    }
   
    return (
        <div>
            <h5>POST ID: {id}</h5>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Details Post</Link>
            <button onClick={handelDetailPost}>view Detais</button>
           
        </div>
    );
};

export default Post;