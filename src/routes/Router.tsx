import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route element= {<Navigate replace to="/home"/>} path="/"/>
        </Routes>
<Footer />
    </BrowserRouter>
  );
}
