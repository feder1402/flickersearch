import Actor from './react-action/Actors'
import { getFlickrPhotos } from '../model/flicker-model'

const behavior = {
    init() {
        return {}
    },

    get_photos(state, message) {
        console.log('PHOTOS: ' + JSON.stringify(message))

        const { tag, respondTo } = message

        getFlickrPhotos(tag)
            .then(photos => Actor.send(respondTo, ['search_success', photos]))
            .catch(error => Actor.send(respondTo, ['search_failure', error]))

        Actor.send(respondTo, ['search_started', tag])
    },

    log(state) {
        console.log(state.count)
    }
}

const FlickPhotoAction = Actor.start(behavior, 'photos')
console.log('FlickrPhotoActor started...')

export default FlickPhotoAction

// Actor.send(Counter, ['log'])

// Actor.send(Counter, ['inc'])

// Actor.send(Counter, ['log'])
