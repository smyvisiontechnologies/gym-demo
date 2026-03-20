import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const whatsappNumber = "918500352005";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format the message with user details
    const message = `Hi, I'm interested in PowerFit Gym.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    // Redirect to WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #0a0a0a;
          color: #fff;
          line-height: 1.6;
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        /* Hero Section */
        .hero {
          min-height: 90vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-highlight {
          color: #ff4d4d;
        }

        .hero-content p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          color: #ccc;
        }

        .cta-btn {
          background: #ff4d4d;
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s, background 0.3s;
          display: inline-block;
        }

        .cta-btn:hover {
          background: #e63e3e;
          transform: translateY(-3px);
        }

        /* Section Styles */
        .section {
          padding: 5rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          width: 80px;
          height: 4px;
          background: #ff4d4d;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Programs */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .program-card {
          background: #1a1a1a;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.3s;
          border-bottom: 3px solid transparent;
        }

        .program-card:hover {
          transform: translateY(-10px);
          border-bottom-color: #ff4d4d;
        }

        .program-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .program-card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .program-card p {
          color: #aaa;
        }

        /* Trainers */
        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .trainer-card {
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .trainer-card:hover {
          transform: translateY(-10px);
        }

        .trainer-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          filter: grayscale(50%);
          transition: filter 0.3s;
        }

        .trainer-card:hover .trainer-img {
          filter: grayscale(0%);
        }

        .trainer-info {
          padding: 1.5rem;
          text-align: center;
        }

        .trainer-info h3 {
          margin-bottom: 0.5rem;
        }

        .trainer-info p {
          color: #ff4d4d;
          font-weight: 600;
        }

        /* Contact */
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          background: #1a1a1a;
          border-radius: 10px;
          padding: 3rem;
        }

        .contact-info h3 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .contact-detail span {
          font-size: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 1rem;
          background: #2a2a2a;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-family: inherit;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 2px solid #ff4d4d;
        }

        .contact-form button {
          background: #ff4d4d;
          color: #fff;
          padding: 1rem;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .contact-form button:hover {
          background: #e63e3e;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #25D366;
          color: #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s;
          z-index: 1000;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        /* Map Section */
        .map-section {
          padding: 0 5% 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .map-container {
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #333;
          background: #1a1a1a;
        }

        .map-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .location-address {
          background: #1a1a1a;
          padding: 1.5rem;
          text-align: center;
          border-top: 1px solid #333;
        }

        .location-address h3 {
          color: #ff4d4d;
          margin-bottom: 0.5rem;
        }

        .location-address p {
          color: #ccc;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .contact-container {
            padding: 2rem;
          }

          .whatsapp-float {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            bottom: 20px;
            right: 20px;
          }

          .map-wrapper {
            height: 300px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            TRANSFORM YOUR BODY <span className="hero-highlight">THE DESI WAY</span>
          </h1>
          <p>
            India's premier fitness destination – where tradition meets modern training. Join us to unleash your inner strength.
          </p>
          <Link to="/programs" className="cta-btn">Explore Programs</Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section">
        <h2 className="section-title">Our Signature Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">🏋️</div>
            <h3>Desi Strength</h3>
            <p>Build raw power with traditional Indian calisthenics and modern weight training.</p>
          </div>
          <div className="program-card">
            <div className="program-icon">🧘</div>
            <h3>Power Yoga</h3>
            <p>Ancient yoga practices fused with core strengthening for ultimate flexibility.</p>
          </div>
          <div className="program-card">
            <div className="program-icon">💃</div>
            <h3>Bollywood Beats</h3>
            <p>High-energy dance fitness that tones your body while you groove to Bollywood hits.</p>
          </div>
          <div className="program-card">
            <div className="program-icon">🥋</div>
            <h3>Martial Arts</h3>
            <p>Learn Kalaripayattu and modern self-defense techniques from expert trainers.</p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section" style={{ background: '#0f0f0f' }}>
        <h2 className="section-title">Meet Our Expert Trainers</h2>
        <div className="trainers-grid">
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Arhana" />
            <div className="trainer-info">
              <h3>Arhana</h3>
              <p>Strength & Conditioning Coach</p>
            </div>
          </div>
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Priya Sharma" />
            <div className="trainer-info">
              <h3>Priya Sharma</h3>
              <p>Yoga & Wellness Expert</p>
            </div>
          </div>
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Ravi Kumar" />
            <div className="trainer-info">
              <h3>Ravi Kumari</h3>
              <p>Martial Arts & HIIT Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>We're here to help you start your fitness journey</h3>
            <div className="contact-detail">
              <span>📍</span>
              <p>PowerFit Gym, Near Managalgiri Church, Main Road, Managalgiri, Vijayawada, Andhra Pradesh 520008</p>
            </div>
            <div className="contact-detail">
              <span>📞</span>
              <p>+91 85003 52005 (WhatsApp) | +91 98765 43210</p>
            </div>
            <div className="contact-detail">
              <span>✉️</span>
              <p>info@powerfitindia.com | managalgiri@powerfitindia.com</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              rows="4" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Section - Managalgiri Location */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.345678901234!2d80.64234567890123!3d16.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f2e5b5b5b5b5%3A0x123456789abcdef!2sManagalgiri%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="PowerFit Gym Managalgiri Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-address">
            <h3>📍 PowerFit Gym - Managalgiri</h3>
            <p>Near Managalgiri Church, Main Road, Managalgiri, Vijayawada, Andhra Pradesh 520008</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#ff4d4d' }}>
              ⏰ Open Daily: 6:00 AM - 10:00 PM • Free Parking • Modern Equipment
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to know more about PowerFit Gym.")}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
};

export default Home;