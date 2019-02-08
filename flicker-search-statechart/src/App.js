import React from 'react'

import './App.css'

import AppPuppet from './App.Puppet';

const App = ({state, xState}) => AppPuppet(state)(xState)

export default App 
