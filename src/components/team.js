import React from 'react';
import ceo from '../team/sagitha (1).jpg';
import anill from '../team/anil.jpg';
import jibin from '../team/jibin.jpg';
import vyshnav from '../team/sagitha (2).jpg';
import umesh from '../team/umesh.jpg';
import ananthu from '../devps/ananthu.jpg';
import brimin from '../devps/brimin.jpg'
/*pillers*/
import anandu from '../pillers/Ananthu.png';
import kavya from '../pillers/kavya.jpg';
import ameer from '../pillers/ameer.jpg';
import architha from '../pillers/architha.jpg';
import varsha from '../pillers/varsha.png';
import karthika from '../pillers/karthika.jpg';
import binoy from '../pillers/binoy.jpg';
import keerthana from '../pillers/keerthana.jpg';
import vivek from '../pillers/vivek.jpg';
import rahil from '../devps/rahil.jpg';
import sarath from '../devps/sarath.jpg';
import '../components/team.css'


const Team = () => {
  const developers = [
    { image: rahil, title: "Rahil Ramesh" , designation:"Mobile App Developer " },
    { image: sarath, title: "Sarath", designation:"AI Developer" },
    { image: ananthu, title: "Ananthu Ajayan", designation:"MERN Stack Developer" },
    { image: brimin, title: "Bremin" , designation:"Front End Developer" }
  ];

 

  const pillers =[
    {
      image:anandu, title:"Anandu v Jayan", designation:"SEO Executive"
    },
    {
      image:karthika, title:"Karthika S", designation:"Digital Marketing Executive"
    },
    {
      image:kavya, title:"Kavya Gopalakrishnan", designation:"Social Media Executive"
    },
    {
      image:varsha, title:"Linta Premkumar", designation:"Marketing Analyst/content Writer"
    },
    {
      image:keerthana, title:"Keerthana", designation:"Marketing Associate"
    },
    {
      image:vivek, title:"Vivek", designation:"Marketing Associate"
    },
  
    {
      image:binoy, title:"Binoy Y l", designation:"Marketing Associate"
    },
    {
      image:ameer, title:"Ameer Mohammed", designation:"Graphic Designer"
    }
  
  ]
  return (
    <>
      <div className='container text-center team'>
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3" style={{marginTop:"40px"}}>
          <div className="col team">
            <img
              src={ceo}
              alt=""
            />
          </div>

          <div className="col team" >
            
              <h3>Sagitha Nath G<br /> <br />Chief Executive Officer</h3>
              <p>
                <span style={{color:'darkblue',fontSize:"20px", marginTop:"40px"}}>
                With a wealth of experience and a visionary approach, Miss. Sagitha Nath has steered our company to new heights. Their strategic insight, commitment to innovation, and dedication to our mission have been instrumental in shaping the success story of our organization.                </span>
                <br /> <br />
              </p>
            </div>
          
        </div>

        

        <div className="container text-center" >
          <h1>Management Team</h1>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
          <div className="col team">
            <img
              src={vyshnav}
              alt=""
            />
          </div>

          <div className="col team">
            
              <h3>Vyshnav Pradeep<br /> <br />HR Assistant Manager/Head of Marketing Team</h3>
              <p>
                <span style={{color:'darkblue',fontSize:"20px", marginTop:"40px"}}>
                Mr.Vyshnav form the dynamic duo responsible for talent acquisition, employee development, and crafting impactful marketing strategies. He ensures our team thrives, while leading the charge in promoting our brand with creativity and strategic prowess.                                </span>
                <br /> <br />
              </p>
            </div>
          
        </div>

        
         

        <div className="management-team">
        <div className="manager">
            <div className='manager-image'>
              <img src={architha} alt="" />
            </div>
            <div>
            <div>
              <h4>Architha Venu</h4>
              <h4>Office Administrator</h4>
            </div>
            <p>
            The unsung hero behind the scenes. She ensures the smooth functioning of our daily operations, fostering a collaborative and efficient work environment for everyone in the organization.            </p>
            </div>
           
          </div>
          <div className="manager">
            <div className='manager-image'>
              <img src={anill} alt="" />
            </div>
            <div>
            <div>
              <h4>Anil Kumar</h4>
              <h4>Senior Accountant</h4>
            </div>
            <p>
            In charge of maintaining our financial stability is our Senior Accountant, [his name]. He brings a wealth of expertise to the table, ensuring meticulous financial management and guiding us towards fiscal success.            </p>
            </div>
            
          </div>
          <div className="manager">
            <div className='manager-image'>
              <img src={umesh} alt="" />
            </div>
            <div>
            <div>
              <h4>Umesh Udayan</h4>
              <h4>Developing Team Head</h4>
            </div>
            <p>
            Umesh champions innovation, guides the implementation of cutting-edge technologies, and ensures our digital solutions exceed industry standards.            </p>
            </div>
          
          </div>

          <div className="manager">
            <div className='manager-image'>
              <img src={jibin} alt="" />
            </div>
            <div>
            <div>
              <h4>Jibin Suresh</h4>
              <h4>Team Lead (3D animations & Design)</h4>
            </div>
            <p>
            Meet the creative force behind our visually stunning 3D animations and designs – our Team Lead Jibin, orchestrates a talented team to bring ideas to life.             </p>
            </div>
            
          </div>

        </div>
        </div>
   

  <div style={{backgroundColor:"lightgray",padding:"10px"}} >
        <div className="text-center" style={{marginBottom:"80px"}} >
            <h1>Developing  Team</h1>
        </div> 
        <div className='developer'>
        {developers.map((data, index) => (
      <div key={index} id='dev'>
        <div className='dev-image'>
          <img src={data.image} alt="" />
        </div>
        <h4>{data.title}</h4>
        <h6>{data.designation}</h6>
      </div>
    ))}
        </div>
  
  </div>

  <div style={{padding:"10px"}} >
        <div className="text-center" style={{marginBottom:"80px"}} >
            <h1>Our Pillers</h1>
        </div> 
        <div className='pillers'>
        {pillers.map((data, index) => (
      <div key={index} id='dev'>
        <div className='dev-image'>
          <img src={data.image} alt="" />
        </div>
        <h4>{data.title}</h4>
        <h6>{data.designation}</h6>
      </div>
    ))}
        </div>
  
  </div>

      

     
    </>
  )
}

export default Team
