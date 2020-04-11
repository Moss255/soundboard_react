import React from 'react';
import './App.css';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        
    }
    play = (e) => {
        this.props.play(this.props.file);
    }
    render() {
        if (this.props.file != null) {
            return (
                    <input type='button' onClick={this.play} value={this.props.file} className='btn btn-lg sound-button'></input>
            )
        } else {
            return null
        }
    }
}

export default Play;

