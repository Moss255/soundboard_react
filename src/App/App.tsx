import React, { Component } from 'react';
import {Select, MenuItem, Container, Button} from '@material-ui/core';
import axios from 'axios';
import IAppState, {Category} from './IAppState';

class App extends Component<any, IAppState> {
    private audio:HTMLAudioElement;
    constructor(props:IAppState) {
      super(props);

      this.state = {
        category: '',
        data: []
      }

      this.audio = new Audio();

      this.handleClick = this.handleClick.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount = async () => {
      const response = await axios.get(process.env.PUBLIC_URL + '/files.json');

      let newFiles:Category[] = [];
      Object.keys(response.data).map(key => {
        let file:Category = {
          categoryName: key,
          filesCollection: response.data[key]
        }
        newFiles.push(file);
        return (file)
      });
      this.setState({data: newFiles});
    }


    
    handleSelectChange = (event:React.ChangeEvent<{value: unknown | string}>) => {
      this.setState({category: event.target.value as string})
    }

    handleClick = (value: string) => {
      this.audio.src = process.env.PUBLIC_URL + '/audio/' + value;
      this.audio.play();
    }

    render = () => {
      return (
        <div>
          <Container>
          <h1> SoundBoard </h1>
          <Select
          onChange={this.handleSelectChange}
          value={this.state.category}
          displayEmpty
          >
          <MenuItem value="">Please select a category</MenuItem>
          {this.state.data.map(key => {
            return (
              <MenuItem key={key.categoryName} value={key.categoryName}>{key.categoryName}</MenuItem>
            )
          })}
          </Select>
  
          <div>
            {this.state.data.map(key => {
              return (
                key.categoryName === this.state.category &&
                  key.filesCollection.map(file => {
                    return (
                      <Button size="large" value={file} onClick={() => {this.handleClick(file)}}>{file.substring(0, file.length - 4)}</Button>
                    )
                  })
              )
            })}
          </div>
          
          </Container>
          
  
  
  
        </div>
      )
    } 
}

export default App;