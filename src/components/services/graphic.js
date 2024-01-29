import React from 'react';
import { Link } from 'react-router-dom';

const Graphic = () => {
  return (
    <>
      <div className='website-image'>
        <img src="https://images.yourstory.com/cs/1/b3c9758f-ab5e-11e8-8691-f70342131e20/outsource-graphic-design-services1567603596098.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt="" />
        <div className='title'>
          <h1>Graphic Designing</h1>
        </div>
        <Link to='/contact'>
          <button type="button" class="btn btn-danger">Contact us</button>
        </Link>
      </div>

      <div className="container">
        <p>
        Graphic design involves the creative process of conveying a message through visual elements such as pictures, typography, and layout. The benefits of graphic design range from diverse to impactful. First, graphic design strengthens brand identity and brand recognition. It allows businesses to communicate their message in a unified way across multiple channels. Second, graphic design improves communication by making complex information easier to digest and more engaging for the target audience. Third, visually appealing designs capture the attention of the target audience and make a lasting impression. Fourth, graphic design strengthens marketing efforts by attracting and retaining the attention of customers. Fifth, graphic design shapes perception, facilitates communication, and amplifies the impact of graphic content in print and online media. Sixth, graphic design has a significant impact on the user experience and user interface design. Graphic design influences how users interact on digital platforms.        </p> <br />

        <h1 className='heading'>Our Process</h1>

        <p>
          Graphic design services entail a visual communication creative process that includes aspects such as font, images, color, and layout. The following are the typical steps of providing graphic design services:
        </p>

        <p>
          <b className='requirements'>Consultation with the client:</b>
          <p>Understand the client's objectives, target audience, and overall project vision.</p>
          <p>Discuss precise design specifications, such as scope, timelines, and money.</p>
        </p>

        <p>
          <b className='requirements'>Investigation and discovery:</b>
          <p>Conduct market research to learn about industry trends, competitors, and design guidelines.</p>
          <p>Learn about the client's brand, values, and messaging.</p>
        </p>

        <p>
          <b className='requirements'>Define your goals:</b>
          <p>Outline the goals and objectives of the graphic design project in detail.</p>
          <p>Create a design brief that includes project specifications, deliverables, and brand standards if applicable.</p>
        </p>

        <p>
          <b className='requirements'>Conceptualization:</b>
          <p>Based on the project requirements, brainstorm and draw first design possibilities.</p>
          <p>Investigate many creative directions and styles.</p>
        </p>

        <p>
          <b className='requirements'>Design Creation: </b>
          <p>Choose the most promising concepts and develop them into digital mockups or prototypes.</p>
          <p>Consider the layout, color palettes, typography, and graphics.</p>
        </p>




      </div>
    </>
  );
}

export default Graphic;
