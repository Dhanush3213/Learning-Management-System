import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
export default function MyUsers() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <h3 className='pb-1 mb-4 mt-4'>Recommended Courses<a className='float-end'>See All</a></h3>
    <div className="row mb-4">
        <div className="col-md-3">
            <div className="card" >
            <Link to="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
          <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
              
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
        </section>
    </div>
</div>

  )
}
