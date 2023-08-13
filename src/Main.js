import React, { Component } from "react";
import {
    Route, 
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Greyhound from "./Greyhound/Greyhound.js";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>2.5 Performance Assessment</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li className="second"><NavLink to="/greyhound">Image</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/greyhound" element={<Greyhound/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;