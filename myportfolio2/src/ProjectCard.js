import React, { Component } from 'react';
import './css/App.scss';
import headshot from './assets/headshot.png';


class ProjectCard extends Component {
    renderTags() {
        return this.props.tags.map(tag =>
            <div className={ `tag tag__${this.props.color}` }>{ tag }</div>
        );
    }

    renderClassNames() {
        if (this.props.size === 'big') {
            return "card--image card--image__big"
        } else if (this.props.size === 'small') {
            return "card--image card--image__small"
        } else return "card--image";
    }

    render() {
        return (
            <div className={ this.props.className } onClick={ this.props.onActiveTab }>
                <div className="card--image-wrapper">
                    <img src={ this.props.image } className={ this.renderClassNames() } />
                </div>
                <h2>{ this.props.title }</h2>
                <p className="card--description">
                    { this.props.description }
                </p>
                <div className="tag-wrapper">
                    { this.renderTags() }
                </div>
            </div>
        );
    }
}

export default ProjectCard;
