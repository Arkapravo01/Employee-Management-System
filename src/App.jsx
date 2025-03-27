import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import "./index.css";
import { setLocalStorage } from "./utils/localStorage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage"; // ✅ Corrected import path

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  console.log("AuthContext Data in App.js:", authData); //
  const { employees, admin } = getLocalStorage();

  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      console.log("Initializing localStorage...");
      setLocalStorage(); // ✅ This will set employees/admin in localStorage
    }
  }, []);
  console.log("Auth Data", authData);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  //     else{
  //       console.log('Auth null');
  //     }
  //   }
  // , [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.userData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard/>
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData}/>
      ) : null}
    </>
  );
};

export default App;
