import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const Isauthenticated = true;
  const userRole = ["user"];
  const allowedRoles = ["user"];

  return (
    <>
      {Isauthenticated &&
      allowedRoles.some((role) => userRole.includes(role)) ? (
        <>{children}</>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default ProtectedRoutes;
