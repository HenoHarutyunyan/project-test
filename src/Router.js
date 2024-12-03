import React from 'react';
import { Route, Routes } from "react-router-dom";
import Page1 from "./Components/Page-1/Page1";
import Header from "./Components/Layout/Header/Header";
import ManPage from './pages/ManPage/ManPage';
import WomanPage from './pages/WomanPage/WomanPage';
import HomePage from './pages/Homie/HomePage';
import KidsPage from './pages/KidsPage/KidsPage';
import AboutUs from './pages/About/Aboutus';

const MyRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Page1/>} />
        <Route path='/woman'     element={<WomanPage />} />
        <Route path='/mans'      element={<ManPage />}   />
        <Route path='/kids'      element={<KidsPage />}  />
        <Route path='/homepage'  element={<HomePage />}  />
        <Route path='/AboutInfo' element={<AboutUs/>}    />
      </Routes>
    </>
  );
};

export default MyRouter;
