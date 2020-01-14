import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import CustomerDetails from './components/Customers/CustomerDetails';
import CreateCustomer from './components/Customers/CreateCustomer';
import DetailedReporting from './components/dashboard/DetailedReporting';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
         
          <Switch>
            <Route exact path='/' component={Dashboard} /> 
            <Route path='/customer/:id' component={CustomerDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateCustomer} />
            <Route path='/detailed-reporting' component={DetailedReporting} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



