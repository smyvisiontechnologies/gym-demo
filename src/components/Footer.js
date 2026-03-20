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
          transition: background 0.3s, transform 0.3s;
          font-size: 1.2rem;
        }

        .social-links a:hover {
          background: #ff4d4d;
          transform: translateY(-3px);
        }

        .contact-info-footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .contact-info-footer span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ccc;
          font-size: 0.95rem;
        }

        .contact-info-footer span i {
          color: #ff4d4d;
          width: 20px;
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
              <a href="#" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="#" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="#" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="#" target="_blank" rel="noopener noreferrer">📹</a>
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
              <span><i>📍</i> Bengaluru, Karnataka</span>
              <span><i>📞</i> +91 98765 43210</span>
              <span><i>📱</i> +91 85003 52005 (WhatsApp)</span>
              <span><i>✉️</i> info@powerfitindia.com</span>
              <span><i>⏰</i> Mon-Sun: 6AM - 10PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} POWERFIT GYM. All rights reserved. | Designed & Developed by SMYVISION TECHNOLOGIES | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Use</Link></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;