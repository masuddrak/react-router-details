import { useRouteError } from "react-router-dom";


const NotFountPage = () => {
    const erro =useRouteError()
    console.log(erro)
    return (
        <div>
            <h1>OPPS!!!!</h1>
        </div>
    );
};

export default NotFountPage;