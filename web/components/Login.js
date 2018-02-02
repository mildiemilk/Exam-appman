import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm,  formValueSelector  } from 'redux-form'
import {addFormDetail} from '../../lib/handlers/profile'
import LoginForm from './LoginForm'

class Login extends Component {
  constructor(props){
		super(props)
		this.state = {
    }
  }
  componentWillReceiveProps(NextProps){
    console.log('Next', NextProps)
  }

  render() {
    const {loginValues, loginFalse, pending} = this.props
    return(
      <LoginForm addFormDetail={addFormDetail} loginValues={loginValues} loginFalse={loginFalse} status={pending}/>
    )
  }
}

Login = reduxForm({
  form: 'login'
})(Login)

const selector = formValueSelector('login')

const mapStateToProps = state => ({
  loginValues : selector(state,"email","password"),
  profile: state.profile,
  loginFalse: state.profile.loginFalse,
  pending: state.profile.pending
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);