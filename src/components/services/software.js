import React from 'react';
import { Link } from 'react-router-dom';

const software = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg" alt="" />
      <div className='title'>
        <h1>Software Development</h1>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>

    <div className="container">
      <p>
      Software design and development is like building a digital tool. First, we plan how it should work and look. This is the design phase. Then, developers write the code to make it function according to the plan. Testing is done to catch and fix any mistakes. It's a teamwork, with designers and developers working together. The process doesn't stop once the tool is made - we keep improving it based on feedback and changing needs. The goal is to create a reliable and user-friendly tool that helps people do what they need to do on their computers or devices.
      </p> <br />

      <h1 className='heading'>Our Process</h1>

<p>
Software development refers to the methodical process of creating, coding, testing, and maintaining software applications. It entails developing solutions that address specific requirements for increased efficiency and functionality.
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

export default software;
