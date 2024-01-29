import React from 'react';
import './service.css'
import { Link } from 'react-router-dom';

const Website = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg" alt="" />
      <div className='title'>
        <h1>Website Development</h1>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>

    <div className="container">
      <p>
      Web design and web development are the two major skill sets that make your website more effective. Both multimedia and visual elements used to design a web should generate a pleasing and user-friendly interface. Our web development specialists integrate the front-end and back-end codes to bring life to design by delivering efficient user experiences. For building a visually stunning website, the collaborative efforts of web designers and web developers are crucial. And it helps meet business objectives and user needs. A well-crafted website will attract users and increase traffic. The professionalism of website designs will generate trust, credibility, and a positive brand image among visitors. The web design should ensure mobile responsiveness for users. And its strategic design elements will improve conversion rates.
      </p> <br />

      <h1 className='heading'>Our Process</h1>

      <p>
      We start with understanding the requirements and the user who is going to use the system. With this data, we build the information architecture in which we figure out how to lay out the information on the website. Then we create wireframes and mockups of how the website or application would look and how the navigation would happen. Once the wireframes are finalized, we will provide aesthetically advanced designs to users and understand the real-time usage pattern and other data. Based on that, we make any modifications and roll out the final designs.
      </p>
      <p>
          <b className='requirements'>Analysis of Requirements:</b>
          <p>Recognize the client's company objectives, target audience, and special needs.</p>
          <p>Determine the essential features and functionalities that the app must provide.</p>
      </p>

      <p>
        
          <b className='requirements'>Planning:</b>
          <p>Create a detailed project plan that includes timeframes, milestones, and resource allocation.</p>
          <p>Create wireframes and prototypes to visualize the structure and flow of the app.</p>
      </p>

      <p>
        
        <b className='requirements'>Design:</b>
        <p>Create a user interface (UI) that is both intuitive and visually appealing.</p>
        <p>Through intelligent design choices, you may provide a seamless user experience (UX).</p>
        <p>Make graphics, icons, and other visual assets.</p>
    </p>
    

    <p>
        
        <b className='requirements'>Development: </b>
        <p>Based on the app's requirements, select the appropriate technology stack and development framework.</p>
        <p>Write and implement the source code while adhering to proper coding practices.</p>
        <p>Create front-end (client-side) as well as back-end (server-side) components.</p>
    </p>

    <p>
        
        <b className='requirements'>Testing: </b>
        <p>Perform comprehensive testing for functionality, usability, performance, and security.</p>
        <p>Identify and resolve bugs to ensure a seamless and error-free user experience.</p>
        <p>Examine the app on a variety of devices and screen sizes.</p>
    </p>
    </div>
    </>
  );
}

export default Website;
