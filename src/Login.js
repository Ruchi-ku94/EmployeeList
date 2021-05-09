import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import loginData from './testData/loginData.json';
import { loginAction,formValid,usernameError,passwordError } from './redux/actions/actions';
import './login.css'

const Login = () => {
    const mystate = useSelector((state)=> state.loginReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const formValidCheck = (username, password) =>{
       if(username === loginData.username && password === loginData.password ){
            dispatch(formValid());
            history.push('/EmployeeList');
       }
    }

    const onSubmitHandler = (e)=>{
          e.preventDefault();
          formValidCheck(mystate.username, mystate.password);
          if(mystate.username !== loginData.username){
              dispatch(usernameError())
          } 
          if(mystate.password !== loginData.password)  {
            dispatch(passwordError()) 
          }   
    }
    const onChangeHandler = (e)=>{
        const {name, value} = e.target;
        //formValidCheck(name, value);
        dispatch(loginAction(name,value))
    }


    return (
        <div className='center'>
            <h1>Login Page</h1>
            <form onSubmit={onSubmitHandler}>
            <div className='txt-field'>
            <input type='email' name='username' placeholder='username' value={mystate.username} className={mystate.dangerUsername?'danger':''} onChange={onChangeHandler}/>
            </div>
            <div className='txt-field'>
            <input type={mystate.password !== 'Invalid password' ? 'password':'text' } name='password' placeholder='password' value={mystate.password} className={mystate.dangerPassword?'danger':''} onChange={onChangeHandler} />
            </div>
          <button type='submit' >Login</button> 
          </form> 
        </div>
    )
}
export default Login;

