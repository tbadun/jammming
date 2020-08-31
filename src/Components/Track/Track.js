import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        return (
        <button className="Track-action">{this.props.isRemoval ? '-' : '+'}</button>
        );
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.trackName}</h3>
                    <p>{this.props.artist}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;