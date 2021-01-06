import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/login'
import SignUp from './components/signup'
import Welcome from './components/Welcome'
import ContactUs from './components/contacts'
class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/home" component={Welcome}/>
                    <Route path="/contact-us" component={ContactUs}/>
                    <Route path="/shop" component={Home}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
