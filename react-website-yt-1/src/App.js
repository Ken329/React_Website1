import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/service' component={Service}></Route>
            <Route path='/product' component={Product}></Route>
            <Route path='/signUp' component={SignUp}></Route>
          </Switch>
      </Router>  
    </>
  );
  
}
export default App;
