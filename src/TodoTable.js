import React from "react";
import { useState } from "react";
import ReactTableDragColumnRow from "./Table";
import ProgressBar from './ProgressBar';
import bar from './images/bar1.png';
import bar2 from './images/bar2.png';
import apr10 from './images/apr10.png';
import apr11 from './images/apr11.png';
import apr13 from './images/apr13.png';
import Status from './status'
import {OWNERVAL, STATUSCOLOR, PRIORITYVAL, PRIORITYCOLOR, OWNERHEADING,THINGSTODOHEADING,PLUSHEADING, PRIORITYHEADING, DUEDATEHEADING, STATUSHEADING } from './AllConstant';


const itemVal = <span><img src={bar} alt="bar" className="height1  paddingLeft bg-white "/><span className="paddingLeft">New Item</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>
export default function ThingsToDo() { 
  let [data, setData] = useState({
    heads: [THINGSTODOHEADING, OWNERHEADING, STATUSHEADING, DUEDATEHEADING, PRIORITYHEADING, PLUSHEADING],
    rows: [
      [itemVal, <div className="ownersStyle firstOwner"><i className="fa fa-user-circle fa-2x lineHeightOwner"></i></div>, <div className="statusContainer"><Status value={STATUSCOLOR[0]}/></div>, <div className="due"><i className="fa fa-circle lineHeightDue paddingLeft2  colorWork" aria-hidden="true"></i><span className="ownersStyle">Apr 9</span></div>, 
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[0]}}>{PRIORITYVAL["#333333"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [itemVal, OWNERVAL, <div className="statusContainer"><Status value={STATUSCOLOR[1]}/></div>, <span className="lineHeightImages"><img src={apr10} alt="apr10" className="widthImages colorWork   paddingLeft2 "/><span className="paddingApr">Apr 10</span></span>, 
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[1]}}>{PRIORITYVAL["#E2445B"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [itemVal, OWNERVAL, <div className="statusContainer"><Status value={STATUSCOLOR[2]}/></div>, <span className="lineHeightImages"><img src={apr11} alt="apr11" className="widthImages colorWork   paddingLeft2 "/><span className="paddingApr">Apr 11</span></span>, 
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[2]}}>{PRIORITYVAL["#794BD1"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [itemVal, OWNERVAL, <div className="statusContainer"><Status value={STATUSCOLOR[3]}/></div>, <div className="due"><i className="fa fa-check-circle colorDone lineHeightDue paddingLeft2 " aria-hidden="true"></i><span className="ownersStyle"><del>Apr 12</del></span></div>, 
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[3]}}>{PRIORITYVAL["#579CFC"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [<span><img src={bar} alt="bar" className="height1  paddingLeft bg-white "/><span className="paddingLeft">mnhjbnkl</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, OWNERVAL, <div className="statusContainer"><Status value={STATUSCOLOR[1]}/></div>, <span className="lineHeightImages"><img src={apr13} alt="apr13" className="widthImages colorWork   paddingLeft2 "/><span className="paddingApr">Apr 13</span></span>, 
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[4]}}>{PRIORITYVAL["#C4C4C4"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [<span><img src={bar} alt="bar" className="height1  paddingLeft bg-white "/><span className="paddingLeft">Task2</span><span className="float-right"><i className="far fa-comment	chatMessage"></i></span></span>, OWNERVAL, <div className="statusContainer"><Status value={STATUSCOLOR[3]}/></div>, <span><i className="fa fa-check-circle colorDone lineHeightDue paddingLeft2 " aria-hidden="true"></i><span className="ownersStyle"><del>Apr 14</del></span></span>,
      <div className="ownersStyle priorityClass height1  text-center text-white" style={{background:PRIORITYCOLOR[4]}}>{PRIORITYVAL["#C4C4C4"]}</div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [<div className="bg-white height2"><img src={bar} alt="bar" className="height1  paddingLeft bg-white  addBarOpacity"/><span className="paddingLeft btn">+Add</span></div>, <div className="bg-white lastRowStyle height2 "></div>, <div></div>, <div className="bg-white height2 lastRowStatus  "></div>, <div></div>, <img src={bar2} alt="bar2" className="float-right bar2Style height1 "/>],
      [<div className="widthLast height2 border-0  bg-white"></div>, <div className="bg-white lastRowStyle height2 "></div>, <ProgressBar first='50%' second='25%' third='50%' fourth='25%' bg1='#FDAB3D' bg2='#E2445B' bg3='#579BFC' bg4='#00C875'/>, <div className="bg-white height2 lastRowStatus  "></div>, <ProgressBar first='25%' second='25%' third='25%' fourth='25%' bg1={PRIORITYCOLOR[0]} bg2={PRIORITYCOLOR[1]} bg3={PRIORITYCOLOR[2]} bg4={PRIORITYCOLOR[3]}/> ]    ]
    });
      
  return (
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
  );
}