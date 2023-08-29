import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "../layouts/header/Header";
// import Footer from "../layouts/footer/Footer";
import Layout from "../layouts/Layout";
export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
