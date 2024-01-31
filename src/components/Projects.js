import React from 'react';
import video from '../videos/Telugu Airlines.mp4';
import uae from '../videos/UAE ANIME.mp4';
import dragon from './webimages/dragon.avif'

const project =[
  {
    image:dragon,
    title:"AIMS Global",
    decription:"All you required in one place to launch a business in the United Arab Emirates.",

  },
  {
    image:dragon,
    title:"Coral Wealth",
    decription:"A progressive business committed to optimising shareholder value, strong risk management, and strategic planning.",

  },
  {
    image:dragon,
    title:"Bhakshanangal",
    decription:"Savor convenience at your fingertips – explore a world of culinary delights with our food e-commerce platform.    ",

  },
  {
    image:dragon,
    title:"Legend maritime",
    decription:"Obtain a variety of container options to suit your particular requirements.",

  },
  {
    image:dragon,
    title:"Silicon institute",
    decription:"Discover a spectrum of courses, explore exciting opportunities and join with us in the journey of learning and growth.    ",

  },
  {
    image:dragon,
    title:"Star link",
    decription:"discover quality containers and caravans for your next adventure with our company.",

  },
]

const Project = () => {
  return (
    <>

      <div className='website-image'>
        <img style={{ objectFit: 'cover' }} src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" alt="" />
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

        <p style={{ marginBottom: "100px" }}>
          <b className='requirements'>UAE National Day: </b>
          <p>
            The United Arab Emirates (UAE) has emerged as a beacon of opportunity for countless Indians, offering a dynamic and thriving environment for professional and personal growth. Over the years, the UAE has actively opened its doors to Indian expatriates, creating a vibrant and diverse community that contributes significantly to the country's economic and cultural landscape. The UAE's strategic location, robust economy, and visionary leadership have resulted in a plethora of opportunities across various sectors, including information technology, healthcare, finance, and hospitality. The nation's commitment to fostering innovation and entrepreneurship has further fueled the aspirations of many Indians seeking to make a mark on the global stage. The UAE's welcoming policies, coupled with a cosmopolitan lifestyle, provide a conducive atmosphere for Indians to build successful careers, establish businesses, and enrich their lives in a multicultural setting. This symbiotic relationship between India and the UAE continues to create a pathway for shared prosperity and mutual growth.         </p>

        </p>
        <div className="text-center" style={{marginBottom:"50px",color:"#363666"}}>
          <h1>Success Stories</h1>
        </div>
        <div className="our-works">
          {
            project.map((data,index)=>{
                      return <div class="card">
                      <div class="image-box">
                        <img src={dragon} alt="" />   
                      </div>
                      <div class="content">
                        <h2>{data.title}</h2>
                        <p>{data.decription}</p>
                      </div>
                    </div>
            })
          }
         
        </div>

      </div>


    </>
  );
};

export default Project;
