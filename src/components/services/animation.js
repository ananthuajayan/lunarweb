import React from 'react';
import { Link } from 'react-router-dom';
import custom from '../webimages/custom graphics.jpg';
import architectural from '../webimages/Architectural Visualization.jpg';
import product from '../webimages/product visual.jpg';
import character from '../webimages/character animation.jpg'

const serviceData = [
  {
    imageUrl: custom,
    title: 'Custom 3D Animation',
    description:'Immerse your audience in a visual journey with our custom 3D animations. From dynamic product presentations to engaging storytelling, we bring ideas to life with fluid motion and breathtaking visuals.'
  },
  {
    imageUrl: architectural,
    title: 'Architectural Visualization',
    description:'Envision the future with our architectural visualization services. We create realistic 3D models and animations, allowing you to showcase architectural designs and concepts in a compelling and immersive way.'

  },
  {
    imageUrl: product,
    title: 'Product Visualization',
    description:'Elevate your product marketing with our product visualization services. We craft detailed and realistic 3D models, bringing your products to life in a way that static images cannot match.'    
  },
  {
    imageUrl: character,
    title: 'Character Animation',
    description: 'Infuse personality into your projects with our character animation services. Whether for marketing campaigns, educational content, or entertainment, our skilled animators breathe life into characters that resonate with your audience.',
    
  },
 
];
const Animation = () => {
    return (
        <>
        <div className='website-image'>
          <img src="https://incredimate.files.wordpress.com/2021/11/3d-animation-services-01.jpg?w=1281" alt="" />
          <div className='title'>
            <h1>3D Animation & Modeling</h1>
            <h5> Here, Imagination Comes to Life in the Digital Realm! </h5>
          </div>
    <Link to='/contact'>
      <button type="button" class="btn btn-danger">Contact us</button>
    </Link>
        </div>
        <div className="container">
        <p>
        Web design and web development are the two major skill sets that make your website more effective. Both multimedia and visual elements used to design a web should generate a pleasing and user-friendly interface. Our web development specialists integrate the front-end and back-end codes to bring life to design by delivering efficient user experiences. For building a visually stunning website, the collaborative efforts of web designers and web developers are crucial. And it helps meet business objectives and user needs. A well-crafted website will attract users and increase traffic. The professionalism of website designs will generate trust, credibility, and a positive brand image among visitors. The web design should ensure mobile responsiveness for users. And its strategic design elements will improve conversion rates.        </p>
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
    )
}

export default Animation
