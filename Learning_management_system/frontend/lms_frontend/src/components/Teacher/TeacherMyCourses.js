import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import {useState,useEffect} from 'react';
import axios from 'axios';

const baseUrl="http://127.0.0.1:8000/api";

export default function TeacherMyCourses() {
    const [courseData,setcourseData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');

    useEffect(() => {
        try {
          axios.get(`${baseUrl}/teacher-courses/${teacherId}`).then((response) => {
            setcourseData(response.data);
          });
        } catch (e) {
          console.log(e);
        }
      }, []);

      console.log(courseData);
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <div>
                        <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>My Courses</h5>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Total Enrolled</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course,index)=>
                                <tr>
                                    <td><Link to={'/all-chapters/'+course.id}>{course.title}</Link></td>
                                    <td><img src={course.featured_img} width="80" className='rounded' alt='course title'/></td>
                                <td><Link to="#">Suraj kumar</Link></td>
                                <td className='ms-auto'>
                                <Link to={'/edit-course/'+course.id} className='btn btn-info btn-sm  '>Edit</Link>
                                   
                                    <Link to={'/add-chapters/'+course.id} className='btn btn-success btn-sm  ms-2'>Add Chapters</Link>
                                    <button className="btn btn-danger btn-sm ms-2">Delete</button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                            </table>
                    </div>
                </div>
    </div>
  
        </section>
    </div>
</div>

  )
}
