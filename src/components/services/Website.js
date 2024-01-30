import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import customWebDevelopment from '../webimages/custom web dev.jpg';
import responsiveDesign from '../webimages/responsive design.jpg';
import ecommerce from '../webimages/ecommerce solutions.jpg';
import cms from '../webimages/cms.jpg';
import webmaintanance from '../webimages/web maintanace and sup.jpg';
import seo from '../webimages/SEO.jpg';
import scalableSolutions from '../webimages/scalable solutions.jpg';

const serviceData = [
  {
    imageUrl:customWebDevelopment ,
    title: 'Custom Web Development',
    description: 'Leverage our expertise to create bespoke websites that cater to your unique business requirements. Whether you need a corporate website, e-commerce platform, or a dynamic web application, we have the skills to bring your vision to life.',
  },
  {
    imageUrl: responsiveDesign,
    title: 'Responsive Design',
    description: 'In a world where users access websites from various devices, its crucial to have a responsive design. We ensure that your website looks and functions seamlessly across desktops, tablets, and smartphones.',

  },
  {
    imageUrl: ecommerce,
    title: 'E-Commerce Solutions',
    description: 'Boost your online sales with our tailored e-commerce solutions. From user-friendly interfaces to secure payment gateways, we provide a comprehensive package to turn your website into a powerful sales tool.',

  },
  {
    imageUrl: cms,
    title: 'Content Management Systems (CMS)',
    description: 'Take control of your websites content with an easy-to-use CMS. We specialize in developing and customizing CMS platforms, empowering you to update and manage your website effortlessly.',

  },
  {
    imageUrl: webmaintanance,
    title: 'Web Maintenance and Support',
    description: 'Our commitment doesnt end with the launch. We offer ongoing maintenance and support services to ensure your website stays up-to-date, secure, and performs at its best.',

  },
  {
    imageUrl: seo,
    title: 'SEO Integration',
    description: 'Improve your websites visibility and attract more organic traffic with our SEO integration services. We optimize your site to rank higher on search engines, increasing its chances of being discovered by potential customers.',

  },
  {
    imageUrl: scalableSolutions,
    title: 'Scalable Solutions',
    description: 'Future-proof your website with scalable solutions that can grow alongside your business. Whether you are expanding your product line or entering new markets, our web development ensures your site can scale seamlessly.',

  },
];

const Website = () => {
  return (
    <>
      <div className='website-image'>
        <img src="https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg" alt="" />
        <div className='title'>
          <h1>Website Development</h1>
          <h5>Your one-stop destination for cutting-edge web development service</h5>
        </div>
        <Link to='/contact'>
          <button type="button" className="btn btn-danger">Contact us</button>
        </Link>
      </div>
      <div className="container">
        <p>
          Web design and web development are the two major skill sets that make your website more effective. Both multimedia and visual elements used to design a web should generate a pleasing and user-friendly interface. Our web development specialists integrate the front-end and back-end codes to bring life to design by delivering efficient user experiences. For building a visually stunning website, the collaborative efforts of web designers and web developers are crucial. And it helps meet business objectives and user needs. A well-crafted website will attract users and increase traffic. The professionalism of website designs will generate trust, credibility, and a positive brand image among visitors. The web design should ensure mobile responsiveness for users. And its strategic design elements will improve conversion rates.
        </p>
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

export default Website;
