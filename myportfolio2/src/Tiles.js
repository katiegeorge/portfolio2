import React, { Component } from 'react';
import './css/App.scss';

class Tiles extends Component {
    getRandomColor(index, primary) {
        const purple = ['#9970CE', '#6A4994', '#CBB3EA', '#3E798C', '#EAD99C'];
        const blue = ['#61ADC5', '#3E798C', '#ADD9E7', '#ABDFD2', '#6A4994'];
        const green = ['#3FB296', '#307161', '#ABDFD2', '#E2B031', '#CBB3EA'];
        const yellow = ['#EACB5D', '#E2B031', '#EAD99C', '#ADD9E7', '#307161'];

        let colors = [];

        if (primary === 'purple') { colors = purple.slice(); }
        else if (primary === 'blue') { colors = blue.slice(); }
        else if (primary === 'green') { colors = green.slice();  }
        else if (primary === 'yellow') { colors = Array.from(yellow); }

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        return randomColor;
    }

    render() {
        const isMobile = window.innerWidth <= 544;
        const isTablet = window.innerWidth <= 768;

        let n;
        if (isMobile) {
            n = 60;
        } else if (isTablet) {
            n = 125;
        } else {
            n = 165;
        }
        
        const tiles = [...Array(n)].map((e, i) => (
            <div
                className="cover--tile"
                key={i}
                style={{ backgroundColor: this.getRandomColor(i, this.props.primary) }}
            />
        ));

        return (
            <div className="cover">
                { tiles }
            </div>
        );
    }
}

export default Tiles;
