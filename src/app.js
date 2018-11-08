import React from "react";
import Paper from "@material-ui/core/Paper";
import Header from "./header";
import Search from "./search";
import Results from "./results";

import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <br />
    <Paper>
      <Search />
      <Results />
    </Paper>
  </div>
);

export default App;
