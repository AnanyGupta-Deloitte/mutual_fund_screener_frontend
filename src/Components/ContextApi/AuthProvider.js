import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
  return useContext(AuthContext);
}
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [ userList, setUserList]= useState([]);
  async function signup(username, email, password) {
    try {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      console.log(username, email, password, date);
      const data = await axios({
        method: 'post',
        url: 'https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/mutual-fund/register',
        data: {
          username: username,
          email: email,
          password: password,
          createdAt: date.toString(),
          
        },
        headers: { 
          "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        }
      })
      console.log(data)
      return data;
    } catch (err) {
      // console.log(err.response);
      return err.response;
    }
  }
  async function login(username, password) {
    try {
      const data = await axios.post(
        "https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/mutual-fund/log-in",
        {
          username: username,
          password: password,
        }
      );

      console.log("user", data.data);
      setUser(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      const flag = data.data.returnUserDetails.roles.some(
        (el) => el.name === "ADMIN"
      );

      setIsAdmin(flag);

      return data.data;
    } catch (err) {
      console.log(err.response);
    }
  }

  function logout() {
    localStorage.removeItem("user");

    setUser(null);
    setIsAdmin(false);
  }
  async function addMFToWishlist(MFid) {
    try {
      let api = `https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/mutual-fund/user/${user.returnUserDetails.id}/add-mutualFund-to-watchlist/${MFid}`;
      // console.log(api);
      let token = `Bearer ${user.returnUserDetails.token}`;
      // console.log(token);
      let updatedUserDetails = await axios.post(api, {
        headers: {
          Authorization: token,
        },
      });
      user.returnUserDetails.wishList =
        updatedUserDetails.data.mutualFundWatchList;
      let updatedUser = {
        returnUserDetails: user.returnUserDetails,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (err) {
      console.log(err.response);
    }
  }

  async function removeMFFromWishList(MFid) {
    try {
      let api = `https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/mutual-fund/remove-mutual-fund/${user.returnUserDetails.id}/from-user/${MFid}`;
      let token = `Bearer ${user.returnUserDetails.token}`;
      let updatedUserDetails = await axios.delete(api, {
        headers: {
          Authorization: token,
        },
      });
      // console.log(updatedUserDetails);
      user.returnUserDetails.wishList =
        updatedUserDetails.data.mutualFundWatchList;
      let updatedUser = {
        returnUserDetails: user.returnUserDetails,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (err) {
      console.log(err.response);
    }
  }
  async function updateUserFromStorage() {
    let data = await localStorage.getItem("user");
    if (data) {
      data = JSON.parse(data);
      setUser(data);
      const flag = data.returnUserDetails.roles.some(
        (el) => el.name === "ADMIN"
      );
      setIsAdmin(flag);
    } else {
      setIsAdmin(false);
      setUser(null);
    }
  }

  async function getAllUsers(){
    try {
      let api = `https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/admin/get-all-users`;
      let token = `Bearer ${user.returnUserDetails.token}`;
      let data = await axios.get(api, {
        headers: {
          Authorization: token,
          "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        },
      });
      if(userList.length===0){
        setUserList(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteUser(userId){
    try {
      let api = `https://mutual-fund-screener-backend-urtjok3rza-wl.a.run.app/admin/delete-account/${userId}`;
      let token = `Bearer ${user.returnUserDetails.token}`;

      await axios.delete(api, {
        headers: {
          Authorization: token,
          "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        },
      });
      setUserList([]);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    // console.log("in useEffect")
    updateUserFromStorage();
  }, []);

  const value = {
    isAdmin,
    user,userList,
    login,
    signup,
    logout,
    addMFToWishlist,
    removeMFFromWishList,getAllUsers,deleteUser
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
