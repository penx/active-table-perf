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

export const Table = ({
  render = ({ children }) => (
    <table>
      <tbody>{children}</tbody>
    </table>
  ),
  ...props
}) => {
  const [activeRow, setActiveRow] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);
  return (
    <TableContext.Provider
      value={{ activeRow, setActiveRow, activeColumn, setActiveColumn }}
    >
      {useMemo(() => render({ children: props.children }), [
        props.children,
        render
      ])}
    </TableContext.Provider>
  );
};

export const Row = React.forwardRef(
  ({ id, render = props => <tr {...props} />, ...props }, ref) => {
    const { activeRow } = useContext(TableContext);
    const isActiveRow = activeRow === id;
    return (
      <RowContext.Provider value={id}>
        {useMemo(() => render({ ...props, isActiveRow, ref }), [
          isActiveRow,
          props,
          ref,
          render
        ])}
      </RowContext.Provider>
    );
  }
);

export const Cell = React.forwardRef(
  ({ columnId, render = props => <td {...props} />, ...props }, ref) => {
    const rowId = useContext(RowContext);
    const { activeRow, activeColumn } = useContext(TableContext);
    return (
      <CellContext.Provider
        value={{
          isActiveColumn: columnId === activeColumn,
          isActiveRow: rowId === activeRow,
          isActive: rowId === activeRow && columnId === activeColumn
        }}
      >
        <CellContext.Consumer>
          {context => render({ ...props, ...context, ref })}
        </CellContext.Consumer>
      </CellContext.Provider>
    );
  }
);

export default Table;
