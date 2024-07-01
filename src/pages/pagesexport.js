import { lazy } from "react";

const Homepage = lazy(() => import("./home/Homepage"));
const Authpage = lazy(() => import("./appauth/Authpage"));
const Userdashboard = lazy(() => import("./userdashboard/Userdashboard"));
const Admindashboard = lazy(() => import("./admindashboard/Admindashboard"));
const Errorpage = lazy(() => import("./notfound/Errorpage"));

export { Homepage, Authpage, Userdashboard, Admindashboard, Errorpage };
