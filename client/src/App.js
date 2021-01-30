import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import NewLink from './components/NewLink/NewLink'
import Home from './components/Home/Home'
import TaskGenerator from './components/TaskGenerator/TaskGenerator'
import Feed from './components/Feed/Feed'
import Relaxation from './components/Relaxation/Relaxation'
import './App.css';

export default class App extends React.Component {
  // __init__(self, ...)
  constructor() {
    super()
    this.state = {
      counter: 1,
    }
  }
  /*
  Example method for updating state
  updateCounter() {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    })
  }
  */


  // __len__, __init__,
  componentDidMount() {
    // Make call to backend
    // axios.'https://localhost:5000/api/_____
    /*
    GET - gets data from the backend
    {
      "age" : 12,
      "name": "Me", 
    }
    POST - You can send a user's login and password
    DELETE - DELETE data from the backend
    UPDATE - UPdates data in the backend
    */


  }

  render() {
    return (
      <div>
        <Router>
          <AppBar style={{position: 'relative'}}>
            <Toolbar>
              <NewLink location='/' text="Stay-At-Home Hub" variant="h4"/>
              <NewLink location='/taskgen' text="Task Generator" variant="h6" />
              <NewLink location='/feed' text="Feed" variant="h6" />
              <NewLink location='/relaxation' text="Relaxation" variant="h6" />
            </Toolbar>
          </AppBar>
          <Route path='/' exact component={Home} />
          <Route path='/taskgen' component={TaskGenerator} />
          <Route path='/feed' component={Feed} />
          <Route path='/relaxation' component={Relaxation} />
        </Router>
      </div>
    );
  }
}
