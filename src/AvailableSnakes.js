import React, { Component } from "react";
import {
    NavLink
} from "react-router-dom";
import orange from "./orange.jpeg"

class AvailableSnakes extends Component {
    render() {
        return (
            <div className="container1">
                <div className="together"><h2>Breeding the highest-quality Kenyan Sand Boas since 2001.</h2>
                <button><NavLink to="/aboutus">Learn More</NavLink></button>
                </div>

                <div className="orange">
                    <img alt="featured snake" src={orange} />
                </div>
            </div>
            
        );
    }
}

export default AvailableSnakes;