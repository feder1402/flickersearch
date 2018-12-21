import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, select, text, withKnobs } from '@storybook/addon-knobs';

import App from '../src/App'
import photos from '../src/getPhotos';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('App', () => {
    const options = ['init', 'loading', 'results', 'unknown']

    const state = select('state', options, 'init');
    const appName = text('appName', 'FlickrSearch (Statecharts)')
    const tag = text('tag', 'cats')
    const results = object('results', photos)

    return (<App state={state} xState={{appName, tag, results}}/>)
  })