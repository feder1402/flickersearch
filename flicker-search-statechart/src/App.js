import React from 'react'

import './App.css'
const xState = {
  appName: 'FlickrSearch (Statecharts)',
  tag: null,
  results: null
}

const tag = 'cats'

import results from './getPhotos';
import AppScenes from './App.Scenes';

const App = ({state}) => AppScenes(state)({...xState, tag: 'cats', results})

export default App 
