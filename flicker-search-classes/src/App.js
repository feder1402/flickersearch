import React, { Component } from 'react'
import Loading from './components/Loading'

import Header from './components/Header'
import SearchBar from './components/search-bar/SearchBar'
import Results from './components/Results'
import Photo from './components/Photo'
import { getFlickrPhotos } from './model/flicker-model'

import './App.css'

const AppName = 'FlickrSearch (Classes)'

class App extends Component {
  state = {
    error: null,
    isLoading: false,
    photos: null,
    tag: null,
  }

  onSearch = (tag) => {
    getFlickrPhotos(tag)
      .then(photos => this.setState({ isLoading: false, error: null, photos }))
      .catch(error => this.setState({ isLoading: false, error }))

    // Clear old images while loading new ones
    this.setState({ isLoading: true, error: null, photos: null, tag })
  }

  render() {
    const { error, isLoading, photos, tag } = this.state

    return (
      <div className="App">
        <Header AppName={AppName} ItemCollection={photos} />
        <div>
          <SearchBar onSearch={this.onSearch} {...{ error, isLoading }} />
          <Loading isLoading={isLoading} >
            {tag && <h3>tag: {tag}</h3>}
            {photos && <Results ItemRenderer={Photo} ItemCollection={photos} />}
          </Loading>
        </div>
      </div>
    )
  }
}

export default App
