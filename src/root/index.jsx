import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../components/signup";
import Signin from "../components/signin";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;