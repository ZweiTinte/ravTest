import * as React from "react";
import TableHead from "../molecules/TableHead";
import TableBody from "../molecules/TableBody";

const Table = ({
  entity,
  tableRowAction,
  openEntry,
}: {
  entity: any[];
  tableRowAction?: (entry: any) => void;
  openEntry?: number;
}) => {
  return (
    <table>
      <TableHead entity={entity} />
      <TableBody
        entity={entity}
        tableRowAction={tableRowAction}
        openEntry={openEntry}
      />
    </table>
  );
};

export default Table;
