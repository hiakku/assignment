import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import ReactTableDragColumnRow from "./Table";
import bar from './images/bar1.png';
import apr10 from './images/apr10.png';
import apr11 from './images/apr11.png';
import apr13 from './images/apr13.png';
import "./styles.scss";
import Status from './status'

const ownerVal = <span className="ownersStyle"><i className="fa fa-user-circle fa-2x lineHeightOwner"></i></span>;
const StatusColor = ["#FDAB3D", "#E2445B", "#579BFC","#00C875" ];
const priorityVal = {"#333333":"Urgent", "#E2445B":"High", "#794BD1":"Medium", "#579CFC":"Low", "#C4C4C4":""}
const priorityColor = Object.keys(priorityVal);

function App() { 
  let [data, setData] = useState({
    heads: [<h5 className="fontColor toDoWidth"><i className=" fa fa-caret-down mr-2 rounded-circle border arrowIcon"></i>Things to do</h5>,  
    <h5 className="ownerWidth lineHeight">Owner</h5>, 
    <h5 className="statusWidth borderRadiusHeader radiusStatus">Status</h5>,
     <h5 className="statusWidth borderRadiusHeader radiusDue">Due date</h5>,
      <h5 className="statusWidth lineHeight ">Priority</h5>, 
      <h5 className="text-center plusFont" contentEditable="false" suppressContentEditableWarning={true}><i className="fa fa-plus-circle"></i></h5>],
    rows: [
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[0]}/></div>, <span><i className="fa fa-circle lineHeightDue colorWork" aria-hidden="true"></i><span className="ownersStyle">Apr 9</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[0]}}>{priorityVal["#333333"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[1]}/></div>, <span className="lineHeightImages"><img src={apr10} alt="apr10" className="widthImages"/><span className="paddingApr">Apr 10</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[1]}}>{priorityVal["#E2445B"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[2]}/></div>, <span className="lineHeightImages"><img src={apr11} alt="apr11" className="widthImages"/><span className="paddingApr">Apr 11</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[2]}}>{priorityVal["#794BD1"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[3]}/></div>, <span><i className="fa fa-check-circle colorDone lineHeightDue" aria-hidden="true"></i><span className="ownersStyle">Apr 12</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[3]}}>{priorityVal["#579CFC"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">mnhjbnkl</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[1]}/></div>, <span className="lineHeightImages"><img src={apr13} alt="apr13" className="widthImages"/><span className="paddingApr">Apr 13</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[4]}}>{priorityVal["#C4C4C4"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">Task2</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[3]}/></div>, <span><i className="fa fa-check-circle colorDone lineHeightDue" aria-hidden="true"></i><span className="ownersStyle">Apr 14</span></span>,
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[4]}}>{priorityVal["#C4C4C4"]}</div>, ''],
      [<span><img src={bar} alt="bar" className="barImg addBarOpacity"/><span className="paddingLeft btn" onClick={AddRows()}>+Add</span></span>, '', '', '', '', '']
    ]
  });
  return (
    <div>
<h1 className="text-center mb-4">Website Design</h1>
      <ReactTableDragColumnRow
        heads={data.heads}
        rows={data.rows}
        onDragEnd={(type, from, to, newData) => {
          setData(newData);
        }}
      />
    </div>
  );
  function AddRows() {
    let val = data.rows;
    let valueEntered = [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[0]}/></div>, <span><i className="fa fa-circle lineHeightDue colorWork" aria-hidden="true"></i><span className="ownersStyle">Apr 9</span></span>, 
    <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[0]}}>{priorityVal["#333333"]}</div>, ''];
    val = val.splice(0, data.rows.length-1,valueEntered);
    data.rows = val.concat(data.rows)
    console.log(data.rows);
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
