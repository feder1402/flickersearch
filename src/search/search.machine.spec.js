import { create } from '../StateMachine';

const spec = {
  id: 'SearchBox',
  initial: "initial",
  states: {
    initial: {
      onEntry: [ "enteredInitial" ],
      on: {
        UPDATE_QUERY: { actions: [ "update_query" ] },
        CLEAR_QUERY: { actions: [ "clear_query" ] },
        SEARCH_QUERY: { target: "searching", cond: ( ctx ) => ctx.query.length > 0 },
      },
      onExit: [ "exitedInitial" ],
    },
    searching: {
      on: {
        RESULTS: "done",
        ERROR: "error",
      },
    },
    done: { type: 'final' },
    error: { type: 'final' },
  },
};

const options = {
  actions: {
    update_query: ( ctx, event ) => {
      console.log( 'updateQuery - ctx: ' + JSON.stringify( ctx ) + ', event: ' + JSON.stringify( event ) )
      ctx.query = event.payload.query
    },
    clear_query: ( ctx ) => ctx.query = '',
    enteredInitial: () => console.log( "Entered initial" ),
    exitedInitial: () => console.log( "Exited initial" ),
  },
}

const context = {
  query: '',
};

export default create( spec, options, context );
