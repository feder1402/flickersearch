import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

import { create } from '../StateMachine';
import Spec from './search.machine.spec'

export default () => {
  const [ query, setQuery ] = useState( '' );
  let _machine;

  useEffect(() => {
    const machine = create(Spec);
    _machine = machine;
    const unsubscribe = machine.subscribe((event) => console.log('Event: ' + event))
    machine.start();
    // Cleanup
    return function cleanup() {
      unsubscribe();
    };
  });

  return (
      <div>
        <form>
          <SearchInput onChange={( e ) => setQuery( e.target.value )} value={query}/>
          <ClearButton onClick={() => setQuery( '' )}/>
          <SearchButton onClick={() => _machine.sendEvent( {type: 'SEARCH', query} )}/>
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
