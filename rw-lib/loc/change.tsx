import React from 'react';
import config from 'rw-config';
import { store, makeAsync, Reducer, TDispatch } from 'rw-redux';
import { connect, ComponentDecorator } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { LoaderCache, Loader } from 'rw-lib/jsbundle-loader';
import { IntlProvider, addLocaleData, LocaleData } from "react-intl";
import * as Cookies from "js-cookie";
import { createSelector } from 'reselect';

//async INIT - load default locales
export function locInit() {
  const polyfill = needsPolyfill ? System.import('intl') : Promise.resolve(null);
  polyfill.then(() => doActLocAction(actLoc()));
}

export interface ILocProps { actLoc: string; }

const locSelector = createSelector<DRedux.IRootState, ILocProps, string>(
  (state: DRedux.IRootState) => state.actLoc,
  actLoc => ({ actLoc: actLoc })
);

const locPresent: React.StatelessComponent<ILocProps> = props => props.actLoc ? <IntlProvider locale={props.actLoc}>{props.children}</IntlProvider> : null;

export const LocProvider = connect<ILocProps, never, never>(
  (state: DRedux.IRootState) => locSelector(state)
)(locPresent);


/*
LM Langs (DLoc.Langs, LANG.split('-')[0]), not found in d:\rw\rw\jspm_packages\npm\react-intl@2.2.3\locale-data\:
"sp", "co", "mi", "oc", "quz"
*/

export interface IActLocActionStart extends Action { type: 'ACT_LOC_START'; loc: DLoc.Langs } const ACT_LOC_START = 'ACT_LOC_START';
export interface IActLocActionEnd extends Action { type: 'ACT_LOC_END'; loc: DLoc.Langs; locale: LocaleData } const ACT_LOC_END = 'ACT_LOC_END';

export const doActLocAction = (loc: DLoc.Langs, dispatch?: TDispatch): IActLocActionStart => (dispatch ? dispatch : store.dispatch)({ type: ACT_LOC_START, loc: loc } as IActLocActionStart);

const actLocReducer: Reducer<string, IActLocActionStart | IActLocActionEnd> = (state, action) => {
  //if (!state) return '';
  switch (action.type) {
    case ACT_LOC_START:
      const adjustLoader = (id:string) => cache.adjust<Loader>(() => new Loader(id), l => l.id == id);
      const loader = adjustLoader(getIntlPath(action.loc));
      const polyfilLoader = needsPolyfill ? adjustLoader(getPolyfillPath(action.loc)) : null;
      makeAsync(action, Promise.all([loader, polyfilLoader]).then((res: [LocaleData, any]) => {
        const actEnd: IActLocActionEnd = { type: ACT_LOC_END, loc: action.loc, locale: res[0] };
        return actEnd;
      }));
      return state;
    case ACT_LOC_END:
      Cookies.set(locCookie, action.loc, { expires:365 });
      addLocaleData(action.locale);
      return action.loc;
    default: return state;
  }
};

export const actLocReducerFnc = (state: DRedux.IRootState, action: any): DRedux.IRootState => {
  return {
    actLoc: actLocReducer(state.actLoc, action),
  }
}

const languageWithoutRegionCode = (lang:string) => lang.toLowerCase().split(/[_-]+/)[0];
const locCookie = 'loc-cookie';

const actLoc = () => {
  const language: DLoc.Langs = Cookies.get(locCookie) || config.initLoc || ((navigator as any).languages && (navigator as any).languages[0]) || navigator.language || (navigator as any).userLanguage || 'en-gb';
  return language;
}

const needsPolyfill = typeof Intl === 'undefined'; 
const cache: LoaderCache = new LoaderCache(needsPolyfill ? 2 : 1);
const getIntlPath = (lang: DLoc.Langs) => `react-intl/locale-data/${languageWithoutRegionCode(lang)}.js`;
const getPolyfillPath = (lang: DLoc.Langs) => `intl/locale-data/jsonp/${languageWithoutRegionCode(lang)}.js`;

