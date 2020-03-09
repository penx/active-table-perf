import React, { useMemo, useContext } from "react";

import "./styles.css";

import * as HoverTable from "./ActiveTable";
import { Point } from "./styles";

const MyPoint = () => {
  const { isActive } = useContext(HoverTable.CellContext);

  return useMemo(() => <Point isActive={isActive} />, [isActive]);
};

const MyCell = ({ columnId }) => (
  <HoverTable.Cell columnId={columnId}>
    <MyPoint />
  </HoverTable.Cell>
);

export default function App() {
  return (
    <div className="App">
      Hover over a cell
      <HoverTable.default>
        <tr>
          <td colSpan="5">
            <HoverTable.TableContext.Consumer>
              {({ setActiveColumn, setActiveRow }) => (
                <>
                  <button onClick={() => setActiveColumn("column-one")}>
                    column 1
                  </button>
                  <button onClick={() => setActiveColumn("column-two")}>
                    column 2
                  </button>
                  <button onClick={() => setActiveRow("row-one")}>row 1</button>
                  <button onClick={() => setActiveRow("row-two")}>row 2</button>
                </>
              )}
            </HoverTable.TableContext.Consumer>
          </td>
        </tr>
        <HoverTable.Row id="row-one">
          <MyCell columnId="column-one" />
          <MyCell columnId="column-two" />
          <MyCell columnId="column-three" />
          <MyCell columnId="column-four" />
          <MyCell columnId="column-five" />
        </HoverTable.Row>
        <HoverTable.Row id="row-two">
          <MyCell columnId="column-one" />
          <MyCell columnId="column-two" />
          <MyCell columnId="column-three" />
          <MyCell columnId="column-four" />
          <MyCell columnId="column-five" />
        </HoverTable.Row>
        <HoverTable.Row id="row-three">
          <MyCell columnId="column-one" />
          <MyCell columnId="column-two" />
          <MyCell columnId="column-three" />
          <MyCell columnId="column-four" />
          <MyCell columnId="column-five" />
        </HoverTable.Row>
        <HoverTable.Row id="row-four">
          <MyCell columnId="column-one" />
          <MyCell columnId="column-two" />
          <MyCell columnId="column-three" />
          <MyCell columnId="column-four" />
          <MyCell columnId="column-five" />
        </HoverTable.Row>
      </HoverTable.default>
    </div>
  );
}
