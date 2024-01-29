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
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
          <div className="col team">
            <img
              src={ceo}
              alt=""
            />
          </div>

          <div className="col team">
            
              <h3>Sagitha Nath G<br /> <br />Chief Executive Officer</h3>
              <p>
                <span style={{color:'darkblue',fontSize:"20px", marginTop:"40px"}}>
                  Introducing Sagitha Nath G, the dynamic CEO driving our firm to new heights in the ever-evolving landscape of digital marketing, animations, and IT solutions. As the visionary leader, Sagitha Nath G's strategic approaches deliver innovative technological solutions. Their leadership ensures advanced offerings to meet the wide range of customer demands. In spite of directing the company as CEO, Sagitha Nath G is shaping a vision where technology and creativity converge seamlessly. With an uncompromising commitment to staying at the forefront of innovation, Sagitha Nath G is propelling our firm to new heights of success in the dynamic landscape of the digital era.
                </span>
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
                Vyshnav is our skilled digital marketing manager. He serves as the genius behind our team's triumphs and the expert who is overseeing our high-profile clients' SEO initiatives. Vyshnav successfully navigates the ever-changing world of digital marketing with an aggressive outlook and a wealth of knowledge, ensuring that our customers' online presence not only meets but surpasses their expectations. With Vyshnav's direction, our team delivers significant outcomes in search engine optimization and unique SEO strategy creation.                </span>
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
            Meet Architha, the orchestrator of daily operations of our organization in her role as the Office Administrator. With precision and dedication, Architha ensures the seamless functioning of our workspace, embodying the essence of efficiency and professionalism. Her meticulous attention to detail guarantees an organized and productive environment for the entire team. Her excellent communication skills and proactive approach create an inviting atmosphere, reflecting positively on our company's image.
            </p>
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
              Our dedicated Accounts Manager, the mastermind behind our seamless execution of all our account operations. With a keen eye, Anil drives the team to create detailed account plans for our prominent clients. By meticulously tracking every aspect of account planning and doing comprehensive financial projections, Anil guarantees that our clients receive not just a service but rather a customized financial strategy that is in line with their desired outcomes.
            </p>
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
            Umesh, our development master, brings out the best in every line of code. He's the silent force driving our team's success, effortlessly handling hurdles. Umesh's expertise extends beyond programming; he is the glue that holds creativity, cooperation, and faultless execution together. His leadership brings projects to life, guaranteeing that each one is a work of art. Umesh's commitment is unrivaled, inspiring the team to reach new heights. Umesh is the constant, the steady hand leading our ship in the ever-changing tech scene.
            </p>
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
            Entrusted with the desires of our highly valued clients is Jibin, the artistic genius driving our 3D modeling and animation department. Jibin delivers immersive visual experiences through blending technical proficiency with creative thinking. Whether designing complex 3D models or bringing animations to life, Jibin's work showcases an unwavering commitment to perfection that resonates with our valued clients' discriminating preferences. 
             </p>
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
