import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";


const Users = () => {
    const users=useLoaderData()
    console.log(users)
 
    return (
        <div>
            <h3>All Users {users.length}</h3>
            {
               users.map(user=><SingleUser key={user.id} user={user}></SingleUser>)
            }
        </div>
    );
};

export default Users;