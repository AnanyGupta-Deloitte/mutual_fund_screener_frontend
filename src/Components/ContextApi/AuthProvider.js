import React, { useState, useEffect, useContext,useMemo } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext)
}
const AuthProvider=({ children })=> {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    
    
    async function signup(username,email, password) {
        try {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            console.log(username,email,password,date)
            const data = await axios.post("http://localhost:8080/mutual-fund/register", {
                username: username,
                email: email,
                password: password,
                "createdAt": date.toString(),
            
            });
            return data
        }
        catch (err) {
            // console.log(err.response);
            return err.response
        }
    }
    async function login(username, password) {
        try {
            
            const data = await axios.post("http://localhost:8080/mutual-fund/log-in", {
                username: username,
                password: password
            });
            
            console.log("user",data.data);
            setUser(data.data);
            localStorage.setItem("user", JSON.stringify(data.data));
            const flag = data.data.returnUserDetails.roles.some(el => el.id == 2)
        
            setIsAdmin(flag);
            
            return data.data;
        }
        catch (err) {
            console.log(err.response);
            
        }

    }
    function logout() {
        localStorage.removeItem("user")

        setUser(null);
        setIsAdmin(false);
    }
    async function addMFToWishlist(MFid) {
        try {
            let api=`http://localhost:8080/mutual-fund/user/${user.returnUserDetails.id}/add-mutualFund-to-watchlist/${MFid}`;
            let token = `Bearer ${user.jwtToken}`
            // console.log(token);
            let updatedUserDetails = await axios.put(api, {
                headers: {
                    'Authorization': token
                }
              })
              user.returnUserDetails.wishList= updatedUserDetails.data.mutualFundWatchList
              let updatedUser={
                  "jwtToken" : user.jwtToken,
                  returnUserDetails : user.returnUserDetails
  
              }
              setUser(updatedUser);
              localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        catch (err) {
            console.log(err.response);
            
        }
    }
   
    async function removeMFFromWishList(MFid) {
        try {
            let api=`http://localhost:8080/mutual-fund/remove-mutual-fund/${user.returnUserDetails.id}/from-user/${MFid}`;
            let token = `Bearer ${user.jwtToken}`
            let updatedUserDetails = await axios.delete(api, {
                headers: {
                    'Authorization': token
                }
            })
            // console.log(updatedUserDetails);
            user.returnUserDetails.wishList= updatedUserDetails.data.mutualFundWatchList
            let updatedUser={
                "jwtToken" : user.jwtToken,
                returnUserDetails : user.returnUserDetails
                
            }
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        catch (err) {
            console.log(err.response);
            
        }
    }
    async function updateUserFromStorage(){
        let data = await localStorage.getItem("user");
        if (data) {
            data = JSON.parse(data);
            setUser(data);
            const flag = data.returnUserDetails.roles.some(el => el.id === 2)
            setIsAdmin(flag);
        } else {
            setIsAdmin(false);
            setUser(null);
        }
    }
    useEffect(() => {
        // console.log("in useEffect")
        updateUserFromStorage();
    },[])
    
    const value = {
        isAdmin,
        user,
        login,
        signup,
        logout,
        addMFToWishlist,removeMFFromWishList
    }
    return (
        < AuthContext.Provider value={value} >
            { children}
        </AuthContext.Provider >
    )
}

export default AuthProvider