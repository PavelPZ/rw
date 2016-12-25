import React from 'react';
import ReactDOM from 'react-dom';
import { sendEMail, ISendEmailIN } from './emailer';

export function init() {
  ReactDOM.render(<a href='#' onClick={ev => {
    ev.preventDefault();
    const email: ISendEmailIN = { from: 'pzika@langmaster.com', to: '"Pavel Zika"<pzika@langmaster.cz>', subject: 'test email', body: <div><h2>test email title</h2><p>test email body</p></div> };
    sendEMail(email).then(() => alert('ok')).catch(err => alert(`Error: ${err}`))
  } }>Send EMAIL</a>, document.getElementById('content'));
}