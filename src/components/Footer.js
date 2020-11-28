import React from 'react';

import locationImage from '../utils/images/icon-location.svg';
import '../styles/styles-components/Footer-style.css';
import fbIcon from '../utils/icons/logo-facebook.svg';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer--container">
        <h3>Huddle</h3>
          <div className="footer--content">

            <div className="contact--us">
              
              <div className="contact--location">
                <span className="location"></span>
                  <p>
                  Our offices are ready to you
                  </p>
              </div>

              <div className="contact--phone">
                <span className="phone"></span>
                  <p>
                  +1 619-123-4567
                  </p>
              </div>

              <div className="contact--email">
                <span className="email"></span>
                  <p>
                  example@example.com
                  </p>
              </div>
            </div>
            
          

            <div className="about--us">
              <a href="">about us</a>
              <a href="">what we do</a>
              <a href="">FAQ</a>
            </div>
            <div className="about--us">
              <a href="">career</a>
              <a href="">blog</a>
              <a href="">contact us</a>
            </div>
          

            <div className="social--media">
              <span>
              <i class="fab fa-facebook-f"></i>
              </span>
              <span>
              <i class="fab fa-twitter"></i>
              </span>
              <span>
              <i class="fab fa-instagram"></i>
              </span>
            </div>
          </div>
            <p className="copyright">Copyright 2020 Huddle. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}
