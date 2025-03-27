import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7 bg-[#121212] text-gray-300">
      <Header />
      <Createtask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
