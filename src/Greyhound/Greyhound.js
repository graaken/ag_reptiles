import React, { Component } from "react";
import greyhound from '../Greyhound/greyhound-svgrepo-com.svg';

class Greyhound extends Component {
    render() {
        return (
            <div>
                <h2>IMAGE</h2>
                <p>Enim nec dui nunc mattis enim ut tellus elementum sagittis:</p>
                <ol>
                    
                    <li>Pellentesque elit eget gravida cum sociis</li>
                    <li>Aliquam ultrices sagittis orci a scelerisque purus</li>
                </ol>
                <div className="greyhound">
                    <img alt="greyhound icon" src={greyhound} />
                </div>
            </div>
        );
    }
}

export default Greyhound;