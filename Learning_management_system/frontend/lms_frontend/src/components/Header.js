import React from 'react'
import { Link } from 'react-router-dom'
 function Header() {

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">LEARN ALL</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Teachers</Link>
          </li>
    
        </ul>

        <div className="dropdown float-end">
                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      User
                    </button>
                    <ul className="dropdown-menu">
                      <li> <Link className="dropdown-item" to="/user-register">User Register</Link></li>
                      <li> <Link className="dropdown-item" to="/user-login">User Login</Link> </li>
                      <li> <Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                      <li> <Link className="dropdown-item" to="/user-login">Logout</Link></li>
                    </ul>
            </div>

          <div className="dropdown">
            <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Teacher
            </button>
            <ul className="dropdown-menu">
              { !teacherLoginStatus && <>
              <li><Link className="dropdown-item" to="/teacher-register">Teacher Register</Link></li>
              <li> <Link className="dropdown-item" to="/teacher-login">Teacher Login</Link></li>
              </>}
              <li><Link className="dropdown-item" to="/teacher-dashboard">Teacher Dashboard</Link></li>
              <li> <Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
            </ul>
      
          </div>
  

      </div> 

    </div>
   
  </nav>
  )
}
export default Header
