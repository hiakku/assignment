import React from 'react'
import styled from 'styled-components'


export const WEBSITEHEADING = styled.h1` text-align: center; margin: 10px`;
export const OUTERMOSTCONTAINER = styled.div` width: 100%; height: auto; padding: 30px`;
export const DRAGDIRECTIONNONE = "";
export const DRAGDIRECTIONROW = "row";
export const DRAGDIRECTIONCOLUMN = "column";
export const DEFAULTDRAGSTATE = {column: -1,row: -1,startPoint: null,direction: DRAGDIRECTIONNONE, dropIndex: -1};
export const OWNERVAL = <span className="ownersStyle"><i className="fa fa-user-circle font-weight-normal ownerColor fa-2x lineHeightOwner"></i></span>;
export const STATUSCOLOR = ["#FDAB3D", "#E2445B", "#579BFC","#00C875" ];
export const PRIORITYVAL = {"#333333":"Urgent", "#E2445B":"High", "#794BD1":"Medium", "#579CFC":"Low", "#C4C4C4":""}
export const PRIORITYCOLOR = Object.keys(PRIORITYVAL);
export const DONEHEADING = <h5 className="doneColor toDoWidth font-weight-light"><i className=" fa fa-caret-down mr-2 rounded-circle border doneArrow arrowIcon text-white text-center "></i>Done</h5>;
export const OWNERHEADING = <h5 className="ownerWidth  fontWeight text-center lineHeight">Owner</h5>
export const THINGSTODOHEADING = <h5 className="fontColor toDoWidth font-weight-light"><i className=" fa fa-caret-down mr-2 rounded-circle border arrowThingsColor arrowIcon text-white text-center"></i>Things to do</h5>
export const STATUSHEADING = <h5 className="statusWidth fontWeight  lastRowStatus text-center borderRadiusHeader p-0 m-0 border-0 radiusStatus">Status</h5>;
export const DUEDATEHEADING = <h5 className="statusWidth fontWeight  lastRowStatus text-center borderRadiusHeader p-0 m-0 border-0 radiusDue">Due date</h5>;
export const PRIORITYHEADING = <h5 className="statusWidth fontWeight  lastRowStatus text-center lineHeight ">Priority</h5>;
export const PLUSHEADING = <h5 className="text-center plusFont lineHeight" contentEditable="false" suppressContentEditableWarning={true}><i className="fa fa-plus-circle"></i></h5>;