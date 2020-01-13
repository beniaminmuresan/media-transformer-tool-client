import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

import UploadModal from "../upload-modal/UploadModal";

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
    width: "60%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "15%",
    marginBottom: "80px",
    marginTop: "20px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.centeredContent}>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardContent>
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className={classes.welcomeImage}
              alt="welcome"
            />
            <Typography variant="h6">
              Transform is the tool that you need for making your life easier.
              You are stuck in traffic, or maybe you are busy doing other things
              and you can't read all the messages that you have. Transform does
              the job for you.
            </Typography>
          </CardContent>
          <CardActions>
            <UploadModal />
          </CardActions>
        </Grid>
      </div>
    </Card>
  );
}
