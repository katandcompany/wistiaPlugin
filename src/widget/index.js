import './widget.less';
import React from 'react';
import { render } from 'react-dom';
import { PluginProvider } from '../contexts/PluginContext';
import Widget from './components/Widget';

const target = document.getElementById('mount');
render(
  <PluginProvider>
    <Widget />
  </PluginProvider>,
  target
);
