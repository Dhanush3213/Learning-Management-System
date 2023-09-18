import React from 'react'
import Sidebar from './Sidebar'

export default function ProfileSetting() {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <div className='card'>
            <div className='card-header'>Profile</div>
            <div className='card-body'>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Profile Photo</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Interest</label>
                    <textarea className="form-control" id="exampleInputEmail" placeholder="Enter Your Interest"/>
                </div>
       
                <button type="submit" className="btn btn-primary mt-3">Update</button>
                </form>
            </div>
        </div>
  
        </section>
    </div>
</div>

  )
}
