import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Dashboard} exact={true}></Route>
      </div>
    </BrowserRouter>
  )
};

export default App;
