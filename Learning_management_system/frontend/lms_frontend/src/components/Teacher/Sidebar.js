import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='card'>
    <div className='list-group list-group-flush'>
        <Link to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
    </div>
    <div className='list-group'>
        <Link to='/teacher-my-courses' className='list-group-item list-group-item-action'>My courses</Link>
    </div>
    <div className='list-group'>
        <Link to='/teacher-add-courses' className='list-group-item list-group-item-action'>Add Courses</Link>
    </div>
    <div className='list-group'>
        <Link to='/My-Users' className='list-group-item list-group-item-action'>My Users</Link>
    </div>
    <div className='list-group'>
        <Link to='/teacher-profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
    </div>
    <div className='list-group'>
        <Link to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
    </div>
    <div className='list-group'>
        <Link to='/teacher-logout' className='list-group-item list-group-item-action text-danger'>Logout</Link>
    </div>
    </div>
  )
}
