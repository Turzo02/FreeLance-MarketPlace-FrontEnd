import React from 'react';

const JobCard = ({ LatestJobsData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                LatestJobsData.map(job => (
                    <div 
                        key={job._id} 
                        className="bg-indigo-50   rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img 
                            className="w-full h-48 object-cover rounded-t-xl" 
                            src="https://i.ibb.co.com/QvQrhm2Q/404.png"
                            alt="Job cover" 
                        />
                        <div className="p-6">
                            <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                                {job.category}
                            </div>
                            <h3 className="text-xl font-bold text-indigo-900 mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {job.summary}
                            </p>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span>Posted by: {job.postedBy}</span>
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