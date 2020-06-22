import React from "react";
import { useState } from "react";
import ReactTableDragColumnRow from "./Table";
import ProgressBar from './ProgressBar';
import bar3 from './images/greenBar.png';
import bar2 from './images/bar2.png';
import Status from './status'
import {STATUSCOLOR, PRIORITYCOLOR, DONEHEADING, OWNERHEADING,PLUSHEADING, PRIORITYHEADING, DUEDATEHEADING, STATUSHEADING} from './AllConstant';

export default function DoneTable() { 
    let [doneData, setdoneData] = useState({
      heads: [DONEHEADING, OWNERHEADING, STATUSHEADING, DUEDATEHEADING, PRIORITYHEADING, PLUSHEADING],
      rows: [
        [<span><img src={bar3} alt="bar" className="height1 "/><span className="paddingLeft">Task1</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>,<div className="ownersStyle"><i className="fa fa-user-circle fa-2x lineHeightOwner"></i></div>,<div><Status value={STATUSCOLOR[0]}/></div>,<span><i className="fa fa-exclamation-circle lineHeightDue paddingLeft2  text-danger" aria-hidden="true"></i><span className="ownersStyle">Mar 6</span></span>,<div className="ownersStyle priorityClass height1  text-white" style={{background:PRIORITYCOLOR[4]}}></div>,<img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
        [<div className="bg-white"><img src={bar3} alt="bar" className="height2  addBarOpacity"/><span className="paddingLeft btn">+Add</span></div>, <div className="bg-white lastRowStyle height2 "></div>, <div></div>, <div className="bg-white lastRowStatus height2 "></div>, <div></div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
        [<div className="widthLast height2  bg-white"></div>, <div className="bg-white lastRowStyle height2 "></div>, <ProgressBar first='100%' second='0%' third='0%' fourth='0%' bg1='#FDAB3D' bg2='' bg3='' bg4=''/>, <div className="bg-white lastRowStatus height2 "></div>, <ProgressBar first='100%' second='0%' third='0%' fourth='0%' bg1={PRIORITYCOLOR[4]} bg2='' bg3='' bg4=''/> ]    ]
      });
      
  return (
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
  );
}