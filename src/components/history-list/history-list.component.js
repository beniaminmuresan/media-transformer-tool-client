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
    return (
      <div className="history-list">
        <Typography style={{ marginLeft: "16%" }} variant="h4">
          History
        </Typography>
        {this.props.historyList.map((history, index) => {     
          return <HistoryEntry key={index} historyProps={history}/> 
        })}
      </div>
    )
  }
};


function mapStateToProps(state) {
  return { 
    errorMessage: state.history.errorMessage,
    historyList: state.history.historyList
  };
}

export default compose(
  connect(mapStateToProps, actions)
)(HistoryList);