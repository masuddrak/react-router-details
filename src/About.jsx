import { Outlet } from "react-router-dom";
import AbouterHeader from "./AbouterHeader";


const About = () => {
    return (
        <div>
           <h1>this is about</h1>
           
           <Outlet></Outlet>
          
        </div>
    );
};

export default About;