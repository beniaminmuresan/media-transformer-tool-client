import React from "react";
import HistoryEntry from "../history-entry/history-entry.component";
import Typography from "@material-ui/core/Typography";

import "./history-list.style.scss";

const HistoryList = () => (
  <div className="history-list">
    <Typography style={{ marginLeft: "16%" }} variant="h4">
      History
    </Typography>
    <HistoryEntry />
    <HistoryEntry />
    <HistoryEntry />
    <HistoryEntry />
  </div>
);

export default HistoryList;
