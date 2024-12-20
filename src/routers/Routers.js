import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/TyreListing";
import CarDetails from "../pages/TyreDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import InventoryForm from "../pages/AddInventory";
import TyreListing from "../pages/TyreListing";
import TyreDetails from "../pages/TyreDetails";
import MakeAnAppointment from "../pages/MakeAnAppointment";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tires" element={<TyreListing />} />
      <Route path="/tires/:id" element={<TyreDetails />} />
      {/* <Route path="/blogs" element={<Blog />} /> */}
      {/* <Route path="/blogs/:slug" element={<BlogDetails />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<MakeAnAppointment/>} />
      <Route path="*" element={<NotFound />} />
      <Route path='/8086' element={<InventoryForm/>}/>
    </Routes>
  );
};

export default Routers;
