import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
const siteURL="http://127.0.0.1:8000/";

const baseUrl="http://127.0.0.1:8000/api";
export default function CourseDetail() {
  const [courseData,setcourseData]=useState([]);
  const [chapterData,setchapterData]=useState([]);
  const [teacherData,setteacherData]=useState([]);
  const [relatedcourseData,setrelatedcourseData]=useState([]);
  const [techListData,settechListData]=useState([]);




    let {course_id}=useParams();
    useEffect(() => {
      try {
        axios.get(`${baseUrl}/course/${course_id}`).then((response) => {
          
          setcourseData(response.data);
          setchapterData(response.data.course_chapters);
          setteacherData(response.data.teacher);
          setrelatedcourseData(JSON.parse(response.data.related_videos));
          settechListData(response.data.tech_list);



        });
      } catch (e) {
        console.log(e);
      }
    }, []);
    console.log(techListData);
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
            <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title} />
            </div>
            <div className='col-8'>
                <h3>{courseData.title}</h3>
                <p>{courseData.description}</p>
           <p className='fw-bold'>Course By:<Link to={`/teacher-details/${teacherData.id}`}>{teacherData.full_name}</Link></p>
           <p className='fw-bold'>Technologies:
           {techListData.map((tech,index)=>
          <Link to={`/category/${tech.trim()}`}> <span key={index} className=' badge bg-warning ms-2'>{tech}</span></Link>
           )}
          </p>

           <p className='fw-bold'>Duration:<a href="#">3 hour 30 Minutes</a></p>
           <p className='fw-bold'>Total Enrolled: 456 Students</p>
           <p className='fw-bold'>Rating:<a href="#">4/5</a></p>


            </div>
        </div>
        <div className='card'>
        <div className="card">
  <div className="card-header">
    <h3>In this Course</h3>
  </div> 
  <ul className="list-group list-group-flush">
    {chapterData.map((chapter,index)=>
    <li className="list-group-item">{chapter.title} 
            <span className='float-end'>
                    <span className='me-4'>1 hour 30 Minutes</span>
                    <button className='btn btn-sm btn-danger float-end'data-bs-toggle="modal" data-bs-target="#videoModal"><i className="bi bi-play-fill"></i>Play</button>
            </span>


<div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="ratio ratio-16x9">
  <iframe src={chapter.video}  title={chapter.title}  allowfullscreen></iframe>
</div>
      </div>
    
    </div>
  </div>
</div>


    </li>
)}
  </ul>
</div>
        </div>
        <h3 className='pb-1 mb-4 mt-4'>Related Courses<a className='float-end'>See All</a></h3>
    <div className="row mb-4">
      {relatedcourseData.map((rcourse,index)=>  
        <div className="col-md-3">
            <div className="card" >
            <Link target="_blank"   to={`/detail/${rcourse.pk}`}> <img src={`${siteURL}media/${rcourse.fields.featured_img}`} className="card-img-top" alt={rcourse.fields.title}/></Link>
            <div className="card-body">
          <h5 className="card-title"><Link target="_blank" to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
 )}
    </div>
    </div>
  )
}
