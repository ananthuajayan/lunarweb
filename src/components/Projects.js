import React from 'react';
import video from '../videos/Telugu Airlines.mp4';
import uae from '../videos/UAE ANIME.mp4';
import dubai from '../Clients/dubai.jpg';
import brouchure from '../Clients/brouchure.jpg';
const Project = () => {
  return (
    <>
       
       <div className='website-image'>
      <img style={{objectFit:'cover'}} src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='title'>
        <h1>A Showcase of Excellence and Innovation</h1>
        <h5>
Welcome to the heart of our success story
</h5>
      </div>
   </div>
        <div className="container">
        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <p>
          <b className='requirements'>Telugu Airlines: </b>
         <p>
         Telugu Airlines is a leading name in the aviation industry, synonymous with excellence and a commitment to passenger satisfaction. Renowned for its modern fleet and impeccable service, Telugu Airlines ensures a seamless and enjoyable travel experience for its passengers. The airline prioritizes punctuality and safety while providing a range of inflight amenities, including entertainment options and delectable cuisine. Telugu Airlines is dedicated to creating a pleasant and memorable journey for its passengers, making it a preferred choice in the competitive aviation landscape.
         </p>
         <p>
         Telugu Airlines has carved a niche for itself in the aviation industry, synonymous with excellence and a commitment to passenger satisfaction. Renowned for its modern fleet and impeccable service, Telugu Airlines ensures a seamless and enjoyable travel experience for its passengers. The airline prides itself on its modern fleet, punctuality, and top-notch customer service. The airline prioritizes punctuality and safety while providing a range of inflight amenities, including entertainment options and delectable cuisine. Beyond connecting destinations, Telugu Airlines is dedicated to providing a travel experience that transcends boundaries, emphasizing comfort, and convenience for all its passengers. By combining cutting-edge technology with a personalized touch, Telugu Airlines stands as a symbol of excellence, offering passengers not just a means of transportation but an elevated journey marked by comfort, convenience, and a celebration of diverse cultural influences.
         </p>
     </p>
     <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
          muted
        >
          <source src={uae} type="video/mp4" />
        </video>

        <p style={{marginBottom:"100px"}}>
          <b className='requirements'>UAE National Day: </b>
         <p>
         The United Arab Emirates (UAE) has emerged as a beacon of opportunity for countless Indians, offering a dynamic and thriving environment for professional and personal growth. Over the years, the UAE has actively opened its doors to Indian expatriates, creating a vibrant and diverse community that contributes significantly to the country's economic and cultural landscape. The UAE's strategic location, robust economy, and visionary leadership have resulted in a plethora of opportunities across various sectors, including information technology, healthcare, finance, and hospitality. The nation's commitment to fostering innovation and entrepreneurship has further fueled the aspirations of many Indians seeking to make a mark on the global stage. The UAE's welcoming policies, coupled with a cosmopolitan lifestyle, provide a conducive atmosphere for Indians to build successful careers, establish businesses, and enrich their lives in a multicultural setting. This symbiotic relationship between India and the UAE continues to create a pathway for shared prosperity and mutual growth.         </p>
         
     </p>

     <div className='project-image' id='pi'>
        <div className='poster'>
          <img src={dubai} alt="" />
        </div>
        <div className='description'>
        Silicon Institute, stands as a distinguished institution dedicated to the mastery of robotics. Nestled at the intersection of innovation and education, Silicon Institute serves as a dynamic hub where aspiring minds are sculpted into adept robotics enthusiasts and professionals. Silicon Institute nurtures a culture of collaboration, fostering an environment where students engage in team projects, hackathons, and competitions to push the boundaries of innovation. Silicon Institute stands as a testament to the fusion of education and innovation, where the seeds of curiosity planted today blossom into the robotics pioneers of tomorrow.
        </div>
     </div>
     <div className='project-image' id='ip'>
    
        <div className='description'>
        Americar Luxury Rentals, where opulence meets the open road, is a collection of the most prestigious and high-performance vehicles, meticulously maintained to ensure every journey is a seamless blend of luxury and exhilaration. Embark on a voyage of style and comfort, knowing that each vehicle in our lineup is equipped with the latest in automotive technology and safety features. Whether for a special occasion, a business trip, or simply to indulge in the joy of driving, Americar Luxury Rentals is the passport to sophistication on the road.
        </div>
        <div className='poster'>
          <img src={brouchure} alt="" />
        </div>
     </div>
        </div>
      
       
      </>
  );
};

export default Project;
