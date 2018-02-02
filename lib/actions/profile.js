import asyncAction from './asyncaction'

export const LOGIN_USER = asyncAction('LOGIN_USER')

export const loginUserSuccess = props => ({
  type: LOGIN_USER.SUCCESS,
  payload: props
})
export const loginUserPending = () =>({type: LOGIN_USER.PENDING})
export const loginUserFailure = () =>({type: LOGIN_USER.FAILURE})