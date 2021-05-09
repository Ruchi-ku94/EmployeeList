import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom'
import Login from './Login';
import EmployeeList from './EmployeeList'; 
import './App.css'

const App =()=>{

  return (
    <>
     <Router>
       <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/EmployeeList' component={EmployeeList}/>
       </Switch>
       
     </Router>
    </>
  )
}

export default App;