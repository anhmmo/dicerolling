import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        return (
            <div className="diceIcon">
                <div id="newGameBtn">
                    <i className="ion-ios-plus-outline"></i>
                    <p className="newGameText">New Game</p>
                </div>

                <img src="https://www.metropolia.website/noppa/images/dice-1.png" className="dice1"></img>

                <img src="https://www.metropolia.website/noppa/images/dice-2.png" className="dice2"></img>

                <div id="rollDice">
                    <i class="ion-ios-loop"></i>
                    <p className="rollDiceText">roll dice</p>    
                </div>

                <div id="holdIcon">
                    <i class="ion-ios-download-outline"></i>
                    <p className="holdIconText">hold</p>  
                </div>

                <input id="inputScore" placeholder="final score"></input>
            </div>
        );
    }
}

export default Dice;