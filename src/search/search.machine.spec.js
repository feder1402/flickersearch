import { create } from '../StateMachine';

const spec = {
  id: 'SearchBox',
  initial: "initial",
  context: {
    query: ''
  },
    states: {
    initial: {
      onEntry: [ "clear_query" ],
      on: {
        UPDATE_QUERY: { actions: [ "update_query" ] },
        CLEAR_QUERY: { actions: [ "clear_query" ] },
        SEARCH_QUERY: { target: "searching", cond: ( ctx ) => ctx.query.length > 0 },
      },
      onExit: [ "clear_query" ],
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
    update_query: ( ctx, event ) => ctx.query = event.payload.query,
    clear_query: ctx => ctx.query = ''
  },
}

export default create( spec, options );
