import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";

export default function EditChapter() {
  const { chapter_id } = useParams();

  const [chapterData, setChapterData] = useState({
    course: '',
    title: '',
    description: '',
    prev_video: '',
    video: null, // Initialize file input as null
    remarks: '', // Initialize category as an empty string
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'video') {
      // Handle file input separately
      setChapterData({ ...chapterData, [name]: files[0] });
    } else {
      setChapterData({ ...chapterData, [name]: value });
    }
  };

  const formSubmit = () => {
    const formData = new FormData();

    formData.append('course', chapterData.course);
    formData.append('title', chapterData.title);
    formData.append('description', chapterData.description);

    if (chapterData.video) {
      formData.append('video', chapterData.video, chapterData.video.name);
    }

    formData.append('remarks', chapterData.remarks);

    try {
      axios.put(`${baseUrl}/chapter/${chapter_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        if(response.status==200) {
          const Swal=require('sweetalert2');
          Swal.fire({
            title: 'Data has been updated successfully',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: 'false',
          });
        };
        // Redirect or handle the response as needed
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/chapter/${chapter_id}`).then((response) => {
        setChapterData({
          course: response.data.course,
          title: response.data.title,
          description: response.data.description,
          video: null, // Initialize video as null to avoid setting the value of file input
          prev_video: response.data.video,
          remarks: response.data.remarks,
        });
        console.log(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, [chapter_id]);

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <Sidebar />
        </aside>
        <section className='col-md-9'>
          <div className="card">
            <div className="card-header">Edit Chapter</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Course Name</label>
                  <input type="text" value={chapterData.title} name='title' onChange={handleChange} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea value={chapterData.description} className='form-control' name='description' onChange={handleChange} id='description'></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="video" className="form-label">Video</label>
                  <input type="file" name='video' onChange={handleChange} className="form-control" id="video" />
                  {chapterData.prev_video &&
                    <video width="100%" height="340" controls>
                      <source src={chapterData.prev_video} type="video/mp4" />
                      <source src={chapterData.prev_video} type="video/ogg" />
                    </video>
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="techs" className="form-label">Remarks</label>
                  <textarea value={chapterData.remarks} className='form-control' name='remarks' onChange={handleChange} id='Remarks' placeholder='This video is focused on introduction'></textarea>
                </div>
                <button type='button' onClick={formSubmit} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
