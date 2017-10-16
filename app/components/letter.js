import React from 'react';

class Letter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val: ''
        }
    }

    handleKeyUp = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    onlyOne = (e) => {
        this.setState({
            val: this.state.val.substr(0, 1)
        })
    }   

    render() {
        return (
            <div>
                <input placeholder="?" onKeyUp={(e) => {this.handleKeyUp(e); this.onlyOne(e)}} />
                <span>{this.props.letter}</span>
            </div>
        )
    }
}

export default Letter;