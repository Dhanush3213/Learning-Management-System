import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl="http://127.0.0.1:8000/api";
export default function CourseChapters() {
    const [chapterData,setchapterData]=useState([]);
    const [totalResult,settotalResult]=useState(0);

    const {course_id}=useParams();
    useEffect(() => {
        try {
          axios.get(`${baseUrl}/course-chapters/${course_id}`).then((response) => {
            setchapterData(response.data);
            settotalResult(response.data.length);
       

          });
        } catch (e) {
          console.log(e);
        }
      }, []);
      const Swal = require('sweetalert2')
      const handleDeleteClick = () => {
        // Perform the delete action here
        // For example, make an API request to delete the item
      
        // Show the confirmation dialog
        Swal.fire({
          title: 'Confirm!',
          text: 'Are you sure you want to delete?',
          icon: 'info',
          confirmButtonText: 'Continue',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancel',
        });
      };
      
      console.log(chapterData)
  return (
    <div>
            <div className='row'>
        <aside className='col-md-3'>
           <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <div>
                        <div className='card'>
                    <div className='card-body'>
                    <h5 className='card-title'>All Chapters({totalResult})<Link className='btn btn-success float-end btn-sm' to={"/add-chapters/"+course_id}>Add Chapters</Link></h5>

                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Video</th>
                                    <th>Remarks</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapterData.map((chapter,index)=>
                                <tr>
                                    <td><Link to={'/edit-chapter/'+chapter.id} >{chapter.title}</Link></td>
                                    <td>
                                    <video controls width="250">
                                            <source src={chapter.video} type="video/webm" />

                                            <source src={chapter.video} type="video/mp4" />

                                            Download the
                                            <a href={chapter.video}>WEBM</a>
                                            or
                                            <a href={chapter.video}>MP4</a>
                                            video.
                                            </video>

                                    </td>
                                <td>{chapter.remarks}</td>
                                <td className='ms-auto'>
                                    <Link to={'/edit-chapter/'+chapter.id} className="btn btn-info btn-sm text-white "><i className="bi bi-pencil-square"/></Link>
                                    <button onClick={handleDeleteClick} className="btn btn-danger btn-sm ms-2"><i className="bi bi-trash-fill"></i></button>

                                    </td>
                                </tr>
                                )}
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
