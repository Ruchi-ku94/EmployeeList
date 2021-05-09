import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logoutAction } from './redux/actions/actions';
import './EmployeeList.css';

const Logout = () => {
    const dispatch = useDispatch();
    const onLogoutHandler = ()=>{
        dispatch(logoutAction())
    }
    return (
        <Link to = "/" className="btn" onClick={onLogoutHandler}>LOGOUT</Link>
    )
}

export default Logout
