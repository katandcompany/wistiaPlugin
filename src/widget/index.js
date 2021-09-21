import './widget.less';
import React from 'react';
import { render } from 'react-dom';
import { WistiaProvider } from '../contexts/WistiaContext';
import Widget from './components/Widget';

const target = document.getElementById('mount');
render(
  <WistiaProvider>
    <Widget />
  </WistiaProvider>,
  target
);
