import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SplitText from "../../Components/ReactBits/SplitText";
const UpdateJob = () => {
  const data = useLoaderData();
  const [userdata, setUserData] = useState(data);
  const { category, coverImage, postedBy, summary, title, userEmail, _id } =
    userdata;
  console.log(category, coverImage, postedBy, summary, title, userEmail, _id);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const postedBy = form.postedBy.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const userEmail = form.userEmail.value;
    console.log(title, postedBy, category, summary, coverImage, userEmail);
    const newJobData = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      userEmail,
    };

    fetch(`http://localhost:5000/jobs/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJobData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    form.reset();
    setUserData(newJobData);
  };
  return (
    <div className="section min-h-screen">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-lg glassmorphic-card p-10 my-8">
        <h1 className="text-center text-4xl lg:text-5xl mb-8 font-bold text-indigo-500 ">
          
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
          className="space-y-5 glassmorphic-card py-10 px-12 rounded-2xl"
        >
          {/* Job Title */}
          <div>
            <label className="block text-gray-400 font-medium mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              defaultValue={title}
              required
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
              className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-indigo-400 text-white"
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Graphics Design</option>
              <option>Content Writing</option>
              <option>App Development</option>
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
              placeholder="Short job summary..."
              defaultValue={summary}
              required
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
              name="coverImage"
              placeholder="https://example.com/image.jpg"
              defaultValue={coverImage}
              required
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
              className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-xl 
                   hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                   focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full sm:w-auto cursor-pointer"
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
