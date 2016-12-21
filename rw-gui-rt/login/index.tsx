import React from 'react';

import theme from "../theme";

import { loginCreator, TLoginPresent, loginProxy } from '../../rw-login/index';

const LoginPresent: TLoginPresent = props => {
  console.log('render Login');
  return null;
};

const Login = loginCreator(LoginPresent);

const init = () => loginProxy.value = props => <Login {...props} />;
export default init;

