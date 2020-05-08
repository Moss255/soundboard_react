import React from 'react';
import DropDown from './dropdown';
import Play from './playButton';
import title from './SoundboardText.png';

const referenceFile = require('./files.json');



class Soundboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory : 'Karl'
        };
        this.updateSelectedCategory = this.updateSelectedCategory.bind(this);
        this.playClip = this.playClip.bind(this);
        this.audio = new Audio();
        
    }

    updateSelectedCategory = (selection) => {
        this.setState({selectedCategory: selection})
    }

    playClip = (selection) => {
        this.audio.src = process.env.PUBLIC_URL + '/audio/' + selection;
        this.audio.play();
    }

    render() {
        return (
            <div>
                <img src={title} className='title' alt='Soundboard'></img>
                <DropDown updateSelectedCategory={this.updateSelectedCategory}/>
                <div className='push'></div>
                <div className='list-group input-group button-collection'>
                    <Play file={referenceFile[this.state.selectedCategory][0]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][1]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][2]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][3]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][4]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][5]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][6]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][7]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][8]} play={this.playClip}/>
                    <Play file={referenceFile[this.state.selectedCategory][9]} play={this.playClip}/>
                </div>
                <footer className='footer'>
                    <p> <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a> </p>
                    <p> Created by Jack Moss </p>
                </footer>
            </div>

            
        )
    }
}

export default Soundboard;

