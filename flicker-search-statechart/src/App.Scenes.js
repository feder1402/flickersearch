import React from 'react'

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { match } from './utils/match';
import Photo from './components/Photo';

const Base = ({ appName, children }) =>
  <div className="App">
    <Header AppName={appName} />
    <div>
      {children}
    </div>
  </div>;

const initScene = ({ appName }) =>
  <Base appName={appName}>
    <SearchBar />
  </Base>

const loadingScene = ({ appName }) =>
  <Base appName={appName}>
    <SearchBar />
    Loading...
</Base>

const resultsScene = ({ appName, tag, results }) =>
  <Base appName={appName}>
    <SearchBar />
    <h3>tag: {tag}</h3>
    <Results ItemRender={Photo} ItemCollection={results} />
  </Base>

const scenes = {
  init: (xState) => initScene(xState),
  loading: (xState) => loadingScene(xState),
  results: (xState) => resultsScene(xState)
}

export default match(scenes);

