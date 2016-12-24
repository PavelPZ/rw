﻿import React from 'react';

import theme from "rw-gui-rt/theme";
import { loginCreator, TLoginPresent, loginProxy } from 'rw-login/index';

const LoginPresent: TLoginPresent = props => {
  console.log('render Login');
  return <div>
    <h1>{props.guiLarge === true ? 'large' : (props.guiLarge === false ? 'small' : 'undefined')}</h1>
  </div>
};

const Login = loginCreator(LoginPresent);
const init = () => loginProxy.value = props => <Login {...props} />;
export default init;