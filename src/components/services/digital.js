import React from 'react';
import { Link } from 'react-router-dom';
import stratrgic from '../webimages/strategic planning.jpg';
import SEO from '../webimages/SEO service.jpg';
import SMM from '../webimages/social media marketing.jpg';
import PPC from '../webimages/ppc.jpg';
import youtube from '../webimages/yt ads.jpg';
import google from '../webimages/google ads.jpg';
import content from '../webimages/content mar.jpg';
import email from '../webimages/email marketing.jpg';
import performance from '../webimages/performance analys.jpg';

const serviceData = [
  {
    imageUrl: stratrgic,
    title: 'Strategic Planning and Consultation',
    description:'Lay the foundation for success with our strategic planning and consultation services. We analyze your business goals, target audience, and industry landscape to tailor a digital marketing strategy that aligns with your objectives.'
  },
  {
    imageUrl: SEO,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your visibility on search engines with our SEO services. Our experts optimize your website to rank higher in search results, driving organic traffic and ensuring your business is easily discoverable by potential customers.',

  },
  {
    imageUrl: SMM,
    title: 'Social Media Marketing',
    description: 'Connect, engage, and build relationships with your audience through our social media marketing services. From content creation to campaign management, we leverage platforms like Facebook, Instagram, Twitter, and LinkedIn to amplify your brand presence.',

  },
  {
    imageUrl: PPC,
    title: 'Pay-Per-Click (PPC) Advertising:',
    description:'Drive targeted traffic to your website with our PPC advertising services. We create and manage campaigns on platforms like Google Ads, ensuring that your ads reach the right audience at the right time, maximizing your return on investment.'
  },
  {
    imageUrl: youtube,
    title: 'YouTube Ads',
    description:'Unleash the visual power of YouTube with our targeted YouTube Ads services. From captivating pre-roll ads to engaging TrueView campaigns, we create video content that tells your brand story and captures the attention of your desired audience.'
  },
  {
    imageUrl: google,
    title: 'Google Ads (Search and Display)',
    description:'Dominate the digital landscape with our Google Ads services. Whether its placing your brand at the top of search results or creating visually appealing display ads, we optimize campaigns to ensure maximum visibility and relevance to potential customers.'
  },
  {
    imageUrl: content,
    title: 'Content Marketing',
    description:'Captivate your audience with valuable and compelling content through our content marketing services. We create high-quality, relevant content that not only attracts and engages users but also establishes your brand as an authority in your industry.'
  },
  {
    imageUrl: email,
    title: 'Email Marketing',
    description:'Nurture leads and foster customer loyalty with our email marketing services. We design and implement effective email campaigns that deliver personalized content, promotions, and updates directly to your audiences inbox.'
  },
  {
    imageUrl: performance,
    title: 'Analytics and Performance Tracking',
    description:'Gain insights into your digital marketing efforts with our analytics and performance tracking services. We use data-driven approaches to measure the success of your campaigns, identify areas for improvement, and refine strategies for optimal results.'
     },
];
const Digital = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b324b-delhi-agencies.jpg?fit=1000%2C439&ssl=1" alt="" />
      <div className='title'>
        <h1>Digital Marketing</h1>
        <h5>We ensure the Visibility Meets Impact through Strategic Advertising!</h5>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>
    <div className="container">
        <p>
        A particular strategy for advertising and promoting products, services, and businesses is digital marketing. It incorporates social media marketing, content marketing, search engine optimization, and other online marketing operations. This comprehensive approach promotes brand identity and enhances the company's overall success by assisting the business in identifying and engaging with its intended customers. Digital marketing is a highly affordable platform that may draw targeted consumers towards a business. This medium refines marketing plans in order to produce better outcomes by using detailed analytics and reporting tools. It encourages the company to react promptly to a new market, trend, and feedback from consumers.        </p>
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

export default Digital;
