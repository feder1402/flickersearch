import Actor from './Actors'

const behavior = {  
    init() {
        return {}
    },

    getPhotos(state, message) {
        const {tag, respondTo} = message
        

    },

    log(state) {
        console.log(state.count)
    }
}

const Director = Actor.start(behavior)

export default Director
