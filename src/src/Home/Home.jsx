import React from 'react';
import img1 from '../imgs/work-01.jpg'; 
import img2 from '../imgs/work-02.jpg'; 
import img3 from '../imgs/work-03.jpg'; 
import img4 from '../imgs/work-04.jpg'; 
import img5 from '../imgs/work-05.jpg'; 
import img6 from '../imgs/work-06.jpg'; 
import img7 from '../imgs/work-07.jpg'; 
import img8 from '../imgs/work-08.jpg'; 




export default function Home() {
  return (
    <>
     <div class="our-work text-center  pb-5">
        <div class="container">
          <div class="main-title  position-relative">
            <img class="mb-4" src="imgs/title.png" alt="" />
            <h2>We Make This</h2>
            <p class="text-white-50 text-uppercase">Prepare To Be Amazed</p>
          </div>
          <ul class="list-unstyled d-flex justify-content-center mt-5 mb-5">
            <li class="active rounded-pill">All</li>
            <li>Design</li>
            <li>Code</li>
            <li>Photo</li>
            <li>App</li>
          </ul>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Application">
                <img class="img-fluid" src={img1} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Web">
                <img class="img-fluid" src={img2} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Application">
                <img class="img-fluid" src={img3} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Code">
                <img class="img-fluid" src={img4} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Photo">
                <img class="img-fluid" src={img5} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Design">
                <img class="img-fluid" src={img6} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Application">
                <img class="img-fluid" src={img7} alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="box mb-3 bg-white" data-work="Desk Top">
                <img class="img-fluid" src={img8} alt="" />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <a class="btn rounded-pill main-btn text-uppercase text-white-50" href="#">I Want More</a>
          </div>
        </div>
      </div>
    </>
      
    
  )
}
