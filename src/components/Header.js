import React, { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { User, useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {

    const { user, isAuthenticated } = useAuth0();

    {}
    console.log("Current user : ",user);
    console.log("Auth :", isAuthenticated );
    { isAuthenticated ? console.log(":::",user.name,":::") : console.log("Not Login")};

    const[btnLoginOut, setbtnLoginOut]=useState('LogOut');
    
    return(
        <div className="header">
            <div className="logo_container">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>cart</li>
                    <li>contact</li>

                    {/* <button onClick={ ()=>{
                        btnLoginOut === 'LogOut' 
                        ? setbtnLoginOut('Login') 
                        : setbtnLoginOut('LogOut');
                    } }>{btnLoginOut}</button> */}

                    {/* <button onChange={ (e) => loginWithRedirect() }>Log in with Redirect</button> */}

                    {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
                    {/* <LoginButton/> 
                    <LogoutButton/> */}
                    { isAuthenticated ? <h3>Hello, {user.name}</h3> : <></>}

                </ul>
            </div>
        </div>
    );
}

export default Header;