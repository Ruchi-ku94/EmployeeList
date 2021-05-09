import { Types } from '../actions/actionTypes';

const initialState = {
  username: '',
  password: '',
  submitted: false,
  formValid: false,
  dangerUsername:false,
  dangerPassword:false
}
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case (Types.LOGIN):
      return { ...state, ...action.payload };
    case (Types.LOGOUT):
      return { ...state, ...action.payload };
    case (Types.FORMVALID):
      return {
        ...state,
        ...action.payload
      };
    case(Types.UserNameError):
    return {...state,...action.payload};
    case(Types.PasswordError):
      return {...state,...action.payload};
    default:
      return state;
  }
}