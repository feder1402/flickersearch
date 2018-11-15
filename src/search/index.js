import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

import Machine from './search.machine.spec'

export default () => {
  useEffect( () => {
    const unsubscribe = Machine.subscribe( ( event ) => console.log( 'Event: ' + event ) )
    Machine.start();
    // Cleanup
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const { query } = Machine.getContext();

  return (
      <div>
        <form>
          <SearchInput
              onChange={( e ) => Machine.dispatch( { type: 'UPDATE_QUERY', payload: { query: e.target.value } } )}
              value={query}/>
          <ClearButton onClick={() => Machine.dispatch( { type: 'CLEAR_QUERY' } )}/>
          <SearchButton onClick={() => Machine.dispatch( { type: 'SEARCH_QUERY' } )}/>
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
