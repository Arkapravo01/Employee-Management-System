import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const subMitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    const updatedEmployees = data.map((elem) => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTaskObj], // Add new task
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1, // Update count
          },
        };
      }
      return elem;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // **Update userData so AllTask re-renders**
    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-6 bg-[#1e1e1e] mt-7 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg text-gray-300 font-semibold mb-4">Create New Task</h2>
      <form onSubmit={subMitHandler} className="flex w-full gap-6">
        <div className="w-1/2 space-y-4">
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Task Title:</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded bg-[#2a2a2a] border border-gray-600 outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded bg-[#2a2a2a] border border-gray-600 outline-none focus:ring-2 focus:ring-gray-500"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Assign to:</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded bg-[#2a2a2a] border border-gray-600 outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Category:</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded bg-[#2a2a2a] border border-gray-600 outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="flex-1">
            <h3 className="text-sm text-gray-400 mb-1">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-36 p-3 rounded bg-[#2a2a2a] border border-gray-600 outline-none focus:ring-2 focus:ring-gray-500 resize-none"
              placeholder="Enter task details..."
            ></textarea>
          </div>
          <button className="w-full mt-4 py-2 bg-[#378f34] hover:bg-[#4a4a4a] transition rounded text-gray-200 font-medium shadow-md mb-20">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
