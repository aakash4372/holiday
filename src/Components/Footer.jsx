import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css';
// Import React Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <div className="container-fluid justify-content-center">
      <footer>
        <div className="row justify-content-around mb-0 pt-5 pb-0">
          <div className="col-11">
            <div className="row justify-content-center">
              <div className="col-md-4 col-12 font-italic align-items-center mt-md-3 mt-4">
                <h5>
                  <img src="path/to/your/logo.png" alt="Logo" className="footer-logo" />
                </h5>
            
                <small className="copy-rights cursor-pointer">Ⓒ 2025 - All rights reserved by <a href="https://bmtechx.in/" className="copyright-link">BM TECHx</a>
                 
                </small>
                
              </div>

              <div className="col-md-4 col-12 my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-md-3 mt-4">Useful Links</li>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/testimonial">Testimonial</a></li>
                </ul>
              </div>

              <div className="col-md-4 col-12 my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-md-3 mt-4">Get Connect With Us</li>
                  <li>
                    <FaWhatsapp className="me-2" />
                    <a href="https://wa.me/your-number">WhatsApp</a>
                  </li>
                  <li>
                    <FaEnvelope className="me-2" />
                    <a href="mailto:your@email.com">Email</a>
                  </li>
                  <li>
                    <FaPhone className="me-2" />
                    <a href="tel:+1234567890">Call</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;