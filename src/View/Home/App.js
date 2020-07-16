import React from 'react';
import '../../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './LoginPages/login'
import Home from '../Home/HomePages/Home'
import Error from '../Home/HomePages/Error'
function App() {
  return (
    <div>
      <div className="logo">
      <img  src="https://www.internship.edu.vn/wp-content/uploads/Employer_Transaction-Technologies-logo-160x80.jpg"  ></img>
      
      </div>
      <p className="title">TRANSACTION TECHNOLOGIES LIMITED</p>
      
      <div className="App ">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;