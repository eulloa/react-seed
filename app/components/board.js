import React from 'react';

import WordArranger from './wordArranger';
import Keyboard from './keyboard';

import Words from '../data/words';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: []
        }
    }

    //max & min inclusive
    getRandomWord = () => {
        let min = 0;
        let max = Words.length - 1;
        let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        return Words[randomIndex];
    }

    componentDidMount() {
        let word = this.getRandomWord().word.split('');

        this.setState({
            word
        })
    }

    guessLetter = (button) => {
        // let letter = button.target.value;
        // if (this.state.word.includes(letter)) {

        // }
        console.log(button.type);
    }

    handleClick = (e) => {
        console.log(e)
    }
    
    render() {
        return (
            <div className="board">
                <WordArranger word={this.state.word} />
                <Keyboard onClick={this.handleClick} />
            </div>
        );
    }
}

export default Board;