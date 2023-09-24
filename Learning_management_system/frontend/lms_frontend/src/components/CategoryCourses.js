import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import {useState,useEffect} from 'react';
import axios from 'axios';

const baseUrl="http://127.0.0.1:8000/api";
export default function CategoryCourses() {
    const [courseData,setcourseData]=useState([]);

    let {category_slug}=useParams();
    useEffect(() => {
        try {
          axios.get(`${baseUrl}/course/?category=${category_slug}`).then((response) => {
            setcourseData(response.data);
          });
        } catch (e) {
          console.log(e);
        }
      }, []);

  return (
    <div className='container mt-3'>
            <h3 className='pb-1 mb-4'>{category_slug}</h3>
    <div className="row mb-4">
    <div className="row mb-4">
        {courseData && courseData.map((course,index)=>
       
        <div className="col-md-3 mb-4">
            <div className="card" >
            <Link to={`/detail/${course.id}`}> <img src={course.featured_img} className="card-img-top" alt={course.title}/></Link>
                    <div className="card-body">
                    <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
                    
                    </div>
            </div>
        </div>
 )}
    </div>
     

    </div>
    
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
        
    </div>
  )
}
