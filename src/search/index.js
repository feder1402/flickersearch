import React, { useReducer } from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

import Machine from './search.machine.spec'


const useMachineReducer = (machine) => {

  machine.start();
  machine.subscribe( ( event ) => console.log( 'State: ' + event ) )

  const reducer = ( context, event ) => {
    machine.dispatch( event );
    return machine.getContext();
  }

  const [context, dispatch] = useReducer(reducer, machine.getContext());

  return [context, dispatch]

}

export default () => {

  const [{ query }, dispatch] = useMachineReducer(Machine);

  return (
      <div>
        <form>
          <SearchInput
              onChange={( e ) => dispatch( { type: 'UPDATE_QUERY', payload: { query: e.target.value } } )}
              value={query}/>
          <ClearButton onClick={() => dispatch( { type: 'CLEAR_QUERY' } )}/>
          <SearchButton onClick={() => dispatch( { type: 'SEARCH_QUERY' } )}/>
        </form>
      </div>
  );
}

function SearchInput( props ) {
  return <TextField
      id="standard-bare"
      placeholder="Enter search key"
      {...props}
  />
}

function ClearButton( props ) {
  return (
      <IconButton color="secondary" {...props}>
        <ClearIcon/>
      </IconButton>
  )
}

function SearchButton( props ) {
  return (
      <IconButton color="primary" {...props}>
        <SearchIcon/>
      </IconButton>
  )
}
