import * as fela from 'fela';
import * as felaDOM from 'fela-dom';

let renderer: DFela.IRenderer = null;
const adjustRenderer = () => {
  if (renderer) return renderer;
  renderer = fela.createRenderer();
  felaDOM.render(renderer, document.getElementById('fela-style'));
  return renderer;
}

export const renderRule = (rule: DFela.TRule | DFela.IStyle, props?: DFela.TRuleProps) => typeof rule === 'function' ? adjustRenderer().renderRule(rule, props) : adjustRenderer().renderRule(() => rule, {});