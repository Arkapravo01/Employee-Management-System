import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
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
        }}
      >
        <h1>Hello Admin</h1>
      </div>

      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
