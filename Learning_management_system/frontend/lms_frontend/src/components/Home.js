import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
 function Home() {
    useEffect(() => {
        document.title = 'LMS | Home Page';
    })
  return (
<div className='container mt-4'>
    <h3 className='pb-1 mb-4'>Latest Courses<Link to="/all-courses" className='float-end'>See All</Link></h3>
    <div className="row mb-4">
        <div className="col-md-3">
            <div className="card" >
            <Link to="/detail/1"> <img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
          <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
               <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                    <a href="#" ><h5 className="card-title">Card title</h5></a>
                    
                    </div>
                    <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <h3 className='pb-1 mb-4 mt-5'>Popular Courses<Link to="/popular-courses" className='float-end'>See All</Link></h3>
    <div className="row mb-4">
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Card title</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <h3 className='pb-1 mb-4 mt-5'>Featured Teachers<Link to="/teacher-courses" className='float-end'>See All</Link></h3>
    <div className="row mb-4">
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Teacher Name</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Teacher Name</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Teacher Name</h5></a>
              
            </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" >
            <a href="#" > <img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
            <a href="#" ><h5 className="card-title">Teacher Name</h5></a>
              
            </div>
            <div className='card-footer'>
                        <div className='title'>
                            <span> Rating: 4.5/5 </span>
                            <span className='float-end'>Views: 99999</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <h3 className='pb-1 mb-4 mt-5'>Student Testimonials</h3>
    <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5 px-2" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <figure className='text-center'>
            <blockquote className="blockquote text-center">
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
            <blockquote className="blockquote text-center">
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
            <blockquote className="blockquote text-center">
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </figure>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
         
        </a>
</div>
</div>
  )
}
export default Home
