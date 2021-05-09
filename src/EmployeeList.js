import React from 'react';
import Logout from './Logout';
import './EmployeeList.css';
import {useSelector} from 'react-redux';
import employeeListData from './testData/employeList.json';
import Login from './Login';

const EmployeeList = () => {
const state =  useSelector((state) =>state.loginReducer);
const {user} = employeeListData;

    return (
        <>
        {state.formValid? 
         ( 
            
         <div>
             <Logout/> 
            <table className="content-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
                </thead>
                <tbody>
                    {
                        user.map((employee)=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td> 
                                <td>{employee.name}</td> 
                                <td>{employee.age}</td> 
                                <td>{employee.gender}</td> 
                                <td>{employee.email}</td> 
                                <td>{employee.phoneNo}</td> 
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        ) : <Login/>}
        </>
    )
}

export default EmployeeList
