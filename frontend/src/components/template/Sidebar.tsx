import { Link } from "gatsby";
import * as React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Link className="defaultLinkButton" to="/exam1">
        Exam 1
      </Link>
      <Link className="defaultLinkButton" to="/exam2">
        Exam 2
      </Link>
    </div>
  );
};

export default Sidebar;
