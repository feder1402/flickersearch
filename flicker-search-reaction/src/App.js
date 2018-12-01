import React, { useReducer, StrictMode } from 'react'
import { ErrorBoundary, FallbackView } from 'react-error-boundaries'
import Loading from './components/Loading'

import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'
import { Actor } from './components/react-action'

import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'search_started':
      return { ...state, isLoading: true, error: null, photos: null, tag: action.payload }
    case 'search_success':
      return { ...state, isLoading: false, error: null, photos: action.payload }
    case 'search_failure':
      return { ...state, isLoading: false, error: action.payload, photos: null }
    default:
      return state
  }
}

const App = () => {
  const [{ error, isLoading, photos, tag }, dispatch] = useReducer(reducer, { error: null, isLoading: false, photos: null, tag: null })

  const onSearch = (tag) => {
    console.log('onSearch: ' + tag)

    Actor.mailbox.on('me', message => {
      // console.log('ME: ' + JSON.stringify(message))
      dispatch({type: message[0], payload: message[1]})
    })

    Actor.send('photos', ['get_photos', { tag, respondTo: 'me' }])
  }

  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={FallbackView}>
        <div className="App">
          <h1>Flickr Search {photos && ' - Retrieved ' + photos.length + ' photos'}</h1>
          <div>
            <SearchBar onSearch={onSearch} {...{ error, isLoading }} />
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
