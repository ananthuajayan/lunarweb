import React from 'react';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    imageUrl: 'https://i.pinimg.com/564x/27/a6/9d/27a69d927a0bdb30681253937e454277.jpg',
    title: 'Cross-Platform Development:',
    description:"Reach a wider audience efficiently with cross-platform mobile app development. Our skilled developers use frameworks like React Native and Flutter to ensure your app functions seamlessly on both Android and iOS devices, reducing development time and costs." 
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg',
    title: 'Native App Development',
    description: 'For a tailored user experience and optimal performance, our native app development services harness the full potential of each platform. Whether its an iOS app for iPhone users or an Android app for diverse devices, we have got you covered.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/cf/2f/7e/cf2f7ec0087c3aafe14ce0066d4fec66.jpg',
    title: 'User-Centric Design',
    description: 'We understand the importance of user experience. Our design team ensures that your mobile app not only looks visually appealing but also provides an intuitive and enjoyable experience for your users.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/10/1a/3b/101a3b63cbe22f20331ed259d36b328a.jpg',
    title: 'Scalable Solutions',
    description: 'Future-proof your mobile app with scalable solutions. We design and develop applications that can grow alongside your business, adapting to changing requirements and technologies.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/cf/e7/e1/cfe7e1dff810c2ca1b06d5131dfb790a.jpg',
    title: 'Security and Compliance',
    description: 'Your users data security is our priority. Our mobile app development adheres to the highest industry standards, ensuring robust security measures and compliance with relevant regulations.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/97/28/49/972849eae4da1ce7aa3a2103555e49f2.jpg',
    title: 'API Integration',
    description: 'Seamlessly connect your mobile app with third-party services and APIs. Whether its social media integration, payment gateways, or other external functionalities, we ensure smooth and secure interoperability.',
    
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/e5/3d/10/e53d10d24b9544196d28a5475f277365.jpg',
    title: 'Testing and Quality Assurance',
    description: 'Before your app reaches the hands of users, it undergoes rigorous testing. Our quality assurance team meticulously evaluates every aspect, ensuring a bug-free and reliable mobile application.',
    
  },
];

const Mobile = () => {
  return (
    <>
    <div className='website-image'>
      <img src="https://cdn2.hubspot.net/hubfs/1629777/blog-files/Comparing%20Different%20Types%20of%20Mobile%20Application%20Development.jpg" alt="" />
      <div className='title'>
        <h1>Mobile Application Development</h1>
        <h5>our Gateway to Exceptional Mobile App Development Services!</h5>
      </div>
<Link to='/contact'>
  <button type="button" class="btn btn-danger">Contact us</button>
</Link>
    </div>

    <div className="container">
        <p>
        Mobile app development is the practice of developing mobile applications for devices operating on the Android platform. There are many benefits to developing an Android app. First, the Android platform has a large user base, which means there is a large audience to deploy the app. Secondly, Android is open-source, which makes it cost-effective to develop and customize the app. Thirdly, the Google Play Store is the main marketplace for Android apps. Fourthly, Android can be developed using different programming languages, which makes it more accessible for developers. Finally, Android has strong features, scalability, and compatibility, which makes it a great way for businesses and individuals to reach a wide and diverse user base.  
        </p>
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

export default Mobile;
