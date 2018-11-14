import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core";
import Header from "./header";
import Search from "./search";
import Results from "./results";
import Theme from './theme'

const App = ( { classes } ) => {

  return (
      <div className={classes.root}>
          <Header/>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Search/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Results/>
              </Paper>
            </Grid>
          </Grid>
      </div>
  )
}

export default withStyles( Theme )( App );
