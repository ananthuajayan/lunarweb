import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Project from './components/Projects';
import Website from './components/services/Website';
import Team from './components/team';
import Careers from './components/about';
import Animation from './components/services/animation';
import Digital from './components/services/digital';
import Graphic from './components/services/graphic';
import Mobile from './components/services/mobile';
import Promotion from './components/services/promotion';
import Social from './components/services/social';
import Software from './components/services/software';
import Contact from './components/contact';
import Footer from './components/footer';
import Whatsapp from '../src/components/whatapp';


function App() {
  return (
    <Router>
      <Navbar />
      <Whatsapp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="services/website" element={<Website />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/about-us" element={<Careers/>} />
        <Route path="/services/animation" element={<Animation/>} />
        <Route path="/services/digital" element={<Digital/>} />
        <Route path="/services/graphic" element={<Graphic/>} />
        <Route path="/services/mobile" element={<Mobile/>} />
        <Route path="/services/brand-promotion" element={<Promotion/>} />
        <Route path="/services/social" element={<Social/>} />
        <Route path="/services/software" element={<Software/>} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
