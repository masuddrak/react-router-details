import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>This is a header</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;