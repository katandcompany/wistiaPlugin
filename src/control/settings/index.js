import './settings.less';
import React from 'react';
import { render } from 'react-dom';
import Settings from './Settings';

const target = document.getElementById('mount');
render(<Settings />, target);
