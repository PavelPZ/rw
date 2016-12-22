import React from 'react';

import theme from "rw-gui-rt/theme";
import { loginCreator, TLoginPresent, loginProxy } from 'rw-login/index';

const LoginPresent: TLoginPresent = props => {
  console.log('render Login');
  return <h2>Select Login ID</h2>;
};

const Login = loginCreator(LoginPresent);
const init = () => loginProxy.value = props => <Login {...props} />;
export default init;

