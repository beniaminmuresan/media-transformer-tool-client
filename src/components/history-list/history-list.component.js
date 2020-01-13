import React from "react";
import HistoryEntry from "../history-entry/history-entry.component";

import "./history-list.style.scss";

const HistoryList = () => (
  <div className="history-list">
    <HistoryEntry />
    <HistoryEntry />
    <HistoryEntry />
    <HistoryEntry />
  </div>
);

export default HistoryList;
