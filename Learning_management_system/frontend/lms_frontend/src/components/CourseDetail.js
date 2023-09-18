import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function CourseDetail() {
    let {course_id}=useParams();
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
            <img src="/logo512.png" className="img-thumbnail" alt="..."/>
            </div>
            <div className='col-8'>
                <h3>Course Title</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           <p className='fw-bold'>Course By:<Link to="/teacher-details/1">Teacher details</Link></p>
           <p className='fw-bold'>Duration:<a href="#">3 hour 30 Minutes</a></p>
           <p className='fw-bold'>Total Enrolled: 456 Students</p>
           <p className='fw-bold'>Rating:<a href="#">4/5</a></p>


            </div>
        </div>
        <div className='card'>
        <div className="card">
  <div className="card-header">
    <h3>Course Videos</h3>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Introduction 
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
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
      </div>
    
    </div>
  </div>
</div>


    </li>
    <li className="list-group-item">Introduction 
            <span className='float-end'>
                    <span className='me-4'>1 hour 30 Minutes</span>
                    <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
            </span>
    </li>
    <li className="list-group-item">Introduction 
            <span className='float-end'>
                    <span className='me-4'>1 hour 30 Minutes</span>
                    <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
            </span>
    </li>
  </ul>
</div>
        </div>
        <h3 className='pb-1 mb-4 mt-4'>Related Courses<a className='float-end'>See All</a></h3>
    <div className="row mb-4">
        <div className="col-md-3">
            <div className="card" >
            <Link to="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
          <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="/logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="/logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="/logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
