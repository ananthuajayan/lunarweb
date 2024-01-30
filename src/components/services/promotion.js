import React from 'react';
import { Link } from 'react-router-dom';
import strategy from '../webimages/strategic planning.jpg';
import Digital from '../webimages/marketing campaigns.jpg';
import influencer from '../webimages/influencer partnership.jpg';
import eventPromo from '../webimages/event promo.png';
import contentcreation from '../webimages/content creating.jpeg';
import publicr from '../webimages/public relations.webp';
import brandAwarness  from '../webimages/brand awarness.jpg'

const serviceData = [
  {
    imageUrl: strategy,
    title: 'Strategic Branding',
    description:'Establish a unique and memorable brand identity that resonates with your audience. Our strategic branding services go beyond logos; we craft a cohesive brand narrative that sets you apart in the minds of your customers.'
  },
  {
    imageUrl: Digital,
    title: 'Digital Marketing Campaigns',
    description:'Leverage the power of digital channels to amplify your brand message. Our expertly crafted digital marketing campaigns encompass social media, content marketing, and email campaigns, ensuring your brand reaches a wide and engaged audience.    '

  },
  {
    imageUrl: influencer,
    title: 'Influencer Partnerships',
    description:'Connect with your audience authentically through strategic influencer partnerships. We identify influencers aligned with your brand values to promote your products/services, fostering credibility and trust among their followers.'

  },
  {
    imageUrl: eventPromo,
    title: 'Event Promotion',
    description:'Whether virtual or physical, events are an excellent platform for brand exposure. Our event promotion services ensure your brand gets the attention it deserves, creating buzz and engagement before, during, and after the event.'
  },
  {
    imageUrl: contentcreation,
    title: 'Content Creation',
    description:'Compelling content is the cornerstone of effective brand promotion. From blog posts and articles to videos and infographics, we create engaging content that tells your brand story and resonates with your target audience.'
  },
  {
    imageUrl: publicr,
    title: 'Public Relations (PR)',
    description:'Enhance your brands reputation and visibility through strategic PR campaigns. We secure media coverage, manage press releases, and foster positive relationships with key influencers to elevate your brands standing in the industry.'

  },
  {
    imageUrl: brandAwarness,
    title: 'Brand Awareness Analytics',
    description:'Gain insights into the effectiveness of your brand awareness efforts through advanced analytics. We track key metrics, measure campaign performance, and provide actionable insights for continuous improvement.'

  },
];
const promotion = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://5.imimg.com/data5/CV/LL/MY-42225133/brand-promotion.jpg" alt="" />
      <div className='title'>
        <h1>Brand Promotion</h1>
        <h5> Welcome to [Your Brand Catalyst], Igniting Impactful Brand Awareness and Promotion!</h5>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>
    <div className="container">
        <p>
        Brand promotion is a multi-faceted marketing strategy that aims to increase a brand’s visibility, brand awareness, and brand desirability. It has several benefits for businesses: First, brand promotion increases brand awareness. It ensures that the brand is always in the minds of the target audience. Businesses can differentiate themselves from competitors by creating a compelling story and using various marketing channels. Second, brand promotion boosts brand recognition. It builds trust and familiarity with consumers. Third, strategic brand promotion drives customer engagement. It encourages customers to interact with the brand and provide feedback. Fourth, well-promoted brands become synonymous with trustworthiness and quality. Fifth, effective brand promotion boosts positive word of mouth. Satisfied customers act as brand advocates. This organic endorsement can significantly increase the reach and influence of the brand. Finally, brand promotion is the foundation of successful marketing. It creates a unique and positive brand image, resonates with consumers, and sets the tone for long-term business growth.        </p>
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

export default promotion;
