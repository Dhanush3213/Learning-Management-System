import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'



const baseUrl="http://127.0.0.1:8000/api/teacher-register/";
export default function TeacherRegister() {
    const [teacherData,setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
      'mobile_no':'',
      'skills':'',
     } )
const handleChange=(event)=>{
    setteacherData({
      ...teacherData,
        [event.target.name]:event.target.value
    })
}

const submitForm=()=>{
    const teacherFormData=new FormData();
    teacherFormData.append('full_name',teacherData.full_name);
    teacherFormData.append('email',teacherData.email);
    teacherFormData.append('password',teacherData.password);
    teacherFormData.append('qualification',teacherData.qualification);
    teacherFormData.append('mobile_no',teacherData.mobile_no);
    teacherFormData.append('skills',teacherData.skills);
  
    try{
        axios.post(baseUrl,teacherFormData).then((response)=>{
            setteacherData({
                'full_name':'',
                'email':'',
                'password':'',
                'qualification':'',
             'mobile_no':'',
             'skills':''
            });
            if(response.data.bool===true) {
                localStorage.setItem('teacherLoginStatus',true);
                window.location.href='/teacher-dashboard';
            }
        });
    }catch(error){
        console.log(error);
        setteacherData({'status':error});
    }
}
const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
 window.location.href='/teacher-dashboard';
}
    useEffect(() =>{
        document.title = 'Teacher Register';
    })
  return (
    <div className='container mt-4'>
    <div className='row'>
       <div className='col-6 offset-3'>
        <div className='card'>
            <div className='card-header'>Register</div>
            <div className='card-body'>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" name="full_name"  value={teacherData.full_name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" value={teacherData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control"  value={teacherData.password} onChange={handleChange} id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Qualification</label>
                    <input type="text" className="form-control" name="qualification" id="exampleInputEmail1" value={teacherData.qualification} onChange={handleChange}  aria-describedby="emailHelp" placeholder="Enter Qualification"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputNumber">Mobile Number</label>
                    <input type="number" className="form-control" name="mobile_no" id="exampleInputNumber" value={teacherData.mobile_no} onChange={handleChange}  aria-describedby="mobilehelp" placeholder="Enter Mobile Number"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Skills</label>
                    <input type="text" name="skills" className="form-control"value={teacherData.skills} onChange={handleChange}  id="exampleInputPassword1" placeholder="Text"/>
                </div>
  
                <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}
