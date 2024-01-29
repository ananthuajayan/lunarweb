import React from 'react';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    imageUrl: 'https://i.pinimg.com/564x/fe/7d/16/fe7d161e6f5a16aa6deea0c66d3b5e21.jpg',
    title: 'Branding and Logo Design',
    description: 'Make a memorable first impression with a distinctive brand identity. Our talented designers craft unique logos and branding materials that resonate with your audience and reflect the essence of your business.',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/2a/58/9e/2a589e9dff34fca4069b9611fe598279.jpg',
    title: 'Print Design',
    description: 'Elevate your offline presence with striking print materials. From business cards and brochures to posters and packaging, we design visually compelling print assets that communicate your message effectively.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/a7/6b/64/a76b6404c6296b32ed0a85dcf334d188.jpg',
    title: 'Web Graphics',
    description: 'Enhance your online presence with stunning web graphics. Our design team creates eye-catching website elements, social media graphics, and banners that reinforce your brand and engage your audience.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/4c/ec/83/4cec83099d1f1fb2e1bee002a08c26af.jpg',
    title: 'Illustrations and Infographics',
    description: 'Add a touch of creativity to your content with custom illustrations and infographics. Our artists bring ideas to life, simplifying complex information and making it visually appealing for your audience.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/35/a1/e2/35a1e25e38e6a84f770926816c689367.jpg',
    title: 'UI/UX Design',
    description: 'Ensure a seamless user experience with our UI/UX design services. We create intuitive interfaces that enhance user satisfaction, driving engagement and loyalty for your digital products.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/4f/be/bb/4fbebb83cb5a1f10397c9119aaa9b08c.jpg',
    title: 'Custom Graphics for Event',
    description: 'Make your events unforgettable with custom graphics. From invitations and banners to event signage, we design visuals that capture the spirit of your occasion and leave a lasting impression on attendees.',
    
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/f5/c7/f8/f5c7f84f42d28c670b28437930543d7d.jpg',
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
<div className="container">
        <p>
          <b>
          Ready to elevate your brand with exceptional graphic design? Contact Lunar Entreprises Design Studio today, and let's embark on a journey to create visuals that speak volumes and resonate with your audience.
          </b>
        </p>
      </div>
    </>
  );
}

export default Graphic;
