import './widget.less';
import React from 'react';
import { render } from 'react-dom';
import { PluginProvider } from '../contexts/PluginContext';
import InlineStyles from './components/InlineStyles';
import Widget from './components/Widget';

const target = document.getElementById('mount');
render(
  <PluginProvider>
    <InlineStyles />
    <Widget />
  </PluginProvider>,
  target
);
