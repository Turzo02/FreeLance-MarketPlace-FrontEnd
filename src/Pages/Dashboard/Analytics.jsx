import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function Analytics() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://freelance-marketplace-api-server-smoky.vercel.app/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
     <LoadingSpinner></LoadingSpinner>
    );
  }

  // Simple chart data
  const chartData = [
    {
      name: "Total Jobs",
      count: jobs.length,
    },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      <h2 className="text-indigo-500 text-xl">
        Analytics
      </h2>

      {/* Stats Card */}
      <div className="border border-indigo-500 rounded-lg p-4">
        <p className="text-gray-400 text-sm">
          Total Jobs Posted
        </p>
        <p className="text-indigo-500 text-3xl font-semibold">
          {jobs.length}
        </p>
      </div>

      {/* Chart */}
      <div className="border border-indigo-500 rounded-lg p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#a5b4fc" />
            <YAxis stroke="#a5b4fc" />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Coming Soon */}
      <div className="border border-indigo-500 rounded-lg p-4">
        <p className="text-indigo-500 mb-1">
          More analytics coming soon
        </p>
        <p className="text-gray-400 text-sm">
          Job categories breakdown, user activity, monthly growth,
          and advanced insights will be added here.
        </p>
      </div>
    </div>
  );
}
