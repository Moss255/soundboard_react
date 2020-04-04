import React from 'react';
import icon from './Sound-Icon.png';
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
                <div className='container'>
                    <input type='button' src={icon} onClick={this.play} value={this.props.file} className='btn btn-primary btn-lg justify-content-lg-center SoundButton'></input>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Play;

