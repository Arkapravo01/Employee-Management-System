import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import "./index.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage"; // ✅ Corrected import path

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log("AuthContext Data in App.js:", authData); //
  const { employees, admin } = getLocalStorage();
  console.log("AuthData in App:",authData);
  console.log('authData.userData',authData.userData);
  
  const handleLogin = (email, password) => {
    console.log("Auth Data on Login Attempt:", authData);
  
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
    } else if (
      authData?.userData?.employees?.[0]?.employees?.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard />
      ) : null}
    </>
  );
};

export default App;
