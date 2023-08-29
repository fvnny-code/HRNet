import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "../layouts/header/Header";
// import Footer from "../layouts/footer/Footer";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="/home" element={<Home/>}/>

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
