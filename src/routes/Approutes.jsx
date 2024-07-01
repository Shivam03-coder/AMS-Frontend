import React, { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/shared/loading/Apploading";
import ProtectedRoutes from "./ProtectedRoutes";
import { toastConfig } from "../components/config/Toastifyconfig";
import {
  Homepage, Authpage, Userdashboard, Admindashboard, Errorpage
} from "../pages/pagesexport";

function Approutes() {
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer {...toastConfig} />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/ams/register" Component={Authpage} />
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
    </Suspense>
  );
}

export default Approutes;
