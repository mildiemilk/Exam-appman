import axios from 'axios'
import store from '../store'
import { loginUserSuccess, loginUserPending, loginUserFailure } from '../actions/profile'
import { LOGIN_USER } from '../actions/profile'

const BASE_URL = 'http://localhost:3000'

export const addFormDetail = props => {
  console.log('detail', props)

	store.dispatch(loginUserPending())

	axios.post(BASE_URL + '/api/login', props) 
		.then(response => {
			store.dispatch(loginUserSuccess(props))
			alert('Login Successed')
		})
		.catch(err => {
			store.dispatch(loginUserFailure())
		})
}
