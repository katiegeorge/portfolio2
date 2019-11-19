import React, { Component } from 'react';
import './css/App.scss';

class Project extends Component {
    render() {
        return (
            <div className="project">
                <div className="project--header">
                    <h2 className="project--title">{ this.props.title }</h2>
                    <span>{ this.props.date } &#183; { this.props.location }</span>
                </div>
                { this.props.body }
            </div>
        );
    }
}

export default Project;
