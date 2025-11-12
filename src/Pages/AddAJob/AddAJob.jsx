import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import SplitText from "../../Components/ReactBits/SplitText";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { tr } from "motion/react-client";
const AddAJob = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const postedBy = form.postedBy.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const userEmail = form.userEmail.value;
    // console.log(title, postedBy, category, summary, coverImage, userEmail);

    const newJob = {
      title: title,
      postedBy: postedBy,
      category: category,
      summary: summary,
      coverImage: coverImage,
      userEmail: userEmail,
    };

    fetch("https://freelance-marketplace-api-server-smoky.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Your job has been added. Click the button to redirect...",
          icon: "success",
          showConfirmButton: tr,
        }).then(() => {
            navigate(`/myaddedjobs/${user?.email}`);
        })
      });

    form.reset();
  };

  return (
    <div className="min-h-screen selection ">
      <div className="max-w-3xl mx-auto my-6  rounded-2xl shadow-lg glassmorphic-card p-8">
        <h1 className="text-center text-4xl lg:text-5xl mb-8 font-extrabold text-indigo-500 ">
          <SplitText
            text="Add a New Job"
            className=""
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>

        <form
          onSubmit={handleAddJob}
          className="space-y-5 glassmorphic-card py-10 px-12  rounded-2xl"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-400 font-medium mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g. Frontend Developer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Posted By */}
          <div>
            <label className="block text-gray-400 font-medium mb-2">
              Posted By
            </label>
            <input
              type="text"
              required
              name="postedBy"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-2">Category</label>
            <select
              name="category"
              required
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-indigo-400 text-white"
            >
              <option value="" disabled hidden>
                Select a category
              </option>

              <option>Animation & 3D</option>
              <option>App Development</option>
              <option>Content Writing</option>
              <option>Digital Marketing</option>
              <option>Graphics Design</option>
              <option>SEO Optimization</option>
              <option>Social Media Management</option>
              <option>Video Editing</option>
              <option>Voiceover & Audio</option>
              <option>Web Development</option>
            </select>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Summary
            </label>
            <textarea
              name="summary"
              rows="4"
              required
              placeholder="Write a short job description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-gray-400 font-medium mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              required
              name="coverImage"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block text-gray-400 font-medium mb-2">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2  border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-3">
            <button
              className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-xl 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full sm:w-auto cursor-pointer"
            >
              Add a Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAJob;
