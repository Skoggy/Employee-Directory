import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Welcome to your employee directory. Please select how you would like to display your employees</p>
            </div>
        </div>
    );
}


export default Header;