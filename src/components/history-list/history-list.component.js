import React, { Component } from "react";
import HistoryEntry from "../history-entry/history-entry.component";
import { compose } from 'redux';
import { connect } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import * as actions from '../../actions';

import "./history-list.style.scss";

class HistoryList extends Component {

  componentDidMount() {
    this.props.gethistory();
  }

  render() {
    console.log(this.props.history)
    return (
      <div className="history-list">
        <Typography style={{ marginLeft: "16%" }} variant="h4">
          History
        </Typography>
        <HistoryEntry />
        <HistoryEntry />
        <HistoryEntry />
        <HistoryEntry />
      </div>
    )
  }

};


function mapStateToProps(state) {
  return { 
    errorMessage: state.history.errorMessage,
    history: state.history.history
  };
}

export default compose(
  connect(mapStateToProps, actions)
)(HistoryList);