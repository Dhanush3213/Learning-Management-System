import { useState } from 'react'
import axios from 'axios';


const baseUrl="http://127.0.0.1:8000/api";
export default function TeacherLogin() {
    const [TeacherLoginData,setTeacherLoginData]=useState(
        {
            email:"",
            password:""
        }
    );

    const handleChange = (event) => {
        setTeacherLoginData({
            ...TeacherLoginData,
            [event.target.name]: event.target.value,
        });
    }
    


    const submitForm=()=> {
        const TeacherFormData=new FormData();
        TeacherFormData.append('email',TeacherLoginData.email);
        TeacherFormData.append('password', TeacherLoginData.password);

       
        try{
            axios.post(`${baseUrl}/teacher-login/`,TeacherFormData).then((response)=>{
                if(response.data.bool===true) {
                    localStorage.setItem('teacherLoginStatus',true);
                    window.location.href='/teacher-dashboard';
                }
            });
        }catch(e){
           console.log(e) 
        }
        
    }
   const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
   if(teacherLoginStatus==='true'){
    window.location.href='/teacher-dashboard';
   }

  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-6 offset-3'>
            <div className='card'>
                <div className='card-header'>Login</div>
                <div className='card-body'>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" value={TeacherLoginData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name='password' value={TeacherLoginData.password}  onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <button type="submit" onClick={submitForm} className="btn btn-primary mt-3">Login</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
