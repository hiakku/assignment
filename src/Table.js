import { useState, useRef } from "react";
import React from "react";
import {DRAGDIRECTIONROW, DRAGDIRECTIONCOLUMN, DEFAULTDRAGSTATE} from './AllConstant';

export default props => {
  let { heads = [], rows = [], onDragEnd } = props;
  let [dragState, setDragState] = useState({ ...DEFAULTDRAGSTATE });
  const headsEl = useRef(null),
    rowsEl = useRef(null),
    preview = useRef(null);


  if (dragState.direction === DRAGDIRECTIONCOLUMN) {
    heads = offsetIndex(dragState.column, dragState.dropIndex, heads);
    rows = rows.map(x => offsetIndex(dragState.column, dragState.dropIndex, x));
  }

  if (dragState.direction === DRAGDIRECTIONROW) {
    rows = offsetIndex(dragState.row, dragState.dropIndex, rows);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="whiteBorder" ref={headsEl}>
            {heads.map((x, i) => (
              <th className="p-0 border-0 align-middle" key={i} contentEditable="true" suppressContentEditableWarning={true}>{x}</th> 
            ))}
          </tr>
        </thead>
        <tbody ref={rowsEl}>
          {rows.map((x = [], i) => (
            <tr key={i}>
              {x.map((y, j) => (
                <td className="p-0 whiteBorder"
                  key={j}
                  style={{
                    cursor: dragState.direction ? "move" : "grab",
                    background:
                      dragState.direction === DRAGDIRECTIONCOLUMN
                        ? dragState.dropIndex === j
                          ? 'lightgreen'
                          : '#F5F6F8'
                        : dragState.direction === DRAGDIRECTIONROW
                        ? dragState.dropIndex === i
                          ? 'lightgreen'
                          : '#F5F6F8'
                        : '#F5F6F8'
                  }} 
                  draggable="true"
                  onDragStart={e => {
                    e.dataTransfer.setDragImage(preview.current, 0, 0);
                    setDragState({
                      ...dragState,
                      row: i,
                      column: j,
                      startPoint: {
                        x: e.pageX,
                        y: e.pageY
                      }
                    });
                  }}
                  onDragEnter={e => {
                    if (!dragState.direction) {
                      if (dragState.column !== j) {
                        setDragState({
                          ...dragState,
                          direction: DRAGDIRECTIONCOLUMN,
                          dropIndex: j
                        });
                        return;
                      }
                      if (dragState.row !== i) {
                        setDragState({
                          ...dragState,
                          direction: DRAGDIRECTIONROW,
                          dropIndex: i
                        });
                        return;
                      }
                      return;
                    }

                    if (dragState.direction === DRAGDIRECTIONCOLUMN) {
                      if (j !== dragState.dropIndex) {
                        setDragState({
                          ...dragState,
                          dropIndex: j
                        });
                      }
                      return;
                    }
                    if (dragState.direction === DRAGDIRECTIONROW) {
                      if (i !== dragState.dropIndex) {
                        setDragState({
                          ...dragState,
                          dropIndex: i
                        });
                      }
                      return;
                    }
                  }}
                  onDragEnd={() => {
                    onDragEnd(
                      dragState.direction,
                      dragState.direction === DRAGDIRECTIONCOLUMN
                        ? dragState.column
                        : dragState.row,
                      dragState.dropIndex,
                      { heads, rows }
                    );
                    setDragState({ ...DEFAULTDRAGSTATE });
                  }}
                  
                >
                  {y}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        ref={preview}
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden"
        }}
      />
    </div>
  );
};

function offsetIndex(from, to, arr = []) {
  if (from < to) {
    let start = arr.slice(0, from),
      between = arr.slice(from + 1, to + 1),
      end = arr.slice(to + 1);
    return [...start, ...between, arr[from], ...end];
  }
  if (from > to) {
    let start = arr.slice(0, to),
      between = arr.slice(to, from),
      end = arr.slice(from + 1);
    return [...start, arr[from], ...between, ...end];
  }
  return arr;
}