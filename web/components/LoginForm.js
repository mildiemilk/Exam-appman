import React from 'react'
import { Field } from 'redux-form'
import Logo from '../logo.svg'

export default ({ status, loginFalse, loginValues, addFormDetail }) => <div className="white-frame">
  <div className="detail">
    <img className={status?"logo-spin":null} src={Logo} width="180px" height="180px"/>
    <div className="text-div"><p className="text-style">E-mail address</p></div>
    <Field
      name="email"
      component="input"
      type="email"
      placeholder="Email"
    />
    <div className="text-div"><p className="text-style">Password</p></div>
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="password"
      />
      <div className="text-div">{loginFalse?<p className="errorText-style">E-mail or password is incorrect</p>:null}</div>
    <button className="button-style" onClick={() => addFormDetail(loginValues)}>SIGN IN</button>
  </div>
  <a className="left-link">Forgot Password ? </a>
  <a className="right-link">Create a new account </a>
</div>
