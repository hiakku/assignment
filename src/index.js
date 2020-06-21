import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import ReactTableDragColumnRow from "./Table";
import bar from './images/bar1.png';
import bar3 from './images/greenBar.png';
import bar2 from './images/bar2.png';
import apr10 from './images/apr10.png';
import apr11 from './images/apr11.png';
import apr13 from './images/apr13.png';
import "./styles.scss";
import Status from './status'

const ownerVal = <span className="ownersStyle"><i className="fa fa-user-circle font-weight-normal ownerColor fa-2x lineHeightOwner"></i></span>;
const StatusColor = ["#FDAB3D", "#E2445B", "#579BFC","#00C875" ];
const priorityVal = {"#333333":"Urgent", "#E2445B":"High", "#794BD1":"Medium", "#579CFC":"Low", "#C4C4C4":""}
const priorityColor = Object.keys(priorityVal);

//Function for the progress bar at the end of the tables
function progressBar(first,second,third,fourth,bg1,bg2,bg3,bg4) {
    const progressBar = <div className="progress progressBar">
                          <div className="progress-bar" role="progressbar" style={{width: first, background: bg1}}></div>
                          <div className="progress-bar" role="progressbar" style={{width: second, background: bg2}}></div>
                          <div className="progress-bar" role="progressbar" style={{width: third, background: bg3}}></div>
                          <div className="progress-bar" role="progressbar" style={{width: fourth, background: bg4}}></div>
                        </div>
    return progressBar
}

function App() { 
  let [data, setData] = useState({
    heads: [<h5 className="fontColor toDoWidth"><i className=" fa fa-caret-down mr-2 rounded-circle border arrowThingsColor arrowIcon"></i>Things to do</h5>,  
    <h5 className="ownerWidth lineHeight">Owner</h5>, 
    <h5 className="statusWidth borderRadiusHeader radiusStatus">Status</h5>,
     <h5 className="statusWidth borderRadiusHeader radiusDue">Due date</h5>,
      <h5 className="statusWidth lineHeight ">Priority</h5>, 
      <h5 className="text-center plusFont" contentEditable="false" suppressContentEditableWarning={true}><i className="fa fa-plus-circle"></i></h5>],
    rows: [
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, 
      <div className="ownersStyle firstOwner"><i className="fa fa-user-circle fa-2x lineHeightOwner"></i></div>, <div><Status value={StatusColor[0]}/></div>, <span><i className="fa fa-circle lineHeightDue colorWork" aria-hidden="true"></i><span className="ownersStyle">Apr 9</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[0]}}>{priorityVal["#333333"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[1]}/></div>, <span className="lineHeightImages"><img src={apr10} alt="apr10" className="widthImages"/><span className="paddingApr">Apr 10</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[1]}}>{priorityVal["#E2445B"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[2]}/></div>, <span className="lineHeightImages"><img src={apr11} alt="apr11" className="widthImages"/><span className="paddingApr">Apr 11</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[2]}}>{priorityVal["#794BD1"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[3]}/></div>, <span><i className="fa fa-check-circle colorDone lineHeightDue" aria-hidden="true"></i><span className="ownersStyle"><del>Apr 12</del></span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[3]}}>{priorityVal["#579CFC"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">mnhjbnkl</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[1]}/></div>, <span className="lineHeightImages"><img src={apr13} alt="apr13" className="widthImages"/><span className="paddingApr">Apr 13</span></span>, 
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[4]}}>{priorityVal["#C4C4C4"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">Task2</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[3]}/></div>, <span><i className="fa fa-check-circle colorDone lineHeightDue" aria-hidden="true"></i><span className="ownersStyle"><del>Apr 14</del></span></span>,
      <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[4]}}>{priorityVal["#C4C4C4"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<div className="bg-white"><img src={bar} alt="bar" className="barImg addBarOpacity"/><span className="paddingLeft btn">+Add</span></div>, <div className="bg-white lastRowStyle"></div>, <div></div>, <div className="bg-white lastRowStatus"></div>, <div></div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
      [<div className="widthLast bg-white"></div>, <div className="bg-white lastRowStyle"></div>, progressBar('50%','25%','50%','25%', '#FDAB3D','#E2445B','#579BFC','#00C875'), <div className="bg-white lastRowStatus"></div>, progressBar('25%','25%','25%','25%', priorityColor[0],priorityColor[1],priorityColor[2],priorityColor[3]) ]    ]
    });

    let [doneData, setdoneData] = useState({
      heads: [<h5 className="doneColor toDoWidth"><i className=" fa fa-caret-down mr-2 rounded-circle border doneArrow arrowIcon"></i>Done</h5>,  
      <h5 className="ownerWidth lineHeight">Owner</h5>, 
      <h5 className="statusWidth borderRadiusHeader radiusStatus">Status</h5>,
       <h5 className="statusWidth borderRadiusHeader radiusDue">Due date</h5>,
        <h5 className="statusWidth lineHeight ">Priority</h5>, 
        <h5 className="text-center plusFont" contentEditable="false" suppressContentEditableWarning={true}><i className="fa fa-plus-circle"></i></h5>],
      rows: [
        [<span><img src={bar3} alt="bar" className="barImg"/><span className="paddingLeft">Task1</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, 
        <div className="ownersStyle"><i className="fa fa-user-circle fa-2x lineHeightOwner"></i></div>, <div><Status value={StatusColor[0]}/></div>, <span><i className="fa fa-exclamation-circle lineHeightDue text-danger" aria-hidden="true"></i><span className="ownersStyle">Mar 6</span></span>, 
        <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[4]}}></div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
         [<div className="bg-white"><img src={bar3} alt="bar" className="barImg addBarOpacity"/><span className="paddingLeft btn">+Add</span></div>, <div className="bg-white lastRowStyle"></div>, <div></div>, <div className="bg-white lastRowStatus"></div>, <div></div>, <img src={bar2} alt="bar2" className="float-right bar2Style"/>],
        [<div className="widthLast bg-white"></div>, <div className="bg-white lastRowStyle"></div>, progressBar('100%','0%','0%','0%', '#FDAB3D','','',''), <div className="bg-white lastRowStatus"></div>, progressBar('100%','0%','0%','0%', priorityColor[4],'','','') ]    ]
      });
      
  return (
    <div className=" container m-3">
      <h1 className="text-center m-4">Website Design</h1>
      <ReactTableDragColumnRow
        heads={data.heads}
        rows={data.rows}
    
          onDragEnd={(type, from, to, newData) => {
            console.log({
              type,
              from,
              to,
              newData
            });
            setData(newData);
        }}
      />
        <ReactTableDragColumnRow
        heads={doneData.heads}
        rows={doneData.rows}
        onDragEnd={(type, from, to, newDonedata) => {
          console.log({
            type,
            from,
            to,
            newDonedata
          });
          setdoneData(newDonedata);
        }}
      />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



  //   // function AddRows() {
  //   let val = data.rows;
  //   let valueEntered = [<span><img src={bar} alt="bar" className="barImg"/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, ownerVal, <div><Status value={StatusColor[0]}/></div>, <span><i className="fa fa-circle lineHeightDue colorWork" aria-hidden="true"></i><span className="ownersStyle">Apr 9</span></span>, 
  //   <div className="ownersStyle priorityClass text-white" style={{background:priorityColor[0]}}>{priorityVal["#333333"]}</div>, ''];
  //   val = val.splice(0, data.rows.length-2,valueEntered);
  //   data.rows = val.concat(data.rows)
  //   console.log(data.rows);
  // // }