import React, { StrictMode } from 'react'
import { ErrorBoundary, FallbackView } from 'react-error-boundaries'
import Loading from './components/Loading'

import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'

import './App.css'
import { useAppReducer } from './AppReducer';

const App = () => {
  const [state, dispatch] = useAppReducer()
  const { error, isLoading, photos, tag } = state

    return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={FallbackView}>
        <div className="App">
          <h1>Flickr Search {photos && ' - Retrieved ' + photos.length + ' photos'}</h1>
          <div>
            <SearchBar onSearch={(tag) => dispatch({ type: 'search_started', tag })} {...{ error, isLoading }} />
            <Loading isLoading={isLoading} />
            {tag && <h3>tag: {tag}</h3>}
            {photos && <Results ItemRender={Photo} collection={photos} />}
          </div>
        </div>
      </ErrorBoundary>
    </StrictMode>
  )
}

export default App
