import React, { useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
import Swal from "sweetalert2";
import axios from "axios";
const UpdateJob = () => {
  const data = useLoaderData();
  const [userdata, setUserData] = useState(data);
  const navigate = useNavigate();
  const { category, coverImage, postedBy, summary, title, userEmail, _id } =
    userdata;
  // console.log(category, coverImage, postedBy, summary, title, userEmail, _id);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const postedBy = form.postedBy.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const userEmail = form.userEmail.value;

    const newJobData = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      userEmail,
    };

    try {
      const res = await axios.patch(
        `https://freelance-marketplace-api-server-smoky.vercel.app/jobs/${_id}`,
        newJobData
      );

      // console.log("Job updated:", res.data);

      Swal.fire({
        title: "Success!",
        text: "Your job details have been updated.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate(`/dashboard/myaddedjobs/${userEmail}`);
      });

      form.reset();
      setUserData(newJobData);
    } catch (err) {
      console.error("Error updating job:", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to update the job.",
        icon: "error",
      });
    }
  };
  return (
    <div className="max-w-7xl min-h-screen">
      <title>Update Your Job</title>
      <div className="max-w-3xl mx-auto rounded-2xl shadow-lg   p-10 my-8">
        <h1 className="text-center text-4xl lg:text-5xl mb-8 font-bold    ">
          <SplitText
            text="Update Your Job"
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
          onSubmit={handleUpdate}
          className="space-y-5   py-10 px-12 rounded-2xl"
        >
          {/* Job Title */}
          <div>
            <label className="block   font-medium mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              defaultValue={title}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:   "
            />
          </div>

          {/* Posted By */}
          <div>
            <label className="block   font-medium mb-2">
              Posted By
            </label>
            <input
              type="text"
              name="postedBy"
              placeholder="Posted By"
              defaultValue={postedBy}
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
              defaultValue={category}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg   text-white"
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
            <label className="block   font-medium mb-2">
              Summary
            </label>
            <textarea
              name="summary"
              rows="4"
              placeholder="Short job summary..."
              defaultValue={summary}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:   "
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block   font-medium mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              placeholder="https://example.com/image.jpg"
              defaultValue={coverImage}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:   "
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block   font-medium mb-2">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="User Email"
              defaultValue={userEmail}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-3">
            <button
              type="submit"
              className="px-10 py-4    -600 text-white font-bold text-lg rounded-sm shadow-xl 
                   hover:   -700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                   focus:outline-none focus:ring-4 focus:  focus:ring-opacity-75 w-full sm:w-auto cursor-pointer"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
