import React, { Component } from "react";

class Support extends Component {
    render() {
        return (
            <div>
                <div className="container-header">
                <h2>Need to ask us something?</h2>
                <h2 className="orange-text">You're in the right place.</h2>
                </div>

                <div className="container-instructions">
                    <h2>Fill out this form and we'll get back to you very soon.</h2>
                </div>

                <form className="support-form">
                    <input type="text" id="name" name="name" placeholder="Name" required></input>
                    <input type="email" id="email" name="email" placeholder="Email" required></input><br/>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required></input><br/>
                    <textarea rows="5" cols="42" id="question" name="question" placeholder="Question(s)" required></textarea><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Support;