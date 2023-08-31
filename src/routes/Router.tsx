import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Employees from "../pages/Employees/Employees";

export interface IRouterProps {}

const Router: React.FunctionComponent<IRouterProps> = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
