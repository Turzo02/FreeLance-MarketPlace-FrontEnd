import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyAcceptedTasks = () => {
  const { user } = use(AuthContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchAcceptedTasks = async () => {
      const res = await fetch(
        `http://localhost:5000/myacceptedtasks/${user?.email}`
      );
      const data = await res.json();
      setTasks(data);
    };

    fetchAcceptedTasks();
  }, [user?.email]);

  const handleCancel = async (jobId) => {
    console.log("working");
   fetch(`http://localhost:5000/jobs/${jobId}/cancel`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  
    setTasks(tasks.filter((task) => task._id !== jobId));

  };


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Accepted Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          You have no accepted tasks yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src={task.coverImage || "https://i.ibb.co/QvQrhm2Q/404.png"}
                alt={task.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  Posted by: {task.postedBy}
                </p>
                <p className="text-gray-600 text-sm">
                  Category: {task.category}
                </p>
                <p className="text-gray-700 text-sm mt-2">{task.summary}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    ✅ Done
                  </button>
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAcceptedTasks;
