import React from 'react'

import Sidebar from './Sidebar'

export default function ChangePassword() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <div className='row'>
            <div className='col-6 offset-3'>
            <div className='card'>
                <div className='card-header'>Change Password</div>
                <div className='card-body'>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Old Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                   
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">New Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Update</button>
                </form>
                </div>
            </div>
            </div>
        </div>
  
        </section>
    </div>
</div>

  )
}
