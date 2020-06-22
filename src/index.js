import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import DoneTable from './DoneTable';
import ThingsToDo from './TodoTable'
import {WEBSITEHEADING, OUTERMOSTCONTAINER } from './AllConstant';

function App() {       
  return (
    <OUTERMOSTCONTAINER>
      <WEBSITEHEADING>Website Design</WEBSITEHEADING>
      <ThingsToDo/>
      <DoneTable/>
    </OUTERMOSTCONTAINER>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));