
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api';

export default function EditCourse() {


  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    prev_img:'',
    f_img: null, // Initialize file input as null
    category: '', // Initialize category as an empty string
    techs: '',
  });
  const { course_id } = useParams();
  useEffect(() => {
    try {
      axios.get(`${baseUrl}/category/`).then((response) => {
        setCats(response.data);
      });
    } catch (e) {
      console.log(e);
    }
    try {
        axios.get(`${baseUrl}/teacher-courses-detail/${course_id}`).then((response) => {
            setCourseData({
            category: response.data.category,
            title: response.data.title,
            description: response.data.description,
             // Initialize video as null to avoid setting the value of file input
            prev_img: response.data.featured_img,
            f_img: null, // Initialize file input as
            techs: response.data.techs,
          });
          console.log(response.data);
        });
      } catch (e) {
        console.log(e);
      }
  }, []);

  const handleChange = (event) => {
    if (event.target.type === 'file') {
      // Handle file input separately by updating courseData.f_img
      setCourseData({ ...courseData, f_img: event.target.files[0] });
    } else {
      setCourseData({ ...courseData, [event.target.name]: event.target.value });
    }
  };

  const formSubmit = () => {
    const formData = new FormData();
    formData.append('category', courseData.category);
    formData.append('teacher', 1);
    formData.append('title', courseData.title);
    formData.append('description', courseData.description);
    if(courseData.f_img!==null){
    formData.append('featured_img', courseData.f_img,courseData.f_img.name);
    } // No need for .name here
    formData.append('techs', courseData.techs);

    try {
      axios.put(`${baseUrl}/teacher-courses-detail/${course_id}`, formData, {
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
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <Sidebar />
        </aside>
        <section className='col-md-9'>
          <div className='card'>
            <div className='card-header'>Edit Course</div>
            <div className='card-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='category' className='form-label'>
                    Categories
                  </label>
                  <select
                    name='category'
                    onChange={handleChange}
                    value={courseData.category}
                    className='form-control'
                  >
                    <option value=''>Select a Category</option>
                    {cats.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                    Course Name
                  </label>
                  <input
                    type='text'
                    onChange={handleChange}
                    name='title'
                    value={courseData.title}
                    className='form-control'
                    id='title'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'>
                    Description
                  </label>
                  <textarea
                    onChange={handleChange}
                    name='description'
                    value={courseData.description}
                    className='form-control'
                    id='description'
                  ></textarea>
                </div>
                <div className='mb-3'>
                    <label htmlFor='f_img' className='form-label'>
                        Featured Images
                    </label>
                    <input
                        type="file"
                        name='f_img' // Change 'video' to 'f_img'
                        onChange={handleChange}
                        className="form-control"
                        id="f_img"
                    />
                    {courseData.prev_img &&
                        <img src={courseData.prev_img} width="300" alt="Featured Image" className='mt-2'/>
                    }
                    </div>
                <div className='mb-3'>
                  <label htmlFor='techs' className='form-label'>
                    Technologies
                  </label>
                  <textarea
                    className='form-control'
                    name='techs'
                    onChange={handleChange}
                    value={courseData.techs}
                    id='techs'
                    placeholder='Php, Python, Javascript, HTML, CSS'
                  ></textarea>
                </div>
                <button
                  type='button' // Prevent form submission
                  onClick={formSubmit}
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
