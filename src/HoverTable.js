import React, { useContext } from "react";
import { useHover } from "./useHover";
// import { useHover } from "react-hooks-lib";

import * as ActiveTable from "./ActiveTable";

export const Row = ({ id, render = props => <tr {...props} />, ...props }) => {
  const [hoverRef, isHovered] = useHover();
  // const { hovered: isHovered, bind } = useHover();
  const { setActiveRow } = useContext(ActiveTable.TableContext);
  if (isHovered) {
    setActiveRow(id);
  }
  // console.log("bind", bind);
  // console.log("props", props);
  // const { onMouseEnter: ome, onMouseEnter: oml } = bind;

  // const onMouseEnter = React.useCallback(ome);
  // const onMouseLeave = React.useCallback(oml);

  return (
    <ActiveTable.Row
      id={id}
      ref={hoverRef}
      render={render}
      {...props}
      // {...bind}
    />
  );
};

export const Cell = ({ columnId, children, ...props }) => {
  const [hoverRef, isHovered] = useHover();
  // const { hovered: isHovered, bind } = useHover();
  const { setActiveColumn } = useContext(ActiveTable.TableContext);
  if (isHovered) {
    setActiveColumn(columnId);
  }
  return (
    <ActiveTable.Cell
      columnId={columnId}
      ref={hoverRef}
      render={children}
      {...props}
      // {...bind}
    />
  );
};

export default ActiveTable.default;
