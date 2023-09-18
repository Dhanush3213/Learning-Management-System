import React from 'react'

export default function TeacherLogout() {
     localStorage.removeItem('teacherLoginStatus')
     window.location.href='/teacher-login';
    
  return (
    <div>TeacherLogout</div>
  )
}
