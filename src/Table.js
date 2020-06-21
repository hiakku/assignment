import { useState, useRef } from "react";
import React from "react";

const DRAG_DIRECTION_NONE = "";
const DRAG_DIRECTION_ROW = "row";
const DRAG_DIRECTION_COLUMN = "column";

const defaultDrageState = {
  column: -1,
  row: -1,
  startPoint: null,
  direction: DRAG_DIRECTION_NONE, 
  dropIndex: -1
};

export default props => {
  let { heads = [], rows = [], id, onDragEnd } = props;
  let [dragState, setDragState] = useState({ ...defaultDrageState });
  const headsEl = useRef(null),
    rowsEl = useRef(null);

  if (dragState.direction === DRAG_DIRECTION_COLUMN) {
    heads = offsetIndex(dragState.column, dragState.dropIndex, heads);
    rows = rows.map(x => offsetIndex(dragState.column, dragState.dropIndex, x));
  }

  if (dragState.direction === DRAG_DIRECTION_ROW) {
    rows = offsetIndex(dragState.row, dragState.dropIndex, rows);
  }

  return (
    <div className="mt-5">
      <table className="table" id={id}>
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
                      dragState.direction === DRAG_DIRECTION_COLUMN
                        ? dragState.dropIndex === j
                          ? 'lightgreen'
                          : '#F5F6F8'
                        : dragState.direction === DRAG_DIRECTION_ROW
                        ? dragState.dropIndex === i
                          ? 'lightgreen'
                          : '#F5F6F8'
                        : '#F5F6F8'
                  }} 
                  draggable="true"
                  onDragStart={e => {
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
                          direction: DRAG_DIRECTION_COLUMN,
                          dropIndex: j
                        });
                        return;
                      }
                      if (dragState.row !== i) {
                        setDragState({
                          ...dragState,
                          direction: DRAG_DIRECTION_ROW,
                          dropIndex: i
                        });
                        return;
                      }
                      return;
                    }

                    if (dragState.direction === DRAG_DIRECTION_COLUMN) {
                      if (j !== dragState.dropIndex) {
                        setDragState({
                          ...dragState,
                          dropIndex: j
                        });
                      }
                      return;
                    }
                    if (dragState.direction === DRAG_DIRECTION_ROW) {
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
                      dragState.direction === DRAG_DIRECTION_COLUMN
                        ? dragState.column
                        : dragState.row,
                      dragState.dropIndex,
                      { heads, rows }
                    );
                    setDragState({ ...defaultDrageState });
                  }}
                  
                >
                  {y}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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