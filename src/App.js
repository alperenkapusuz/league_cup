import React, { useState } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Leagues from "./components/api/leagues.json"

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "50px auto",
    width: "50%"
  },
}));

const App = () => {

  const [league, setLeague] = useState("LIGA PROFESIONAL DE FÚTBOL (ARGENTINA)");

  const classes = useStyles();
  return (
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid>
          <FormControl className={classes.formControl}>
            <Select
              value={league}
              onChange={event => setLeague(event.target.value)}
            >
              {
                Leagues.map(league => (
                  <MenuItem value={league.Slug}>{league.league}</MenuItem>
                ))
              }
            </Select>
          </FormControl> 
          <Grid item xs={12}>
            <Paper>
              sa
            </Paper>  
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App

