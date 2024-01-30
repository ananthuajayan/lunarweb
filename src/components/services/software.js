import React from 'react';
import { Link } from 'react-router-dom';
import custom from '../webimages/custom software.jpg'
import webApp from '../webimages/web application dev.jpg';
import cloud from '../webimages/cloud solutions.jpg';
import database from '../webimages/database dev.jpg';
import integration from '../webimages/integration services.jpg';
import maintanance from '../webimages/maintanance and support.jpg'
const serviceData = [
  {
    imageUrl: custom,
    title: 'Custom Software Solutions',
    description:'Tailored to your specific needs, our custom software solutions are designed to address your unique business challenges. From enterprise applications to niche software, we build robust solutions that align seamlessly with your goals.'
  },
  {
    imageUrl: webApp,
    title: 'Web Application Development',
    description: 'Harness the power of the web with our expert web application development services. Whether its a corporate portal, a customer management system, or an e-commerce platform, we create dynamic and responsive web applications that elevate your online presence.'
    
  },
  {
    imageUrl: cloud,
    title: 'Cloud-Based Solutions',
    description:'Embrace the flexibility and scalability of the cloud with our cloud-based software development services. We design solutions that leverage cloud technologies, providing seamless access to your data and applications from anywhere in the world.'    
  },
  {
    imageUrl: database,
    title: 'Database Design and Management',
    description:'Ensure the integrity and efficiency of your data with our database design and management services. Our experts optimize database structures, ensuring quick and secure access to information critical for your business operations.'    
  },
  {
    imageUrl: integration,
    title: 'Integration Services',
    description:'Streamline your workflow and enhance productivity by integrating diverse systems and applications. Our integration services ensure that your software ecosystem operates harmoniously, eliminating data silos and improving overall efficiency. '    
  },
  {
    imageUrl: maintanance,
    title: 'Software Maintenance and Support:',
    description:'Our commitment extends beyond the development phase. We offer ongoing maintenance and support services to keep your software running smoothly, ensuring it evolves with your business needs.'    
  },
 
];

const software = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg" alt="" />
      <div className='title'>
        <h1>Software Development</h1>
        <h5>Empowering Your Business Through Custom Software Development!</h5>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>
    <div className="container">
        <p>
        Software design and development is like building a digital tool. First, we plan how it should work and look. This is the design phase. Then, developers write the code to make it function according to the plan. Testing is done to catch and fix any mistakes. It's a teamwork, with designers and developers working together. The process doesn't stop once the tool is made - we keep improving it based on feedback and changing needs. The goal is to create a reliable and user-friendly tool that helps people do what they need to do on their computers or devices.        </p>
      </div>
      <h1 className='heading text-center'>Our Services</h1>
      <div className="service-container">
  {serviceData.map((service, index) => (
    <div key={index} className={`service-boxes ${index % 2 === 0 ? 'even' : 'odd'}`}>
      <div className='service-images'>
        <img src={service.imageUrl} alt="" />
      </div>
      <div className='service-para'>
        <h3><b>{service.title}</b></h3>
        <p>{service.description}</p>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default software;
