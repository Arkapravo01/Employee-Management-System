import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen w-full p-7 bg-[#121212] text-gray-300">
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "white",
          backgroundColor: "#1a1a1a",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Hello Admin</h1>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "20px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
        >
          Logout
        </button>
      </div>

      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
