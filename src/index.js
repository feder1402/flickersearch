import React from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import Header from "./header";
import Search from "./search";
import Results from "./results";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Paper>
        <Search />
        <Results />
      </Paper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
