import React from 'react';
import Words from '../data/words';

class WordCreator extends React.Component {
    constructor(props) {
        super(props);
    }

    //max & min inclusive
    getRandomWord() {
        let min = 0;
        let max = Words.length - 1;
        let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        return Words[randomIndex];
    }

    render() {
        let randomWordObj = this.getRandomWord().word;
        let randomWordArray = randomWordObj.split('');

        return (
            <ul className="word">
                {
                    randomWordArray.map((letter, i) => {
                        return <li key={i}>?<span>{letter}</span></li>
                    })
                }
            </ul>
        );
    }
}

export default WordCreator;