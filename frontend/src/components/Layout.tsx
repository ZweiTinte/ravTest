import * as React from "react";
import Sidebar from "./template/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
