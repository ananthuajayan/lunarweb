import React from 'react';
import { Link } from 'react-router-dom';
import strategicPlanning from '../webimages/strategic planning.jpg';
import content from '../webimages/content creation social.jpg';
import platfrom from '../webimages/platefrom optimization.jpg';
import community from '../webimages/community eng.jpg';
import analytics from '../webimages/analythics and report.jpg';
import socialtrends from '../webimages/social media trending.avif';

const serviceData = [
  {
    imageUrl: strategicPlanning,
    title: 'Strategic Social Media Planning',
    description:'Develop a roadmap for success with our strategic social media planning. We analyze your brand, industry, and target audience to create a customized strategy that aligns with your business goals.'
  },
  {
    imageUrl: content,
    title: 'Content Creation and Curation',
    description:'Fuel your social media presence with compelling content. Our team of creative minds crafts engaging visuals, informative posts, and captivating captions that resonate with your audience and reflect your brand identity.'
  },
  {
    imageUrl: platfrom,
    title: 'Platform Optimization',
    description:'Maximize your impact on each social media platform. We optimize your profiles, ensuring consistency in branding, and implement strategies tailored to the unique features and audience of each platform.'

  },
  {
    imageUrl: community,
    title: 'Community Engagement',
    description:'Foster meaningful connections with your audience through active community engagement. We respond to comments, messages, and interactions, creating a positive and interactive online community around your brand.'

  },
  {
    imageUrl: analytics,
    title: 'Analytics and Reporting',
    description:'Stay informed about the performance of your social media efforts. Our detailed analytics and reporting provide insights into engagement, reach, and audience behavior, guiding future strategies for optimal results.'

  },
  {
    imageUrl: socialtrends,
    title: 'Social Media Trends and Insights',
    description:'Keep your brand ahead of the curve with our focus on social media trends and insights. We stay updated on platform changes and industry trends, ensuring your strategy remains fresh and effective.'

  },
  
];

const social = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://images.ctfassets.net/cpumif18y1gd/6MXgeXc7BrLvda2PpSoFEX/231cfe1b361d3f6d1e26e4be387f3b56/EMP223-Blog_Why_buy_an_all-in-one_solution_for_social_media_management_-_625x417___3.png" alt="" />
      <div className='title'>
        <h1>Social Media Management</h1>
        <h5>Welcome to Your Social Presence Hub, Where Your Brand Thrives in the Social Sphere!</h5>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>

    <div className="container">
        <p>
        Social media management is an effective strategy for improving a brand’s online presence. It offers many benefits in the digital world. One of the most important benefits is increased brand awareness. By having an active and engaged presence on platforms such as Facebook, Instagram, Twitter, etc., businesses can grow their reach and build relationships with a wider audience. Social media management also allows for targeted marketing. By customizing content and advertisements to target specific demographics, businesses can maximize the effectiveness of their campaigns. The two-way communication that takes place on social media platforms increases audience engagement, converts followers into loyal advocates, and provides real-time feedback to the brand. Continuous content distribution not only increases website traffic but also sets the brand as an authority within its industry. With the help of analytics tools, businesses can track performance metrics and make data-driven decisions that allow for continuous optimization. So, what does social media management really mean? In short, it’s a dynamic strategy that improves brand visibility, engagement, brand authority, and overall digital success.        </p>
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

export default social;
