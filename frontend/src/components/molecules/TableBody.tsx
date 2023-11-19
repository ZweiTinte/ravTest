import * as React from "react";

const TableBody = ({
  entity,
  tableRowAction,
  openEntry,
}: {
  entity: any[];
  tableRowAction?: (entry: any) => void;
  openEntry?: number;
}) => {
  return (
    <tbody>
      {entity.map((entry, i) => {
        return (
          <tr
            key={i}
            className={`${i % 2 === 0 && "secondRow"} ${
              openEntry === entry.id &&
              tableRowAction !== undefined &&
              "openEntryRow"
            }`}
            onClick={() => tableRowAction?.(entry)}
          >
            {Object.values(entry).map((v, i) => {
              return <td key={i}>{v as string}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
