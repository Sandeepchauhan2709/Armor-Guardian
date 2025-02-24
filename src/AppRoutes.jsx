import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./page/Home";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>      
      </Route>
      
    </Routes>
  );
};