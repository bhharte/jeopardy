import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Clock from './components/clock/Clock';
import Welcome from './components/welcome/Welcome'
import Navigation from './components/navigation/Navigation';
import ErrorPage from './components/error/ErrorPage';
import Jeopardy from './components/jeopardy/Jeopardy';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route exact path="/" component={Welcome}/>

      <Route path="/clock" component={Clock} /> 
      
      <Route exact path="/jeopardy" component={Jeopardy} />
      
      <Route component= {ErrorPage} />

      </Switch>
      
    </div>

  )
}


  


export default App;
