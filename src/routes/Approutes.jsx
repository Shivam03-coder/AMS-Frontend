import React, { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes";
import { toastConfig } from "../components/config/Toastifyconfig";
import {
  Homepage,
  Authpage,
  Userdashboard,
  Admindashboard,
  Passwordresetpage,
  Errorpage,
} from "../pages/pagesexport";

function Approutes() {
  return (
    <>
      <ToastContainer {...toastConfig} />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/ams/register" Component={Authpage} />
        <Route path="/ams/password-reset" Component={Passwordresetpage} />
        <Route
          path="/ams/student-dashboard/:id"
          element={
            <ProtectedRoutes>
              <Userdashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="/ams/admin-dashboard/:id" Component={Admindashboard} />
        <Route path="*" Component={Errorpage} />
      </Routes>
    </>
  );
}

export default Approutes;
