import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

export default function TeacherAddCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    f_img: null, // Initialize file input as null
    category: '', // Initialize category as an empty string
    techs: '',
  });

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/category/`).then((response) => {
        setCats(response.data);
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
    formData.append('featured_img', courseData.f_img); // No need for .name here
    formData.append('techs', courseData.techs);

    try {
      axios.post(`${baseUrl}/course/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        window.location.href = '/teacher-add-courses';
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
            <div className='card-header'>Add Course</div>
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
                    type='file'
                    onChange={handleChange}
                    name='f_img'
                    className='form-control'
                    id='f_img'
                  />
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
