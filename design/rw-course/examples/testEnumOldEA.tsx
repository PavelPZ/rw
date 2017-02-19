import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import page from './gap-fill';
import { courseNavigAction, TCourseNavigClick, scanSitemap } from 'rw-course';
import { Loader } from 'rw-lib/jsbundle-loader';
import { TDispatch } from 'rw-redux';
import valuesIn from 'lodash/valuesIn';

export const init = async () => {
  ReactDOM.render(<Root />, document.getElementById('content'));
}

const exs: Array<DCourse.IMetaNode> = [];

class Root extends React.Component<never, { title: string; }> {
  render(): JSX.Element {
    return <h3>
      <a href='#' onClick={ev => { ev.preventDefault(); this.doInit(); }}>INIT</a> |
      <a href='#' onClick={ev => { ev.preventDefault(); this.doClick(); }}>RUN</a>
      {this.state ? this.state.title : ''}
    </h3>;
  }
  async doInit() {
    //const urlBmp = "lm/oldea/english1/img/coursebook/lesson01/page08/pic_l9_b7.gif";
    //const url = "lm/oldea/english1/l08/a/hueex0_l08_a01";
    const name = System.normalizeSync("lm/oldea/english1/l01/a/hueex0_l01_a01");
    const locName = System.normalizeSync('rw-lib/loc.js');
    const configName = System.normalizeSync('rw-config/index.js');

    //System.import(name).then(m => setTimeout(() => {
    //  System.delete(name);
    //  //System.delete(locName);
    //}, 500));

    System.import(name).then(m => {
      //let res = System.delete(configName);
      //res = System.delete(locName);
      //debugger;
      System.delete(name);
    });

    //const loader = new Loader(name);
    //await loader.load();
    //loader.unload();

    //for (let i = 0; i < 100; i++) {
    //  const loader = new Loader(url);
    //  await loader.load();
    //  loader.unload();
    //}
    //const loadRoot = new Loader('lm/oldea/english1/index');
    ////const loadRoot = new Loader('lm/oldea/index');
    //const mod = await loadRoot.load();
    //const root: IMetaNode = mod.default;
    //scanSitemap(root, n => { if (n.flag == 'ex') exs.push(n); });
    //this.setState({ title: ' Init Done' });
    ////loadRoot.unload();
    ////var systemCount = valuesIn(System['defined']).length;
    //this.setState({ title: `${systemCount}` });
  }
  doClick() {
    debugger;
    let idx = 0; const errors = [];
    const loaders = exs.map(ex => new Loader(ex.url));
    const processIdx = () => {
      //if (idx > 1000) return;
      const ld = loaders[idx]; idx++;
      ld.load().then(m => {
        //var systemCount = valuesIn(System['defined']).length;
        this.setState({ title: `${idx}/${exs.length} - ${exs[idx].url}` });
        ld.unload();
        setTimeout(() => processIdx(), 1);
      }).catch(err => errors.push(err.toString()));
    };
    processIdx();

    //for (var i = 0; i < exs.length; i++) {
    //  if (i > 1000) continue;
    //  let ld = new Loader(exs[i].url);
    //  ld.load().then(m => {
    //    var systemCount = valuesIn(System['defined']).length;
    //    this.setState({ title: `${i}/${exs.length}/${systemCount} - ${exs[i].url}` });
    //    ld.unload();
    //  }).catch(err => errors.push(err.toString()));
    //}
    //if (errors.length > 0) this.setState({ title: errors.join('\r\n') });
  }
}

//const rootPresenter: React.StatelessComponent<IRootMapDispatchToProps> = props => <div>
//  <a href='#' onClick={ev => props.load({ userEmail: null, courseUrl: null, attemptId: null, pageUrl: 'rw-course/examples/gap-fill' }, ev)}>LOAD</a> | <a href='#' onClick={ev => props.load(null, ev)}>UNLOAD</a>
//  <PageLoader />
//</div>;

//interface IRootMapDispatchToProps { load: TCourseNavigClick; unload: TCourseNavigClick; }

//const Root = connect<never, IRootMapDispatchToProps, never>(
//  null,
//  (dispatch: TDispatch) => ({
//    load: (data, ev) => courseNavigAction(dispatch, data, ev),
//    unload: (data, ev) => courseNavigAction(dispatch, data, ev)
//  })
//)(rootPresenter);
