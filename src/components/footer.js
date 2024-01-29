import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import instagram from '../icons/instagram.png';
import facebook from '../icons/u589.png';
import linkedin from '../icons/u587.png';
import twitter from '../icons/u588.png';
import mobile from '../icons/free-iphone-icon-709-thumb.png';
import landphone from '../icons/phone-icon-1561x2048-qjhf7be8.png';
import email from '../icons/email-icon-design-in-blue-circle-png.webp';
import address from '../icons/address-icon-15.png'
import { Link } from 'react-router-dom';

const Footer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section className="footer-section" style={{ marginBottom: "20px" }}>
        <div className="container-md">
          <div className="col footer-details">
            <h5><b>Follow us on:</b></h5>
            <Link to="https://www.instagram.com/lunarenterprises_india/"><h6 id="instagram"><img src={instagram} alt="" /><span>Instagram</span></h6></Link>
            <Link to="https://www.facebook.com/lunarenterprises.in"><h6 id="facebook"><img src={facebook} alt="" /><span>facebook</span></h6></Link>
            <Link to="https://www.linkedin.com/in/lunar-enterprises/"><h6 id="linkedin"><img src={linkedin} alt="" /><span>linkedin</span></h6></Link>
            <Link to="https://twitter.com/Lunarenter37682"><h6 id="twitter"><img src={twitter} alt="" /><span>Twitter</span></h6></Link>
          </div>
          <div className="col footer-details" >
            <h5><b>Contact Details</b></h5>
            <a href="tel:+917025715775"><h6><img src={mobile} alt="mobile" /><span>+91 7025715775</span></h6></a>
            <h6><img src={landphone} alt="landphone" /><span>0471-3592716</span></h6>
            <a href="mailto:info@lunarenp.com"><h6 id='mail'><img src={email} alt="email" /><span>info@lunarenp.com</span></h6></a>
            <h6 id="address"><img src={address} alt="address" />TC-15/1945/6, Kamala Towers, Ganapathy Temple Road, Vazhuthacaud P.O, Thiruvananthapuram, Kerala, India Pincode:695014.
            </h6>
          </div>
          <div className="col footer-details" id='map'>
            <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.57828987715!2d76.95517669801723!3d8.509616714517627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd90a945c4b%3A0x98cfae4199faef9a!2sKamala%20Towers!5e0!3m2!1sen!2sin!4v1701169480353!5m2!1sen!2sin" width="250" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </section>

      <footer style={{ backgroundColor: '#E9EBFF' }}>
        <section className="containe">
          <p style={{ color: 'black', padding: '30px', textAlign: 'center' }}>Copyright © 2023 Lunar Enterprises. Allrights reserved. <br />
          <span style={{color:"blue"}} onClick={handleShow}> Privacy & Policy</span>
          </p>
         
          <Modal show={show} onHide={handleClose} style={{ marginTop: "90px" }}>
            <Modal.Header closeButton>
              <Modal.Title>Privacy & Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <b className='requirements'><h6>PRIVACY POLICY:</h6></b>
                <p>
                  Privacy matters because it keeps your personal stuff safe and lets you decide who gets
                  to know what about you. Welcome to the lunar enterprise website.This privacy
                  statement describes how we gather, process, share, and protect your personal data. By
                  using our Website, you consent to the terms of this Privacy Policy.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>INFORMATION WE COLLECT:</h6></b>
                <p>
                  <b>Personal Information:</b> We may collect personal information such as names, email
                  addresses, phone numbers, and job titles when voluntarily submitted by visitors through
                  forms on our Website.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>INFORMATION WE COLLECT:</h6></b>
                <p>
                  <b>Personal Information:</b> We may collect personal information such as names, email
                  addresses, phone numbers, and job titles when voluntarily submitted by visitors through
                  forms on our Website.
                </p>
                <p>
                  <b>Automatically Collected Information: </b>We may collect information about your use of our
                  Website, including IP addresses, browser types, and device identifiers. This information
                  is collected through cookies, web beacons, and similar technologies.
                </p>
              </p>

              <p>
                <b className='requirements'><h6> HOW WE USE YOUR INFORMATION:</h6></b>
                <p>
                  <b>Provide Services: </b>We may use your personal information to provide you with the
                  services you have requested, respond to inquiries, and fulfill your requests.
                </p>

                <p>
                  <b>Marketing:</b>With your consent, we may use your personal information to send you
                  marketing communications about our products, services, and events.
                </p>

                <p>
                  <b>Analytics:</b>We may use analytics tools to analyze how users interact with our Website
                  and to improve our services.
                </p>
              </p>
              <p>
                <b className='requirements'><h6>  DISCLOSURE OF YOUR INFORMATION:</h6></b>
                <p>
                  <b>Third-Party Service Providers:</b>We may share your information with third-party service
                  providers who assist us in operating our Website, conducting our business, or servicing
                  you.
                </p>

                <p>
                  <b>Legal Compliance:</b>We may disclose your information if required by law or in response
                  to lawful requests by public authorities.
                </p>

                <p>
                  <b>Analytics:</b>We may use analytics tools to analyze how users interact with our Website
                  and to improve our services.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>YOUR CHOICES:</h6></b>
                <p>
                  <b>Opt-Out:</b>You may opt-out of receiving marketing communications from us by
 contacting us directly.
                </p>

                <p>
                  <b>Cookies:</b>By default, the majority of web browsers accept cookies. You can usually set
 your browser to remove or reject cookies but may affect the functionality of our
 Website.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>SECURITY:</h6></b>
                <p>
                We take appropriate precautions to guard against unauthorized access, disclosure,
 modification, and destruction of your personal information.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>CHANGES TO THIS PRIVACY POLICY:</h6></b>
                <p>
                We reserve the right to make changes to our privacy statement. The effective date will
 be revised accordingly.It is recommended that you routinely check this Privacy Policy for
 any updates.
                </p>
              </p>

              <p>
                <b className='requirements'><h6>CONTACT US:</h6></b>
                <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at
                <a style={{marginLeft:"4px"}} href="mailto:info@lunarenp.com">info@lunarenp.com</a>.

                </p>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
