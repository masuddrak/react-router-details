import { Link } from "react-router-dom";


const SingleUser = ({user}) => {
   const {id,name,phone}=user
   const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin:"20px"
  };
    return (
        <div style={mystyle}>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default SingleUser;