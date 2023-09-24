import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import CourseDetail from './CourseDetail'
import Login from './User/Login'
import Register from './User/Register'
import Dashboard from './User/Dashboard'
import MyCourses from './User/MyCourses'
import FavoriteCourses from './User/FavoriteCourses'
import ChangePassword from './User/ChangePassword'
import ProfileSetting from './User/ProfileSetting'
import RecommendedCourses from './User/RecommendedCourses'
import TeacherLogin from './Teacher/TeacherLogin'
import TeacherRegister from './Teacher/TeacherRegister'
import TeacherDashboard from './Teacher/TeacherDashboard'
import TeacherMyCourses from './Teacher/TeacherMyCourses'
import TeacherProfileSetting from './Teacher/TeacherProfileSetting'
import TeacherAddCourses from './Teacher/TeacherAddCourses'
import EditCourse from './Teacher/EditCourse'

import TeacherChangePassword from './Teacher/TeacherChangePassword'

import AllChapters from './Teacher/CourseChapters'
import EditChapter from './Teacher/EditChapter' 

import MyUsers from './Teacher/MyUsers'
import TeacherDetail from './Teacher/TeacherDetail'
import AllCourses from './AllCourses'
import PopularCourses from './PopularCourses'
import TeacherCourses from './TeacherCourses'
import CategoryCourses from './CategoryCourses'
import TeacherLogout from './Teacher/TeacherLogout'
import AddChapters from './Teacher/AddChapers'
import TeacherSkillCourses from './TeacherSkillCourses'
export default function Main() {
  return (
    <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/detail/:course_id' element={<CourseDetail/>}/>
            <Route path="/user-login" element={<Login/>}/>
            <Route path="/user-register" element={<Register/>}/>
            <Route path="/user-dashboard" element={<Dashboard/>}/>
            <Route path="/my-courses" element={<MyCourses/>}/>
            <Route path="/profile-setting" element={<ProfileSetting/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/>
            <Route path="/favorite-courses" element={<FavoriteCourses/>}/>
            <Route path="/recommended-courses" element={<RecommendedCourses/>}/>
            <Route path="/teacher-login" element={<TeacherLogin/>}/>
            <Route path="/teacher-register" element={<TeacherRegister/>}/>
            <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
            <Route path="/teacher-my-courses" element={<TeacherMyCourses/>}/>
            <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>}/>
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>}/>
            <Route path="/teacher-add-courses" element={<TeacherAddCourses/>}/>
            <Route path="/edit-course/:course_id" element={<EditCourse/>}/>

            <Route path="/My-Users" element={<MyUsers/>}/>
            <Route path="/teacher-details/:teacher_id" element={<TeacherDetail/>}/>
            <Route path="/all-courses" element={<AllCourses/>}/>
            <Route path="/popular-courses" element={<PopularCourses/>}/>
            <Route path="/teacher-courses" element={<TeacherCourses/>}/>
            <Route path="/category/:category_slug" element={<CategoryCourses/>}/>
            <Route path="/teacher-logout" element={<TeacherLogout/>}/>
            <Route path="/add-chapters/:course_id" element={<AddChapters/>}/>

            <Route path="/all-chapters/:course_id" element={<AllChapters/>}/>
            <Route path="/edit-chapter/:chapter_id" element={<EditChapter/>}/>
            <Route path="/teacher-skill-courses/:skill_name/:teacher_id" element={<TeacherSkillCourses/>}/>






          </Routes>

<Footer/>
        </div>
  )
}
