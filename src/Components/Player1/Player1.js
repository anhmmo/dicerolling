import React, { Component } from 'react';
import './Player1.css';

class Player1 extends Component {
    render() {
        return (
            <div className="player1 player">
                <h2>Player 1</h2>
                <p id="totalScore">0</p>
                <div className="currentScore">
                    <p>current</p>
                    <p>0</p>
                </div>
            </div>
        );
    }
}

export default Player1;