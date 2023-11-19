import * as React from "react";

const TableHead = ({ entity }: { entity: any[] }) => {
  return (
    <thead>
      <tr>
        {Object.keys(entity[0]).map((k) => {
          return <th key={k}>{k}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
