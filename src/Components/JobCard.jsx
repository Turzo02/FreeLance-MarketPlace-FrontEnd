import { UserCheck } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const JobCard = ({ LatestJobsData }) => {
    const naviagte= useNavigate()
    const handleNavigate = () => {
        naviagte(`/alljobs`)
    }
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {
                LatestJobsData.map(job => (
                    <div onClick={handleNavigate}
                        key={job._id} 
                        className="
                        border border-gray-200
                        glassmorphic-card rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img 
                            className="w-full h-48 object-cover rounded-t-xl" 
                            src={job.coverImage}
                             onError={(e) => { e.target.src = "https://i.ibb.co.com/GX24tSY/all-sample.png"; }} 
                            alt="Job cover" 
                        />
                        <div className="p-6">
                            <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-indigo-400">
                                {job.category}
                            </div>
                            <h3 className="text-xl font-bold mb-2 ">
                                {job.title}
                            </h3>
                            <p className="mb-4 text-gray-400 line-clamp-2">
                                {job.summary}
                            </p>
                            <div className="flex justify-between items-center text-sm  ">
                                                <span className="flex justify-center items-center gap-2"><UserCheck /> {job.postedBy}</span>
                                
                                <span>{new Date(job.postedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    );
};

export default JobCard;