import Actor from './Actors'
import { getFlickrPhotos } from './model/flicker-model' 

const behavior = {
    init() {
        return { count: 0 }
    },

    getCollection(state, message) {

    },

    log(state) {
        console.log(state.count)
    }
}

const Counter = Actor.start(behavior)

Actor.send(Counter, ['log'])

Actor.send(Counter, ['inc'])

Actor.send(Counter, ['log'])
