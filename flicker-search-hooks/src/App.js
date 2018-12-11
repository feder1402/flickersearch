import React, { StrictMode } from 'react'
import { ErrorBoundary, FallbackView } from 'react-error-boundaries'
import Loading from './components/Loading'

import Header from './components/Header'
import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'

import './App.css'
const AppName = 'FlickrSearch (Hooks)'

import { useAppReducer } from './AppReducer';

const App = () => {
  const [state, dispatch] = useAppReducer()
  const { error, isLoading, photos, tag } = state

  return (
    <div className="App">
      <Header AppName={AppName} ItemCollection={photos} />
      <div>
        <SearchBar onSearch={(tag) => dispatch({ type: 'search_started', tag })} {...{ error, isLoading }} />
        <Loading isLoading={isLoading} >
          {tag && <h3>tag: {tag}</h3>}
          {photos && <Results ItemRender={Photo} ItemCollection={photos} />}
        </Loading>
      </div>
    </div>
  )
}

export default App
