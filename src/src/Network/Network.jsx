import React from 'react'
import img1 from '../imgs/team-1.png';

export default function About() {
  return (
    <div>
      <section>
      <div class=" text-center">
            <div class="textt">
                <h1>Network</h1>
                <p>Learn More About Me</p>
            </div>
        </div>

        <div className='row mt-5'>

        <div className=' col-xl-6 '>
        <img className='img-about'   src={img1} alt="" />
        </div>
        <div className='col-xl-6'>
          <h1>
          What is the Network?
          </h1>
          <p>
            We have been operating for over 30 years and are Members of The  Federation of Master
            Builders. We work on projects big and small from  small residential extensions to full
            house
            and commercial builds and  we are registered NHBC house builders.
          </p>
          <p>
                            I am text block. Click edit button to change this text. Lorem ipsum dolor sit  amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper  mattis, pulvinar
                            dapibus
                            leo
                        </p>
        </div>
        </div>

   
    </section>

      <section></section>
    </div>
  )
}



