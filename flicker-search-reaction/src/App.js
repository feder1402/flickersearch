import React, { useReducer } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'
import { Actor } from './actors/react-action'
import { useAppReducer } from './AppReducer';
import FlickrPhotoActor from './actors/FlickrPhotoActor'

import './App.css'
const AppName = 'FlickrSearch (Re:action)'

const App = () => {
  const [{ error, isLoading, photos, tag }, dispatch] = useAppReducer()

  const onSearch = (tag) => {
    console.log('onSearch: ' + tag)

    Actor.mailbox.on('me', message => {
      console.log('App: Got photos')
      dispatch({ type: message[0], payload: message[1] })
    })

    Actor.send('photos', ['get_photos', { tag, respondTo: 'me' }])
  }

  return (
    <div className="App">
      <Header AppName={AppName} ItemCollection={photos} />
      <div>
        <SearchBar onSearch={onSearch} {...{ error, isLoading }} />
        <Loading isLoading={isLoading} >
          {tag && <h3>tag: {tag}</h3>}
          {photos && <Results ItemRender={Photo} ItemCollection={photos} />}
        </Loading>
      </div>
    </div>
  )
}

export default App
