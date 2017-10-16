import React from 'react';
import Words from '../data/words';
import PropTypes from 'prop-types';

import Letter from './letter';

let WordArranger = ({word}) => {
    return (
        <ul className="word">
            {
                word.map((char, index) => {
                    return <li key={index}>?<span>{char}</span></li>
                })
            }
        </ul>
    )
}

WordArranger.propTypes = {
    word: PropTypes.array.isRequired
}

export default WordArranger;