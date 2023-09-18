import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function TeacherMyCourses() {
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
                                    <th>Created By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>PHp development</td>
                               <td><Link to="#">Suraj kumar</Link></td>
                               <td><button className="btn btn-danger btn-sm active">Delete</button></td>
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
