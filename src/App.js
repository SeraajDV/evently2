import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import EventDetails from './components/events/EventDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/event/:id' component={EventDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
