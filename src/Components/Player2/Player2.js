import React, { Component } from 'react';
import './Player2.css';

class Player2 extends Component {
    render() {
        return (
            <div className="player2 player">
                <h2>Player 2</h2>
                <p id="totalScore">0</p>
                <div className="currentScore">
                    <p>current</p>
                    <p>0</p>
                </div>
            </div>
        );
    }
}

export default Player2;