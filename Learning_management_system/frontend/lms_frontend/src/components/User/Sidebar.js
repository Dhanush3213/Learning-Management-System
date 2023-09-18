import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='card'>
    <div className='list-group list-group-flush'>
        <Link to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
    </div>
    <div className='list-group'>
        <Link to='/my-courses' className='list-group-item list-group-item-action'>My courses</Link>
    </div>
    <div className='list-group'>
        <Link to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite courses</Link>
    </div>
    <div className='list-group'>
        <Link to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended courses</Link>
    </div>
    <div className='list-group'>
        <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
    </div>
    <div className='list-group'>
        <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
    </div>
    <div className='list-group'>
        <Link to='/logout' className='list-group-item list-group-item-action text-danger'>Logout</Link>
    </div>
    </div>
  )
}
