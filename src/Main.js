import React, { Component } from "react";
import {
    Route, 
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import AvailableSnakes from "./AvailableSnakes";
import Support from "./Support";
import AboutUs from "./AboutUs";
import snakies from './snakies.png';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1 className="heading">A&G Reptiles</h1>
                <ul className="header">
                    <li><NavLink to="/aboutus">About Us</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                    <li><NavLink to="/availablesnakes">Available Snakes</NavLink></li>
                </ul>
                <div className="snakies">
                    <img alt="snake header" src={snakies} />
                </div>
                <div className="content">
                <Routes>
                    <Route path="/availablesnakes" element={<AvailableSnakes/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;