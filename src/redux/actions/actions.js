import { Types } from './actionTypes';

export const loginAction = (name, value) =>({ 
  type: Types.LOGIN,
  payload: {[name]: value, dangerPassword:false, dangerUsername:false } 
 });
export const logoutAction = () =>{
  return {
   type: Types.LOGOUT,
   payload: {
     username: '',
     password: ''
   }
  }};
export const formValid = () =>{
  return {
   type: Types.FORMVALID,
   payload: {formValid: true}
}};
export const usernameError = () =>{
  return {
   type: Types.UserNameError,
   payload: {username:'Invalid Username',dangerUsername:true}
}};
export const passwordError = () =>{
  return {
   type: Types.PasswordError,
   payload: {password:'Invalid password',dangerPassword:true}
}};
