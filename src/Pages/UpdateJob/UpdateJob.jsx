import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const UpdateJob = () => {
    
    const data = useLoaderData()
    const [userdata ,setUserData] = useState(data)
     const {category,coverImage,postedBy,summary,title,userEmail ,_id} = userdata
     console.log(category,coverImage,postedBy,summary,title,userEmail ,_id)

     const handleUpdate = (e) =>{
        e.preventDefault()

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
            userEmail
        }

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            form.reset()
            setUserData(newJobData)

     }
    return (

        <div>
             
             <form onSubmit={handleUpdate} >
                 <input type="text"  name='title' placeholder="title" defaultValue={title} />
                 <br />
                 <input type="text" name='postedBy'  placeholder="postedBy" readOnly defaultValue={postedBy} />
                 <br />
                 <input type="text" name='category'  placeholder="category" defaultValue={category} />
                 <br />
                 <input type="text"  name='summary' placeholder="summary" defaultValue={summary} />
                 <br />
                 <input type="text"  name='coverImage' placeholder="coverImage" defaultValue={coverImage} />
                 <br />
                 <input type="text"  name='userEmail' placeholder="userEmail" readOnly defaultValue={userEmail} />
                 <br />
                 <button type="submit" className='btn  btn-outline'>Update</button>
             </form>

           


            
        </div>
    );
};

export default UpdateJob;