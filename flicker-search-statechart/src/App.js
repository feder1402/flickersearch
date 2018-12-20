import React from 'react'

import Header from './components/Header'
import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'

import './App.css'
const extendedState = {
  appName: 'FlickrSearch (Statecharts)',
  tag: null,
  results: null
}

const initScene = ({appName}) =>
  <div className="App">
    <Header AppName={appName} />
    <div>
      <SearchBar />
    </div>
  </div>

const loadingScene = ({appName}) =>
  <div className="App">
    <Header AppName={appName} />
    <div>
      <SearchBar />
      Loading...
  </div>
  </div>

const resultsScene = ({appName, tag, results}) =>
  <div className="App">
    <Header AppName={appName} />
    <div>
      <SearchBar />
      <h3>tag: {tag}</h3>
      <Results ItemRender={Photo} ItemCollection={results} />
    </div>
  </div>

const tag = 'cats'

import results from './getPhotos';
import { match } from './utils/match';

const AppRender = (state, extendedState) => {
  return match({
    init: () => initScene(extendedState),
    loading: () => loadingScene(extendedState),
    results: () => resultsScene(extendedState)
  }) (() => <h1>Unknown State</h1>)(state)
}

const App = AppRender('init', {...extendedState, tag: 'cats', results})

export default App
