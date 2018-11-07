import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Open drawer">
        <MenuIcon />
      </IconButton>
      Flickr Search
    </Toolbar>
  </AppBar>
);

export default Header;
