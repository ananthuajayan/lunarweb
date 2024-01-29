import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    imageUrl: 'https://i.pinimg.com/564x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg',
    title: 'Custom Web Development',
    description: 'Leverage our expertise to create bespoke websites that cater to your unique business requirements. Whether you need a corporate website, e-commerce platform, or a dynamic web application, we have the skills to bring your vision to life.',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/58/5c/72/585c7270f50789aabb801a7a1e99f24e.jpg',
    title: 'Responsive Design',
    description: 'In a world where users access websites from various devices, its crucial to have a responsive design. We ensure that your website looks and functions seamlessly across desktops, tablets, and smartphones.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/50/21/89/5021893067da2d3a435df5bb036c7c7d.jpg',
    title: 'E-Commerce Solutions',
    description: 'Boost your online sales with our tailored e-commerce solutions. From user-friendly interfaces to secure payment gateways, we provide a comprehensive package to turn your website into a powerful sales tool.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/3c/d8/e3/3cd8e3cc7401c37fd45a6cccb5a4162b.jpg',
    title: 'Content Management Systems (CMS)',
    description: 'Take control of your websites content with an easy-to-use CMS. We specialize in developing and customizing CMS platforms, empowering you to update and manage your website effortlessly.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/fc/aa/27/fcaa2762f73ca37f7add9bb0047d63aa.jpg',
    title: 'Web Maintenance and Support',
    description: 'Our commitment doesnt end with the launch. We offer ongoing maintenance and support services to ensure your website stays up-to-date, secure, and performs at its best.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/7c/20/32/7c2032dc2f15759fe60e6b30cc29bf57.jpg',
    title: 'SEO Integration',
    description: 'Improve your websites visibility and attract more organic traffic with our SEO integration services. We optimize your site to rank higher on search engines, increasing its chances of being discovered by potential customers.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/e6/58/57/e658578506660421f47c55194c0932c1.jpg',
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
<div className="container">
        <p><b>
        We prioritize your needs and goals, ensuring our solutions align with your business objectives and user expectations.
Stay ahead in the digital landscape with our focus on the latest technologies and trends. We implement cutting-edge tools to provide you with a competitive advantage.
</b>
        </p>
      </div>
    </>
  );
}

export default Website;
