import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer {
          background: #0a0a0a;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          border-top: 2px solid #ff4d4d;
          padding: 3rem 5% 1.5rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: #ff4d4d;
          margin-bottom: 1.2rem;
          font-size: 1.3rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: #ff4d4d;
        }

        .footer-section p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.8rem;
        }

        .footer-section ul li a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section ul li a:hover {
          color: #ff4d4d;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #1a1a1a;
          border-radius: 50%;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s;
          font-size: 1.2rem;
        }

        .social-links a:hover {
          background: #ff4d4d;
          transform: translateY(-3px);
        }

        .contact-info-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .contact-info-footer span {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ccc;
          font-size: 0.95rem;
        }

        .contact-info-footer .icon {
          width: 24px;
          font-size: 1.1rem;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #333;
          color: #888;
          font-size: 0.9rem;
        }

        .footer-bottom a {
          color: #ff4d4d;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .social-links {
            justify-content: center;
          }

          .contact-info-footer span {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section">
            <h3>POWERFIT</h3>
            <p>India's premier fitness destination since 2012. We blend modern training with traditional Indian wellness to help you become the best version of yourself.</p>
            <div className="social-links">
              <a href="https://facebook.com/powerfitgym" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/powerfitgym" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.666.393 3.76 1.299c-.906.906-1.169 2.015-1.227 3.292C2.014 5.832 2 6.241 2 9.5s.014 3.668.072 4.948c.058 1.277.321 2.386 1.227 3.292.906.906 2.015 1.169 3.292 1.227 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.277-.058 2.386-.321 3.292-1.227.906-.906 1.169-2.015 1.227-3.292.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.321-2.386-1.227-3.292-.906-.906-2.015-1.169-3.292-1.227C15.668.014 15.259 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
              <a href="https://twitter.com/powerfitgym" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com/powerfitgym" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/trainers">Trainers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li><Link to="/programs#desi-strength">Desi Strength</Link></li>
              <li><Link to="/programs#power-yoga">Power Yoga</Link></li>
              <li><Link to="/programs#bollywood-beats">Bollywood Beats</Link></li>
              <li><Link to="/programs#martial-arts">Martial Arts</Link></li>
              <li><Link to="/programs#hiit">HIIT</Link></li>
              <li><Link to="/programs#personal-training">Personal Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <div className="contact-info-footer">
              <span>
                <span className="icon">📍</span>
                Near Managalgiri Church, Main Road, Managalgiri, Vijayawada, AP 520008
              </span>
              <span>
                <span className="icon">📞</span>
                +91 98765 43210
              </span>
              <span>
                <span className="icon">📱</span>
                +91 85003 52005 (WhatsApp)
              </span>
              <span>
                <span className="icon">✉️</span>
                info@powerfitindia.com
              </span>
              <span>
                <span className="icon">⏰</span>
                Mon-Sun: 6AM - 10PM
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} POWERFIT GYM. All rights reserved. | Designed & Developed by SMYVISION TECHNOLOGIES | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;