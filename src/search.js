import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

export default class Search extends Component {
  state = {
    searchKey: ""
  };

  changeText = e => this.setState({ searchKey: e.target.value });
  clearText = () => this.setState({ searchKey: "" });

  search = e => console.log("Searching... " + this.state.searchKey);

  render() {
    return (
      <div>
        <form>
          <TextField
            id="standard-bare"
            onChange={this.changeText}
            placeholder="Enter search key"
            value={this.state.searchKey}
          />
          <Tooltip title="Clear search key">
            <IconButton color="secondary" onClick={this.clearText}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Start search">
            <IconButton color="primary" onClick={this.search}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </form>
      </div>
    );
  }
}
