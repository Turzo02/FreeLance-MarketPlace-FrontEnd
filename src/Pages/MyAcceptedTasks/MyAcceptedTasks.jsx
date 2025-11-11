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
    <div className="min-h-screen ">
     
        <h1 className="text-center text-4xl lg:text-5xl my-4 font-bold text-indigo-500 ">My Accepted Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">
          You have no accepted tasks yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6 ">
          {tasks.map((task) => (
            <div
              key={task._id}
              className=" glassmorphic-card shadow-md rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src={task.coverImage || "https://i.ibb.co/QvQrhm2Q/404.png"}
                alt={task.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold ">
                  {task.title}
                </h2>
                <p className=" text-sm">
                  Posted by: {task.postedBy}
                </p>
                <p className="text-gray-400 text-sm">
                  Category: {task.category}
                </p>
                <p className="text-gray-400 text-sm mt-2">{task.summary}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleCancel(task._id)}
                    className="flex-1 bg-orange-400 text-white py-2 rounded-lg hover:bg-red-500 transition cursor-pointer"
                  >
                     Cancel
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
