import React, { useEffect } from 'react';
import axios from 'axios';
import Soundboard from '../Views/Soundboard/Soundboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  useEffect(() => {

  }, [])

  return (
    <Router basename='/soundboard'>
      <Switch>
        <Route path='/:selection' render = { (props) => <Soundboard {...props} />} />
        <Route path='/' render = { (props) => <Soundboard {...props}/>} />
      </Switch>
    </Router>
  )
}
    /* componentDidMount = async () => {
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
    } */

export default App;