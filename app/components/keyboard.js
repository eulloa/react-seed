import React from 'react';

let Keyboard = (props) => {
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return (
        <ol className="keyboard">
            {
                alphabet.map((letter, i) => {
                    return <li key={i}><button onClick={(e) => {props.onClick(e)}}>{letter}</button></li>
                })
            }
        </ol>
    )
}

export default Keyboard;