import { Navigate } from "react-router-dom";

function Redirect() {
    return (
        <>
            <h1>Redirecting...</h1>
            <Navigate to="/feed" />
        </>
    )
}

export default Redirect;
