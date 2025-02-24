import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Contact";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>      
        <Route path="/about" element={<About />}></Route>      
        <Route path="/services" element={<Services />}></Route>      
        <Route path="/contact" element={<Contact />}></Route>      
      </Route>
      
    </Routes>
  );
};