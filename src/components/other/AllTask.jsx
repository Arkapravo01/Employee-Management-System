import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log("AuthDta", authData.userData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 m-5 rounded mt-5 h-80 border border-gray-700 shadow-lg">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded-xl mb-2 border-b-4 border-red-600">
        <h2 className="text-lg font-medium w-1/5 text-white">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-white">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-white">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {authData.userData.employees.map((elem, index) => (
          <div
            key={index}
            className="py-2 px-4 flex justify-between rounded-xl mb-2 border border-gray-600 shadow-md hover:shadow-xl transition duration-300 bg-gradient-to-r from-gray-800 to-gray-900"
          >
            <h2 className="text-lg font-medium w-1/5 text-white">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-500">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-500">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
