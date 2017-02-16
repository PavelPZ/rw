import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormattedDate,
  FormattedRelative,
  FormattedNumber,
  FormattedMessage,
  intlShape,
  injectIntl,
} from 'react-intl';
import { LocProvider, locInit, actLocReducerFnc, doActLocAction } from './loc-change';
import { Store } from 'redux';
import { blockGuiProxy, appInit, TMiddlewareAPI, getActState, blockGuiReducerFnc } from 'rw-redux';


const rootReducer = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    ...blockGuiReducerFnc(state, action),
    ...actLocReducerFnc(state, action),
  };
}

export const init = () =>
  locInit();
appInit(rootReducer, document.getElementById('content'), () =>
  <LocProvider>
    <div>
      <p>
        <a href='#' onClick={ev => { ev.preventDefault(); doActLocAction('cs-cz') }}>cs-cz</a> |
        <a href='#' onClick={ev => { ev.preventDefault(); doActLocAction('de-de') }}>de-de</a> |
        <a href='#' onClick={ev => { ev.preventDefault(); doActLocAction('en-gb') }}>en-gb</a> |
        <a href='#' onClick={ev => { ev.preventDefault(); doActLocAction('zh-hk') }}>zh-hk</a> |
    </p>
      <p>
        Number: <FormattedNumber value={1000} currency="USD" currencyDisplay="symbol" style="currency" /><br />
        Date: <FormattedDate value={new Date()} month='long' /><br />
      </p>
    </div>
  </LocProvider>
);
