import React from 'react';
import { Link } from 'react-router-dom';
 import branding from '../webimages/brandng and logo.jpg';
 import print from '../webimages/Print design.jpg';
 import web from '../webimages/web graphics.jpg';
 import Illustrations from '../webimages/Illustrations and Infographics.jpg';
 import ui from '../webimages/uiux.jpg';
 import custom from '../webimages/custom graphics.jpg';
 import packaging from '../webimages/packaging design.jpg';

const serviceData = [
  {
    imageUrl: branding,
    title: 'Branding and Logo Design',
    description: 'Make a memorable first impression with a distinctive brand identity. Our talented designers craft unique logos and branding materials that resonate with your audience and reflect the essence of your business.',
  },
  {
    imageUrl: print,
    title: 'Print Design',
    description: 'Elevate your offline presence with striking print materials. From business cards and brochures to posters and packaging, we design visually compelling print assets that communicate your message effectively.',
    
  },
  {
    imageUrl: web,
    title: 'Web Graphics',
    description: 'Enhance your online presence with stunning web graphics. Our design team creates eye-catching website elements, social media graphics, and banners that reinforce your brand and engage your audience.',
    
  },
  {
    imageUrl:Illustrations,
    title: 'Illustrations and Infographics',
    description: 'Add a touch of creativity to your content with custom illustrations and infographics. Our artists bring ideas to life, simplifying complex information and making it visually appealing for your audience.',
    
  },
  {
    imageUrl: ui,
    title: 'UI/UX Design',
    description: 'Ensure a seamless user experience with our UI/UX design services. We create intuitive interfaces that enhance user satisfaction, driving engagement and loyalty for your digital products.',
    
  },
  {
    imageUrl: custom,
    title: 'Custom Graphics for Event',
    description: 'Make your events unforgettable with custom graphics. From invitations and banners to event signage, we design visuals that capture the spirit of your occasion and leave a lasting impression on attendees.',
    
    
  },
  {
    imageUrl: packaging,
    title: 'Packaging Design',
    description: 'Stand out on the shelves with captivating packaging design. Our team combines aesthetic appeal with functional considerations to create packaging that not only looks great but also communicates the value of your product.',
    
  },
];

const Graphic = () => {
  return (
    <>
      <div className='website-image'>
        <img src="https://images.yourstory.com/cs/1/b3c9758f-ab5e-11e8-8691-f70342131e20/outsource-graphic-design-services1567603596098.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt="" />
        <div className='title'>
          <h1>Graphic Designing</h1>
          <h5> Welcome to Lunar Entreprises, Where Creativity Meets Innovation!</h5>
        </div>
        <Link to='/contact'>
          <button type="button" class="btn btn-danger">Contact us</button>
        </Link>
      </div>
      <div className="container">
        <p>
        Graphic design involves the creative process of conveying a message through visual elements such as pictures, typography, and layout. The benefits of graphic design range from diverse to impactful. First, graphic design strengthens brand identity and brand recognition. It allows businesses to communicate their message in a unified way across multiple channels. Second, graphic design improves communication by making complex information easier to digest and more engaging for the target audience. Third, visually appealing designs capture the attention of the target audience and make a lasting impression. Fourth, graphic design strengthens marketing efforts by attracting and retaining the attention of customers. Fifth, graphic design shapes perception, facilitates communication, and amplifies the impact of graphic content in print and online media. Sixth, graphic design has a significant impact on the user experience and user interface design. Graphic design influences how users interact on digital platforms.        </p>
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

export default Graphic;
