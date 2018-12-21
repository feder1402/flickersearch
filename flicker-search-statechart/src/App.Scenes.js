import React from 'react'

import Header from './components/Header';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/Results';
import { match } from './utils/match';
import Photo from './components/Photo';

const initScene = ({ appName }) => <div className="App">
  <Header AppName={appName} />
  <div>
    <SearchBar />
  </div>
</div>;

const loadingScene = ({ appName }) => <div className="App">
  <Header AppName={appName} />
  <div>
    <SearchBar />
    Loading...
  </div>
</div>;

const resultsScene = ({ appName, tag, results }) => <div className="App">
  <Header AppName={appName} ItemCollection={results}/>
  <div>
    <SearchBar />
    <h3>tag: {tag}</h3>
    <Results ItemRender={Photo} ItemCollection={results} />
  </div>
</div>;

const scenes = {
  init: (xState) => initScene(xState),
  loading: (xState) => loadingScene(xState),
  results: (xState) => resultsScene(xState)
}

export default match(scenes);

