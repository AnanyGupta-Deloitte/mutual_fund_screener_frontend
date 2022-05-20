import React, { useContext} from "react";
import { AuthContext } from "./ContextApi/AuthProvider";
const AdminDashboard = () => {
  const { isAdmin } = useContext(AuthContext);
//   const
//   useEffect( () => {
//     const data = getAllUsersForAdmin();
//     console.log(data);
//   }, []);
  console.log(isAdmin);
  return (
    <>
      <h1>je</h1>
    </>
  );
};

export default AdminDashboard;
