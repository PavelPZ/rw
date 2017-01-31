import { callRequest } from './common';
import render from 'rw-lib/render-markup';
import config from 'rw-config';

//declare module 'config' {
//  interface IConfig {
//    serviceEmailerUrl: string
//  }
//}

export interface ISendEmailIN {
  from: string;
  to: string; //e.g. "Josef Novak"<josef@lm.cz>,"Jana K"<jana@lm.cz>
  cc?: string;
  bcc?: string;
  isBodyHtml?: boolean;
  body: string | JSX.Element;
  subject: string;
}

export function sendEMail(email: ISendEmailIN): Promise<never> {
  if (typeof email.body != 'string') {
    email.isBodyHtml = true;
    email.body = render(email.body);
  }
  return callRequest(config.serviceEmailerUrl, email);
}