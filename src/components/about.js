import React from 'react';
import backimage from '../pillers/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg';
import annie from '../pillers/astonished-impressed-fascinated-young-woman-checking-out-cool-promo-opportunity-lifetime-open-mouth-sm.jpg'
import product from '../pillers/produ.png';
import customer from '../pillers/customer-removebg-preview.png'


const Careers = (props) => {
    return (
      <>
       <div className='website-image'>
      <img style={{objectFit:'cover'}} src={backimage} alt="" />
      <div className='title'>
        <h1>About Us</h1>
      </div>

    </div>
    <div className="container about-us">
  
      <div className='about-us-image'>
        <img src={annie} alt="" />
      </div>
      <div className='about-us-message'>
        <h1><b>Why choose us?</b> </h1>
        
        <p>
        We are the best and most result-oriented digital marketing agency. that offers end-to-end solutions encompassing SEO, PPC, social media management, graphic design,Google Ads, web design and development, 3D modelling and nimation, branding,  etc. We maximise your conversations with our ROI-focused digital marketing services. Dive into the world of effective SEO and content marketing with our experienced team. We create compelling content and optimise your online presence to enhance visibility, engagement, and organic traffic. Your satisfaction is at the core of what we do. We prioritise understanding your business, your challenges, and your aspirations. Your success is our success, and we are committed to going the extra mile to exceed your expectations. Your success metrics are our benchmarks for excellence. Our experts are professionals who stay ahead of industry trends, ensuring your strategies are not just current but cutting-edge.        </p>
      </div>
    </div>

    <div className='service-row'>
      <div className="zero" >
          <div className="services" style={{marginLeft:'-50px'}}>
            <div className='service-image'>
               <img src="https://www.freeiconspng.com/uploads/developer-services-icon-21.png" alt="" />
            </div>
            <div>
                <h2>10+</h2>
                <h6>Services</h6>
            </div>
          </div>
          <div className="services">
            <div className='service-image'>
              <img src="https://th.bing.com/th/id/R.57656d964f053034714e5635da30d0a3?rik=PkUwDOcaDxjaKw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fcalendar-clock-icon.png&ehk=waOVaU282uzyQsZ40Z0e51HDFNffHmbM7avZfPZhYTs%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
          <div>
                <h2>50+</h2>
                <h6>Daily Customers</h6>
          </div>
          </div>
          <div className="services">
            <div className='service-image'>
              <img src={product} alt="" />
            </div>
            <div>
                <h2>10+</h2>
                <h6>Quality Products</h6>
            </div>
          </div>
          <div className="services">
            <div className='service-image'>
              <img src={customer} alt="" />
            </div>
            <div>
                <h2>1000+</h2>
                <h6>Happy Customers</h6>
            </div>
          </div>
      </div>
    </div>

    <div className="container about-us" style={{marginTop:'135px'}}>
    <div className='about-us-message'>
    <h1><b>How can we help you?</b> </h1>
    
    <p>
    Lunar enterprise is a leading web development and digital marketing firm. If you are
 ready to transform your online presence we are here to assist you. Whether you have
 questions about our services, need a quote, or want to discuss your ideas, our team is
 here to help. Feel free to reach out. All you have to do is drop us an email at
 info@lunarenp.com, or give us a call on the number provided on our
 website. We strive to respond promptly during our working hours, and if you prefer
 in-person discussions, you're welcome to visit our office. Connect with us on social
 media for the latest updates, and let's start the conversation to achieve your digital
 goals together!
 </p>
   </div>
  <div className='about-us-image'>
    <img src={backimage} alt="" />
  </div>
 
</div>
   


      </>
     
    )
}

export default Careers
