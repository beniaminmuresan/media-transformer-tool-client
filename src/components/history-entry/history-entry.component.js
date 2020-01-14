import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import CloudDownload from "@material-ui/icons/CloudDownload";
import { compose } from 'redux';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    width: "70%",
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#5353f9"
  }
});

class HistoryEntry extends Component {
  render() {
    const { classes } = this.props;
    const historyProps = this.props.historyProps;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
          }
          action={
            <a href={historyProps.download_link}>
              <IconButton aria-label="settings">
                <CloudDownload style={{ fontSize: 40 }} />
              </IconButton>
            </a>
          }
          title={historyProps.filename}
          subheader={historyProps.date}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {historyProps.text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default compose(
  withStyles(styles)
)(HistoryEntry);
