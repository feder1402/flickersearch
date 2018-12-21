import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import App from '../src/App'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('App', () => {
    const options = ['init', 'loading', 'results', 'unknown']
    const value = select('state', options, 'init');
    return (<App state={value} />)
  })