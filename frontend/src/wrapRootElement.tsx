import React from "react";
import { GatsbyBrowser } from "gatsby";
import Layout from "./components/Layout";

const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export default WrapRootElement;
