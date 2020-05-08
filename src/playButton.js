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
                <button onClick={this.play} className='list-group-item'>
                    <div>
                        <p> {this.props.file} </p>
                    </div>
                </button>
                    //<input type='button'  value={this.props.file} className='btn btn-lg '></input>
            )
        } else {
            return null
        }
    }
}

export default Play;

