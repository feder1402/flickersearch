import React from 'react'

import Header from './components/Header';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/Results';
import { match } from './utils/match';
import Photo from './components/Photo';

export const initScene = ({ appName }) => <div className="App">
  <Header AppName={appName} />
  <div>
    <SearchBar />
  </div>
</div>;

export const loadingScene = ({ appName }) => <div className="App">
  <Header AppName={appName} />
  <div>
    <SearchBar />
    Loading...
  </div>
</div>;
export const resultsScene = ({ appName, tag, results }) => <div className="App">
  <Header AppName={appName} />
  <div>
    <SearchBar />
    <h3>tag: {tag}</h3>
    <Results ItemRender={Photo} ItemCollection={results} />
  </div>
</div>;

export default match({
  init: (extendedState) => initScene(extendedState),
  loading: (extendedState) => loadingScene(extendedState),
  results: (extendedState) => resultsScene(extendedState)
});