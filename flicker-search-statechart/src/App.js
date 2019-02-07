import React from 'react'

import './App.css'

import AppScenes from './App.Scenes';

const App = ({state, xState}) => AppScenes(state)(xState)

export default App 
