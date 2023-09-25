import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

const [Login, setLogin] = useState("login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={() => {
                        Login === "login" ? setLogin("Logout") : setLogin("Login");
                        console.log(setLogin);
                    }}>Login</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;