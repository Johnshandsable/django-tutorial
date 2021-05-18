import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default class CreateRoom extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };
    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  }

  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value,
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === 'true' ? true : false,
    });
  }

  handleRoomButtonPressed() {
    console.log(this.state);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({
          votesToSkip: this.state.votesToSkip,
          guestCanPause: this.state.guestCanPause,
        }),
      },
    };
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              required={true}
              type="number"
              defaultValue={this.defaultVotes}
              inputProps={{
                min: 1,
                style: {
                  textAlign: 'center',
                },
              }}
              onChange={this.handleVotesChange}
            />
            <FormHelperText>
              <div align="center">Votes Required to Skip</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} onClick={this.handleRoomButtonPressed}>
          <Button color="secondary" variant="contained">
            Create a Room
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" to="/" component={Link}>
            Go Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}
