import React, { Component } from "react";
import requireAuth from "../../components/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import HistoryList from "../../components/history-list/history-list.component";

import ExitToApp from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  title: {
    padding: "15px"
  },
  menuButton: {
    marginRight: 36
  },
  signoutButton: {
    paddingRight: 10,
    color: "#FFFFFF"
  },
  hide: {
    display: "none"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const MediaHistory = props => {
  console.log(props);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Transform
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Button className={classes.signoutButton} href="dashboard">
              Home
            </Button>
            <Button className={classes.signoutButton} href="history">
              History
            </Button>
            <IconButton
              className={classes.signoutButton}
              href="signout"
              variant="contained"
            >
              <ExitToApp />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <HistoryList />
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return { user: state.auth.user };
}

export default compose(connect(mapStateToProps), requireAuth)(MediaHistory);
