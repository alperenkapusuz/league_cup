import React, { useState, useEffect } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchLeagues } from './components/apiFunction/ApiFunction';
import BarChart from './components/BarChart';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "50px auto",
    width: "50%"
  },
}));

const App = () => {
  const [leagues, setLeagues] = useState([])
  const [league, setLeague] = useState("LIGA PROFESIONAL DE FÚTBOL (ARGENTINA)");

  useEffect(() => {
    const fetchLeaguesData = async () => {
      const leagues = await fetchLeagues();
      setLeagues(leagues);
    };
    fetchLeaguesData();
  }, []);
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
                leagues.map(league => (
                  <MenuItem value={league.Slug}>{league.league}</MenuItem>
                ))
              }
            </Select>
          </FormControl> 
          <Grid item xs={12}>
            <Paper>
              <BarChart league={league}/>
            </Paper>  
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App

