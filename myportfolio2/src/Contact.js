import React, { Component } from 'react';
import './css/App.scss';
import Tiles from './Tiles';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="yellow" />
                <div className="section">
                    <h1>Contact</h1>
                    <p>
                        Want to talk? Always welcome collaborators, comments, compliments, and jokes.
                    </p>
                    <div className="grid-xs-1 grid-md-4">
                        <a target="_blank" className="btn btn--link" href="https://www.linkedin.com/in/katiemaegeorge/">
                            LinkedIn
                        </a>
                        <a target="_blank" className="btn btn--link" href="https://github.com/katiegeorge">GitHub</a>
                        <a target="_blank" className="btn btn--link" href="https://medium.com/@katie.george">Medium</a>
                        <a target="_blank" className="btn btn--link" href="https://mail.google.com/mail/?view=cm&fs=1&to=katiegeorge94@gmail.com">Gmail</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
