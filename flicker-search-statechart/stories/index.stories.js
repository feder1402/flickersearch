import React from 'react';

import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs } from '@storybook/addon-knobs';

import AppStories from './App.stories'
import SearchBoxStories from './SearchBox.stories'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: 'A host container for components under test.',
      align: 'top center',
      // height: '100%',
      // width: '100%',
      background: "white",
      backdrop: "lightgray",
      border: true
    }),
  )
  .addWithJSX('App', AppStories)
  .addWithJSX('SearchBox', SearchBoxStories)