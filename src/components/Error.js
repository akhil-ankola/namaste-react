import React from "react";
import { useRouteError } from "../../node_modules/react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <>
            <h1>Error</h1>
            <h2>{err.data}</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </>
    );
}
export default Error