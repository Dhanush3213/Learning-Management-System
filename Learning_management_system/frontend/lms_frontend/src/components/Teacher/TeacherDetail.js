import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';

const baseUrl="http://127.0.0.1:8000/api";

export default function TeacherDetail() {
const [courseData,setcourseData]=useState([]);
const [teacherData,setteacherData]=useState([]);
const [skillListData,setskillListData]=useState([]);


const {teacher_id}=useParams();
useEffect(() => {
        try {
          axios.get(`${baseUrl}/teacher/${teacher_id}`).then((response) => {
            console.log(response.data);
            setteacherData(response.data);
            setcourseData(response.data.teacher_courses);
            setskillListData(response.data.skill_list);

          });
        } catch (e) {
          console.log(e);
        }
      }, []);
  return (
    <div className='container mt-3'>
    <div className='row'>
        <div className='col-4'>
        <img src="/logo512.png" className="img-thumbnail" alt="..."/>
        </div>
        <div className='col-8'>
            <h3>{teacherData.full_name}</h3>
            <p> {teacherData.detail} </p>
       <p className='fw-bold'>Skills:    
        {skillListData.map((skill_list,index)=>
          <Link to={`/teacher-skill-courses/${skill_list.trim()}/${teacherData.id}`}> <span key={index} className=' badge bg-warning ms-2'>{skill_list}</span></Link>
           )}
           </p>
       <p className='fw-bold'>Recent course:<a href="#">Reactjs course</a></p>

       <p className='fw-bold'>Rating:<a href="#">4/5</a></p>


        </div>
    </div>
    <div className='card'>
    <div className="card">
<div className="card-header">
<h3>Course List</h3>
</div>
<ul className="list-group list-group-flush">
        {courseData.map((course,index)=>
<li className="list-group-item"><Link to={`/detail/${course.id}`}>  {course.title} 
        <span className='float-end'>
                <span className='me-4'>1 hour 30 Minutes</span>
                <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
        </span>
        </Link>
</li>
)}
</ul>
</div>
    </div>

</div>
  )
}
