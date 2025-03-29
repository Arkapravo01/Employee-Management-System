import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import "./index.css";
import { setLocalStorage } from "./utils/localStorage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage"; 

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // ✅ Restore session on page reload
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    console.log("Stored User Data:", storedUser); // Debugging Step 1
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.role);
        setLoggedInUserData(parsedUser.data || null);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  // ✅ Ensure localStorage is initialized
  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      console.log("Initializing localStorage...");
      setLocalStorage();
    }
  }, []);

  // ✅ Login & Store session in localStorage
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin" };
      setUser("admin");
      setLoggedInUserData(null);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData?.userData?.employees) {
      const employee = authData.userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }

    console.log("User after login:", localStorage.getItem("loggedInUser")); // Debugging Step 2
  };

  // ✅ Logout
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
    console.log("User logged out. LocalStorage cleared."); // Debugging Step 3
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} setUser={setUser}/>
      ) : null}
    </>
  );
};

export default App;
