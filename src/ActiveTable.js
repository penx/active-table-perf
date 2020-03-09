import React, { useContext, createContext, useState, useMemo } from "react";

export const TableContext = createContext({
  activeRow: null,
  activeColumn: null,
  setActiveRow: () => {},
  setActiveColumn: () => {}
});
export const RowContext = createContext(null);
export const CellContext = createContext({
  isActiveColumn: false,
  isActiveRow: false,
  isActive: false
});

export const Table = props => {
  const [activeRow, setActiveRow] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);
  return (
    <TableContext.Provider
      value={{ activeRow, setActiveRow, activeColumn, setActiveColumn }}
    >
      <table>
        <tbody {...props} />
      </table>
    </TableContext.Provider>
  );
};

export const Row = ({ id, ...props }) => {
  return (
    <RowContext.Provider value={id}>
      <tr {...props} />
    </RowContext.Provider>
  );
};

export const Cell = ({ columnId, children }) => {
  const rowId = useContext(RowContext);
  const { activeRow, activeColumn } = useContext(TableContext);
  const isActiveColumn = columnId === activeColumn;
  const isActiveRow = rowId === activeRow;
  const isActive = rowId === activeRow && columnId === activeColumn;
  return useMemo(
    () => (
      <CellContext.Provider
        value={{
          isActiveColumn,
          isActiveRow,
          isActive
        }}
      >
        <td children={children} />
      </CellContext.Provider>
    ),
    [isActiveColumn, isActiveRow, isActive, children]
  );
};

export default Table;
