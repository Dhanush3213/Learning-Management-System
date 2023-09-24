import React from 'react'
import Sidebar from './Sidebar'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl="http://127.0.0.1:8000/api";

export default function AddChapters() {
    
    const [chapterData, setChapterData] = useState({
       course: '',
      title: '',
      description: '',
      
      video: '', // Initialize file input as null
      remarks: '' // Initialize category as an empty string
   
    });
  

    const handleChange = (event) => {
      if (event.target.type === 'file') {
        // Handle file input separately
        setChapterData({ ...chapterData, [event.target.name]: event.target.files[0] });
      } else {
        setChapterData({ ...chapterData, [event.target.name]: event.target.value });
      }
    };
    const {course_id}=useParams();
    const formSubmit = () => {
      const formData = new FormData();
 
      formData.append('course', course_id);
      formData.append('title', chapterData.title);
      formData.append('description', chapterData.description);
      formData.append('video', chapterData.video, chapterData.video.name);
      formData.append('remarks', chapterData.remarks);
  
      try {
        axios.post(`${baseUrl}/chapter/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((response) => {
          window.location.href = '/add-chapters/1';
        });
      } catch (e) {
        console.log(e);
      }
    };
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>

                    <div className="card" >
                    <div className="card-header">Add Chapters</div>
                    <div className="card-body">
                     <form>
                        <div className="mb-3">
                            <label for="title" className="form-label">Course Name</label>
                            <input type="text" name='title' onChange={handleChange} className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label">Description</label>
                            <textarea className='form-control' name='description' onChange={handleChange} id='description'></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="video" className="form-label">Video</label>
                            <input type="file" name='video' onChange={handleChange} className="form-control" id="video" />
                        </div>
                        <div className="mb-3">
                            <label for="techs" className="form-label">Remarks</label>
                            <textarea className='form-control' name='remarks' onChange={handleChange} id='Remarks' placeholder='This video is focused on introduction'></textarea>
                        </div>
                  <button type='submit' onClick={formSubmit} children="btn btn-primary">Submit</button>
                     </form>
                    
                    </div>
                    </div>

  
        </section>
    </div>
</div>

  )
}
