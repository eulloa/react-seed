import React from 'react';

import WordCreator from './wordCreator';

class App extends React.Component {
    render() {
        return (
            <div className="board">
                <WordCreator />
            </div>
        );
    }
}

export default App;