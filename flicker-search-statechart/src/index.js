import './index.css'

import React from 'react'
import {render} from 'react-dom'

import App from './App'

render(<App state='init'/>, document.querySelector('#app'))
