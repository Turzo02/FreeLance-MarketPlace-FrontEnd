import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const MyAddedJobs = () => {
    const userJobsData = useLoaderData()

    const [jobs, setJobs] = useState(userJobsData)
    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/jobs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = jobs.filter(job => job._id !== id)
                setJobs(remaining)
            })
    }

    return (
        <div>   
            {
                jobs.map(job => 
                                <div  key={job._id} 
            className=" flex justify-between items-center ">
                <div className="left flex gap-4 items-center">
                    <div className='w-[150px] object-cover border-2 '>
                        <img src="https://i.ibb.co.com/QvQrhm2Q/404.png" alt="" />
                    </div>
                    <h1 className='text-2xl font-semibold'> 
                        {job.title}
                        </h1>
                </div>
                <div className="right flex gap-4">
                    <Link to={`/updateJob/${job._id}`}>
                    <button className='btn btn-accent'>Update</button>
                    </Link>
                    <button onClick={()=> handleDeleteUser(job._id)} className='btn btn-accent'>Delete</button>
                </div>
            </div>

     
                    
                )

            } 



        </div>
    );
};

export default MyAddedJobs;