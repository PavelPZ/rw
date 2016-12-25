import React from 'react';
import ReactDOM from 'react-dom';

export default function render(markup: JSX.Element): string {
  const el = document.getElementById('render-markup');
  ReactDOM.render(markup, document.getElementById('render-markup'));
  return el.innerHTML;
}