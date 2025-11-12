import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { CircleCheckBig, MessageCircleX } from "lucide-react";
import SplitText from "../../Components/ReactBits/SplitText";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
const MyAcceptedTasks = () => {
  const { user } = use(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAcceptedTasks = async () => {
      const res = await fetch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/myacceptedtasks/${user?.email}`
      );
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    };

    fetchAcceptedTasks();
  }, [user?.email]);

  const handleCancel = async (jobId) => {
    console.log("working");
    fetch(`https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${jobId}/cancel`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
                Swal.fire({
          title: "Success",
          icon: "success",
        }).then(() => {
          setTasks(tasks.filter((task) => task._id !== jobId));
        })
      });

  };

  return (
    <div className="min-h-screen section ">
      <h1 className="text-center text-4xl lg:text-5xl my-4 font-bold text-indigo-500 ">
        <SplitText
          text="Your Accepted Tasks"
          className=""
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>

{loading ? (
  <div className="flex justify-center py-20">
    <LoadingSpinner />
  </div>
) : tasks.length === 0 ? (
  <p className="text-center text-gray-400 py-20">
    You have no accepted tasks yet.
  </p>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-2">
    {tasks.map((task) => (
      <div
        key={task._id}
        className="glassmorphic-card rounded-xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={task.coverImage}
          alt={task.title}
          className="w-full h-40 object-cover"
        />

        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm">Posted by: {task.postedBy}</p>
          <p className="text-gray-400 text-sm">Category: {task.category}</p>
          <p className="text-sm mt-2 line-clamp-2">{task.summary}</p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => handleCancel(task._id)}
              className="flex-1 rounded-lg flex items-center justify-center gap-3 py-2 bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              <CircleCheckBig /> Done
            </button>

            <button
              onClick={() => handleCancel(task._id)}
              className="flex-1 flex items-center justify-center gap-3 py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer"
            >
              <MessageCircleX /> Cancel
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
