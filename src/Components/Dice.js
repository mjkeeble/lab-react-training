import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        diceRoll: 1,
        imagePath: '../../public/img/dice-empty.png'
    }

    rollDice = state => {
        state.diceRoll = Math.ceil(Math.random() * 6)
    }
    render() {
        const faces = {
            0: '../../public/img/dice-empty.png',
            1: '../../public/img/dice1.png',
            2: '../../public/img/dice2.png',
            3: '../../public/img/dice3.png',
            4: '../../public/img/dice4.png',
            5: '../../public/img/dice5.png', 
            6: '../../public/img/dice6.png'
        }
        console.log(this);
        return (
            <div>
                <h2>test</h2>
                <p>{this.state.diceRoll}</p>
                <img src={this.state.imgePath} onClick={this.rollDice} alt=""/>
            </div>
        )
    }
}
