import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./ContextApi/AuthProvider";
const AdminDashboard = () => {
  const { isAdmin } = useContext(AuthContext);
    console.log(isAdmin)
  return (
    <>
      <h1>je</h1>
    </>
  );
};

export default AdminDashboard;
