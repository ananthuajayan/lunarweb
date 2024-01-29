import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Message from './message';
import web from '../images/web development.jpg';
import about from '../images/pngtree-about-us-service-online-render-photo-image_5085.jpg'
import digital from '../images/digital marketing.png';
import graphic from '../images/designs.png';
import mobile from '../images/android.png';
import social from '../images/social media management.png';
import brand from '../images/brand promotions.png';
import software from '../images/Software-Development.jpg';
import animation from '../images/3d.png';
import aims from '../Clients/aims logo.jpg';
import bhakshanagal from '../Clients/Bhakshanagal.png';
import bride from '../Clients/Bride of christ.png';
import lmc from '../Clients/LMC Logo (1).png';
import silicon from '../Clients/Silicon-Institute-Logo-2-1.png';
import start from '../Clients/STAR LINK PNG.png';
import { Link } from 'react-router-dom';
import Whatsapp from './whatapp';
import ananthu from '../images/ananthu.png';
import kavya from '../pillers/kavya.jpg';
import ameer from '../pillers/ameer.jpg';
import bremin from '../devps/brimin.jpg';
import divya from '../images/divya.png';
import renjitha from '../images/renjitha.jpg';




const Home = () => {


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of cards to show
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const slidertest = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards to show
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const testimonials = [
   {
    image : ananthu,
    title: "Excellent Career Growth",
    content:"My internship at Lunar enterprise was not just a stepping stone, it became the transformative space for my professional journey. As an intern I was given opportunities to deal with live projects, which helped me boost my skills in a short period. Currently I am working as an SEO executive at Lunar.",
    name:"Ananthu v Jayan",
    Designation:"SEO Executive"
   } ,
   {
    image : kavya,
    title: "Amazing Mentors",
    content:"I joined Lunar as an intern. While doing internship I was given the opportunity to deal with 50+ international clients per month. This developed my skills and now I am a social media executive at Lunar. Wishing Lunar, for prosperity and growth. I thank Lunar Enterprises for the oppurtunity",
    name:"Kavya",
    Designation:"Social Media Executive"
   } ,
   {
    image : ameer,
    title: "Good Education",
    content:"I joined Lunar to get trained at 3D animation and graphic designing. I got trained as a professional, and choosing Lunar was the best choice I ever made. They also kept their trust in me and currently I am doing my internship here.",
    name:"Mohammed Ameer",
    Designation:"Graphic Designer"
   } ,
   {
    image : bremin,
    title: "Supportive Team",
    content:"I started my journey in Lunar as a marketing associate. Soon I discovered my interest in web development. After sharing my interest with Lunar, they didn't hesitate to give me a chance. I was trained in web development with the expert assistance of the web developers of Lunar and now I am working as a web developer at Lunar.",
    name:"Bremin",
    Designation:"Fromt End Developer"
   } ,
   {
    image : divya,
    title: "Amazing Working Atmosphere",
    content:"I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.",
    name:"Divya",
    Designation:"Accountant"
  } ,
   {
    image : renjitha,
    title: "True pleasure",
    content:"I started my career journey as a software tester trainee at Lunar. The structured training program provided me with a solid foundation in quality assurance methodologies and testing practices. This experience made me get a highly paid job. Now I am working at UST global.",
    name:"Ranjitha",
    Designation:"Software Tester"
  } 
  ]
  const solution = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3501/3501047.png",
      title: "e-Commerce Platform"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/6470/6470993.png",
      title: "Mobile App Development"
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/012/486/349/original/3d-seo-marketing-concept-icon-or-3d-seo-search-engine-optimization-concept-icon-png.png",
      title: "SEO Marketing"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2560/2560105.png",
      title: "Software Development"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4697/4697470.png",
      title: "Animations"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2472/2472049.png",
      title: "Social Media Marketing"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4116/4116265.png",
      title: "Trainings"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2606/2606726.png",
      title: "Designs and Animation"
    },
  ]
  const logo = [
    {
      logo: aims
    },
    {
      logo: bhakshanagal
    },
    {
      logo: bride
    },
    {
      logo: lmc
    },
    {
      logo: silicon
    },
    {
      logo: start
    }

  ]



 

  return (
    <>
      <Message/>

    <div className="container about-us">
      <div className='about-us-image'>
        <img src={about} alt="" />
      </div>
      <div className='about-us-message'>
        <h2>About Us</h2>
        
        <p>
        Lunar Enterprises is a dynamic and innovative company specialising in a wide range of services that empower businesses in the digital landscape. With a talented team of experts, Lunar Enterprises offers comprehensive solutions for website development, design, animation, marketing, digital marketing, SEO, and brand promotion. Whether you need a visually stunning website, engaging multimedia content, or a strategic digital marketing campaign, our commitment to creativity, technology, and customer satisfaction makes us the ideal partner for businesses seeking to thrive in the ever-evolving digital world. What sets us apart is our unwavering commitment to creativity. Our team believes in pushing the boundaries to deliver solutions that not only meet but exceed your expectations, leaving a lasting impression on your audience. Our comprehensive solutions are designed to propel you towards success in the digital landscape. Join hands with us, and let's craft a digital narrative that enhances your online presence and propels you towards achieving your business goals.
        </p>
        <Link to='about-us'>
        <button>Learn More</button>
        </Link>
       
      </div>
    </div>
   
      <div className="container text-center">
        <h2>We are the best in below services</h2>
      </div>
      <div className="container-sm">
        <Link to='services/website'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={web} alt="" />
          </div>
            
            <h5>Web Development</h5>
            <p>
            Website design and development entails creating visually appealing and functional websites." Design focuses on aesthetics, whereas development focuses on coding and integrating features for the best user experience and functionality.
            </p>
          </div>
        </Link>
        <Link to='services/digital'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={digital} alt="" />
          </div>
            <h5>Digital Marketing</h5>
            <p>
            Digital marketing uses internet channels such as social media and SEO to promote items or services. Reaching and connecting with target audiences requires strategic planning, content creation, analytics, and interaction.            </p>
          </div>
        </Link>
        <Link to='services/graphic'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={graphic} alt="" />
          </div>
            <h5>Graphic Design</h5>
            <p>
            Graphic design is the process of visually communicating ideas." It entails generating captivating visuals using font, photography, and layout for successful communication across several media.
            </p>
          </div>
        </Link>
        <Link to='services/mobile'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={mobile} alt="" />
          </div>
            <h5>Mobile App Development</h5>
            <p>
            Mobile application development refers to the process of producing software apps for mobile devices. It comprises design, development, testing, and deployment to ensure a smooth and interesting user experience.
            </p>
          </div>
        </Link>
        <Link to='services/social'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={social} alt="" />
          </div>           
           <h5>Social Media Managing</h5>
            <p>
            Social media management entails developing, scheduling, and analyzing content for social sites. Its goal is to increase brand awareness, engage audiences, and improve online presence through strategic planning and efficient communication.
            </p>
          </div>
        </Link>
        <Link to='services/brand-promotion'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={brand} alt="" />
          </div>          
            <h5>Brand Promotions</h5>
            <p>
            Brand promotion is a strategic effort to increase brand visibility and recognition." Using multiple platforms, it entails developing captivating content, fostering brand loyalty, and engaging with the audience for impact.
            </p>
          </div>
        </Link>
        <Link to='services/software'>

          <div className="col op-service">
          <div className='op-image'>
          <img src={software} alt="" />
          </div>         
             <h5>Software Development</h5>
            <p>
            Software development refers to the methodical process of creating, coding, testing, and maintaining software applications. It entails developing solutions that address specific requirements for increased efficiency and functionality.
            </p>
          </div>
        </Link>

        <Link to='services/animation'>
          <div className="col op-service">
          <div className='op-image'>
          <img src={animation} alt="" />
          </div>          
            <h5>3D Design and Animation</h5>
            <p>
            3D modeling and animation is the process of creating and animating three-dimensional digital representations of things or characters. It brings virtual environments to life, improving visualization and storytelling across multiple sectors.
            </p>
          </div>
        </Link>
      </div>

      <div className="container text-center">
        <h2>Our Supports</h2>
      </div>
      <div className='full'>
        <div className="container-lg">
          {solution.map((data) => (
            <div className="col solution">
              <div className='support-image-container'>
                <img src={data.image} alt="" />
              </div>
              <h5>{data.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center">
        <h2>Our Clients</h2>
      </div>
      <div className="container con-slider">
        <Slider {...sliderSettings}>
          {
            logo.map((images) => {
              return <div className='slider-image'>
                <img src={images.logo} alt="Slide 1" />
              </div>
            })
          }
        </Slider>
      </div>

      
<div className='test-main-container'>
<div className="container con-slider"  >
  <div className="text-center p-3">
    <h2>What People Say</h2>
  </div>
        <Slider {...slidertest}>
          {
            testimonials.map((data)=>{
              
             return <div className='testimonial-card'>
                 <div className='testimonial-title'><h4><b>{data.title}</b></h4></div>
                 <div className='testimonial-content'>{data.content}</div>
                 <div className='testimonial-info'>
                  <div className='testimonial-info-image'>
                    <img src={data.image} alt="" />
                  </div>
                  <div className='info'>
                    <h6><b>{data.name}</b></h6>
                    <h6>{data.Designation}</h6>
                  </div>
                 </div>
             </div>
            })
          }
        </Slider>
      </div>
</div>
     

      <Whatsapp/>
    </>
  );
};

export default Home;
