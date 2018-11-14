import { Machine } from 'xstate';
import { interpret } from 'xstate/lib/interpreter';

export const create = ( spec ) => {
  let state;
  const listeners = new Set();

  const machine = Machine( spec );

  const service = interpret( machine )
      .onTransition( newState => {
        // Update state
        state = newState.value

        // Notify listeners
        listeners.forEach( listener => listener( newState.value ) );
      } )

  const start = () => service.start();

  const getState = () => state;

  const sendEvent = ( event ) => {
    service.send( event );
  }

  const subscribe = listener => {
    listeners.add( listener );
    return () => listeners.delete( listener );
  }

  return Object.freeze({ getState, sendEvent, start, subscribe });
}

