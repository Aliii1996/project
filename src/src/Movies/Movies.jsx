import React from 'react'
import img1 from '../imgs/team-1.png';
import img2 from '../imgs/team-2.png';
import img3 from '../imgs/team-3.png';
import img4 from '../imgs/team-4.png';



export default function Movies() {
  return (
    <div>
      <div class="team text-center pb-5 ">
        <div class="container pb-5 ">
          <h2 class="fw-bold">Meet The Movie</h2>
          <p class="text-white-50 mb-5">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
          </p>
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="box bg-white">
                <img class="img-fluid" src={img1} alt="" />
                <h4 class="p-3 text-light">Luke Skywalker</h4>
                <blockquote class="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we were dead.“
                </blockquote>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box bg-white">
                <img class="img-fluid" src={img2} alt="" />
                <h4 class="p-3 text-light">Luke Skywalker</h4>
                <blockquote class="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we were dead.“
                </blockquote>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box bg-white">
                <img class="img-fluid" src={img3} alt="" />
                <h4 class="p-3 text-light">Luke Skywalker</h4>
                <blockquote class="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we were dead.“
                </blockquote>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="box bg-white">
                <img class="img-fluid" src={img4} alt="" />
                <h4 class="p-3 text-light">Luke Skywalker</h4>
                <blockquote class="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we were dead.“
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
