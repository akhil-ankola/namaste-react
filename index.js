import React from "react";
import ReactDOM from "react-dom/client";
import  './style.css'
import { RouterProvider } from "react-router-dom"; 
import { appRouter } from "./src/App";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./src/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
    domain="dev-5s8iaq52piue0hbu.us.auth0.com"
    clientId="XeGZKL9fWvsvyODjaOpSvPWfSvU4qmCU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RouterProvider router={appRouter}/>
        {/* <App/> */}
    </Auth0Provider>

);