import {
  LOGIN_USER
} from '../actions/profile'

const initial = {
  email: '',
  loginFalse: false,
  pending: false,
}

export default (state = initial, action) => {
  const {type, payload} = action
  switch(type) {
    case LOGIN_USER.SUCCESS: 
      return {
        ...state,
        email: payload.email,
        pending: false,
      }
    case LOGIN_USER.PENDING:
      return {
        ...state,
        pending: true,
        loginFalse: false
      }
    case LOGIN_USER.FAILURE:
      return {
        ...state,
        loginFalse: true,
        pending: false
      }
    default:
      return state
  }
}