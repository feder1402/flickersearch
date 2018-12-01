import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
//import StateMachine from './StateMachine';

const Header = () => {
// const state = useContext( StateMachine );

  const state = "initial";

  return (
      <AppBar position="static">
        <Toolbar>
          <Menu/>
          <Title state={state} />
        </Toolbar>
      </AppBar>
  )
};

function Menu() {
  return (
      <IconButton color="inherit">
        <MenuIcon/>
      </IconButton>

  )
}

function Title({state}) {
  return (
      <Typography variant="h6" color="inherit">
        Flickr Search - {state}
      </Typography>
  )
}

export default Header;
