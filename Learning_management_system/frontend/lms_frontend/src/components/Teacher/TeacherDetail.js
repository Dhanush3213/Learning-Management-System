import React from 'react'
import { Link } from 'react-router-dom';
export default function TeacherDetail() {
  return (
    <div className='container mt-3'>
    <div className='row'>
        <div className='col-4'>
        <img src="/logo512.png" className="img-thumbnail" alt="..."/>
        </div>
        <div className='col-8'>
            <h3>Teacher Name</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       <p className='fw-bold'>Skills:<Link to="/category/php">PHP</Link></p>
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
<li className="list-group-item"><Link to="/detail/1">   Course 1 
        <span className='float-end'>
                <span className='me-4'>1 hour 30 Minutes</span>
                <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
        </span>
        </Link>
</li>
<li className="list-group-item"><Link to="/detail/1">   Course 2 
        <span className='float-end'>
                <span className='me-4'>1 hour 30 Minutes</span>
                <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
        </span>
        </Link>
</li>
<li className="list-group-item"><Link to="/detail/1">   Course 3 
        <span className='float-end'>
                <span className='me-4'>1 hour 30 Minutes</span>
                <button className='btn btn-sm btn-danger float-end'><i className="bi bi-play-fill"></i>Play</button>
        </span>
        </Link>
</li>
</ul>
</div>
    </div>

</div>
  )
}
