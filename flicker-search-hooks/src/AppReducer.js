import React, { useReducer } from 'react'
import { getFlickrPhotos } from './model/flicker-model'

const INITIAL_STATE = { error: null, isLoading: false, photos: null, tag: null };

let _dispatch;

const reducer = (state, action) => {
  switch (action.type) {
    case 'search_started':
      getFlickrPhotos(action.tag)
        .then(photos => _dispatch({ type: 'search_success', photos }))
        .catch(error => _dispatch({ type: 'search_failure', error }))
      return { ...state, isLoading: true, error: null, photos: null, tag: action.tag };
    case 'search_success':
      return { ...state, isLoading: false, error: null, photos: action.photos };
    case 'search_failure':
      return { ...state, isLoading: false, error: action.error, photos: null };
    default:
      return state;
  }
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  _dispatch = dispatch
  return [state, dispatch]
}
