import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{color:"white"}}>
            <Link to={"/"} style={{marginLeft:"30px",color:"white"}}>Home</Link>
            <Link to={"/about"} style={{marginLeft:"30px",color:"white"}}>About</Link>
            <Link to={"/conatct"} style={{marginLeft:"30px",color:"white"}}>conatct</Link>
            <Link to={"/users"} style={{marginLeft:"30px",color:"white"}}>users</Link>
            <Link to={"/posts"} style={{marginLeft:"30px",color:"white"}}>posts</Link>
        </div>
    );
};

export default Header;