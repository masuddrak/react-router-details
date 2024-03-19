import { Outlet } from "react-router-dom";



const About = () => {
    return (
        <div>
           <h1>this is about</h1>
           
           <Outlet></Outlet>
          
        </div>
    );
};

export default About;