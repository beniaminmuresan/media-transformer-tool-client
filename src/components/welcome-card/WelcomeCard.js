import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

import TextToSpeechModal from "../text-to-speech-modal/TextToSpeechModal";

const useStyles = makeStyles({
  card: {
    width: "70%",
    height: 700,
    marginLeft: "auto",
    marginRight: "auto"
  },
  centeredContent: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  welcomeImage: {
    width: "30%"

    // marginRight: "auto"
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.centeredContent}>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardContent>
            <Typography variant="h3">Welcome, Darius Otelea!</Typography>
            <img
              src="https://images.unsplash.com/photo-1522051311534-1f53d56b49df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2988&q=80"
              className={classes.welcomeImage}
              alt="welcome"
            />
          </CardContent>
          <CardActions>
            <TextToSpeechModal />
          </CardActions>
        </Grid>
      </div>
    </Card>
  );
}
