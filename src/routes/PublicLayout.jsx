// import React from 'react'
// import { Outlet } from 'react-router-dom';

// const PublicLayout = () => {
//   let token = localStorage.getItem("token");
//   console.log(token,"token")
//   return <>
//   {token ? <Outlet /> : <Navigator to = "login" /> }
//   </>;
// }

// export default PublicLayout;
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicLayout = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      {token ? <Navigate to="/dashboard" /> : <Outlet />}
    </>
  );
};

export default PublicLayout;
