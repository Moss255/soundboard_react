import React from 'react';
import {Select, MenuItem, Container, Button, AppBar, Typography, makeStyles, Theme} from '@material-ui/core';
import ISoundboardProps from './ISoundboardProps';
import axios from 'axios';
import ISoundboardState from './ISoundboardState';

class Soundboard extends React.Component<ISoundboardProps, ISoundboardState> {
    private audio = new Audio();

    constructor(props:ISoundboardProps) {
        super(props);

        this.state = {
            selection: [],
            files: [],
            currentFile: ''
        }
    }

    fetchMenu = async () => {
        const response = await axios.get(process.env.PUBLIC_URL + '/options.json');

        this.setState({selection: response.data});
    }

    fetchFiles = async (selection: string) => {
        console.log(selection);
        if (selection !== undefined) {
            const response = await axios.get(process.env.PUBLIC_URL + '/files.json');
            this.setState({files: response.data[selection]});
        } else {
            this.setState({files: []});
            return false;
        }
        
    }

    componentDidMount = async () => {
        this.fetchMenu();
        this.fetchFiles(this.props.match.params.selection);
    }

    componentDidUpdate = async (prevProps:ISoundboardProps) => {
        if (prevProps.match.params.selection !== this.props.match.params.selection) {
            this.fetchFiles(this.props.match.params.selection);
        }
    }

    handleSelectChange = (event:React.ChangeEvent<{value: unknown | string}>) => {
        this.props.history.push(`/${event.target.value}`);
    }

    handleClick = (value: string) => {
        this.audio.src = process.env.PUBLIC_URL + '/audio/' + value;
        this.audio.play();
      }

    render = () => {
        return (
            <div>
              <AppBar style={{flexGrow: 1, padding: 20}} position='static'>
                <Typography variant='h6' style={{flexGrow: 1}}>
                  Soundboard
                </Typography>
              </AppBar>
              <div style={{marginTop: 20}}>
    
              </div>
              <Container>
              <Select
              onChange={this.handleSelectChange}
              value={this.props.match.params.selection}
              displayEmpty
              >
              <MenuItem value={''}>Please select a category</MenuItem>
              {this.state.selection.map(key => {
                return (
                  <MenuItem key={key} value={key}>{key}</MenuItem>
                )
              })}
              </Select>
      
              <div>
                {this.state.files.map(file => {
                  return (
                    <Button 
                    size="large"
                    value={file}
                    style={{width: '100%'}}
                    onClick={() => {this.handleClick(file)}}
                    >
                    {file.substring(0, file.length - 4)}
                    </Button>
                  )
                })}
              </div>
              </Container>

            
              

              

              
              
            </div>
        )
    }
    
}

export default Soundboard