import { lazy } from "react";

const Homepage = lazy(() => import("./home/Homepage"));
const Authpage = lazy(() => import("./appauth/Authpage"));
const Userdashboard = lazy(() => import("./userdashboard/Userdashboard"));
const Admindashboard = lazy(() => import("./admindashboard/Admindashboard"));
const Errorpage = lazy(() => import("./notfound/Errorpage"));
const Passwordresetpage = lazy(() =>
  import("./password-reset/Passwordresetpage")
);

export {
  Homepage,
  Authpage,
  Userdashboard,
  Admindashboard,
  Passwordresetpage,
  Errorpage,
};
