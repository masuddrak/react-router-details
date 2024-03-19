import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData()
    // console.log(user)
    return (
        <div>
            <h2>user Details{user.id}</h2>
            <h2>user Details</h2>
        </div>
    );
};

export default UserDetails;