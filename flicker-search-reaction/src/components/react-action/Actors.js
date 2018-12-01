import EventEmitter from 'eventemitter3'

const mailbox = new EventEmitter()

const Actor = {
    mailbox,
    start(behavior, pobox) {
        const address =  pobox || Symbol()
        let state = typeof behavior.init === 'function' ? behavior.init() : {}

        mailbox.on(address, ([method, message]) => {
            // console.log('Actors.on: method=' + method + ', message= ' + JSON.stringify(message))
            state = behavior[method](state, message) || state
        })

        return address
    },

    send(target, message) {
        // console.log('Emiting: target= ' + target + ', message= ' + JSON.stringify(message) )
        mailbox.emit(target, message)
    }
}

export default Actor