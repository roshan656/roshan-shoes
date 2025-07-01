// import React from 'react'

// const PrivateLayout = () => {
//   let token = localStorage.getItem("token");
//   console.log(token, "privateRoute token");
//   return (
//     <>
//       {!token ? <Outlet /> : <Navigate to="/dashboard" />}
//     </>
//   )
// }

// export default PrivateLayout;
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateLayout = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      {token ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default PrivateLayout;
