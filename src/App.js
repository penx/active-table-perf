import React from "react";

import "./styles.css";

import * as HoverTable from "./HoverTable";
import {
  StyledTable,
  StyledTableBody,
  StyledCell,
  StyledRow,
  Point
} from "./styles";

const MyCell = ({ isActive, isActiveColumn, isActiveRow, ...props }) => (
  <StyledCell
    isActiveCell={isActive}
    isActiveColumn={isActiveColumn}
    isActiveRow={isActiveRow}
    {...props}
  >
    <Point isActive={isActive} />
  </StyledCell>
);

const Cell = ({ columnId, children }) => (
  <HoverTable.Cell columnId={columnId}>{MyCell}</HoverTable.Cell>
);

const RowOuter = props => <StyledRow {...props} />;

const Row = props => <HoverTable.Row {...props} render={RowOuter} />;

const Table = props => (
  <StyledTable>
    <StyledTableBody {...props} />
  </StyledTable>
);

export default function App() {
  return (
    <div className="App">
      Hover over a cell
      <HoverTable.default render={Table}>
        <Row id="row-one">
          <Cell columnId="column-one" />
          <Cell columnId="column-two" />
          <Cell columnId="column-three" />
          <Cell columnId="column-four" />
          <Cell columnId="column-five" />
        </Row>
        <Row id="row-two">
          <Cell columnId="column-one" />
          <Cell columnId="column-two" />
          <Cell columnId="column-three" />
          <Cell columnId="column-four" />
          <Cell columnId="column-five" />
        </Row>
        <Row id="row-three">
          <Cell columnId="column-one" />
          <Cell columnId="column-two" />
          <Cell columnId="column-three" />
          <Cell columnId="column-four" />
          <Cell columnId="column-five" />
        </Row>
        <Row id="row-four">
          <Cell columnId="column-one" />
          <Cell columnId="column-two" />
          <Cell columnId="column-three" />
          <Cell columnId="column-four" />
          <Cell columnId="column-five" />
        </Row>
      </HoverTable.default>
    </div>
  );
}
