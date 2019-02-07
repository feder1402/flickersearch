import React from 'react';

import { object, select, text } from '@storybook/addon-knobs';
import SearchBox from '../src/components/SearchBar'

const SearchBoxStories = () => {
    const options = ['init', 'loading', 'results', 'unknown']

    const state = select('state', options, 'init');

    return (
      <SearchBox />
    )
  }

export default SearchBoxStories