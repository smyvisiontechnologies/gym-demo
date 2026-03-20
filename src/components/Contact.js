import { useState } from "react";

const Contact = () => {
  const whatsappNumber = "918500352005";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format the message with user details
    const message = `Hi, I'm interested in PowerFit Gym.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    // Redirect to WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'd like to know more about PowerFit Gym.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
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

        /* Contact Hero */
        .contact-hero {
          min-height: 30vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .contact-hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .contact-hero-content p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          color: #ccc;
        }

        /* Section Styles */
        .section {
          padding: 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Contact Container */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: #1a1a1a;
          border-radius: 10px;
          padding: 3rem;
        }

        /* Contact Info */
        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #ff4d4d;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .contact-detail .icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          background: #ff4d4d20;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4d4d;
        }

        .contact-detail p {
          color: #ccc;
        }

        .contact-detail strong {
          color: #fff;
        }

        .whatsapp-contact-btn {
          background: #25D366;
          color: #fff;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .whatsapp-contact-btn:hover {
          background: #128C7E;
        }

        /* Business Hours */
        .business-hours {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        .business-hours h3 {
          margin-bottom: 1rem;
          color: #ff4d4d;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .hours-item {
          color: #ccc;
        }

        .hours-item span {
          color: #fff;
          font-weight: 600;
        }

        /* Contact Form */
        .contact-form h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #ff4d4d;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: #2a2a2a;
          border: 1px solid #444;
          border-radius: 5px;
          color: #fff;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff4d4d;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: #ff4d4d;
          color: #fff;
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          width: 100%;
          font-size: 1.1rem;
        }

        .submit-btn:hover {
          background: #e63e3e;
        }

        /* Map Section */
        .map-section {
          padding: 2rem 5%;
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
          height: 450px;
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
          .contact-container {
            grid-template-columns: 1fr;
            padding: 2rem;
          }

          .hours-grid {
            grid-template-columns: 1fr;
          }

          .map-wrapper {
            height: 350px;
          }
        }
      `}</style>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>GET IN TOUCH</h1>
          <p>We're here to answer your questions and help you start your fitness journey.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-detail">
              <div className="icon">📍</div>
              <div>
                <p><strong>PowerFit Gym - Managalgiri</strong></p>
                <p>Near Managalgiri Church, Main Road, Managalgiri, Vijayawada, Andhra Pradesh 520008</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="icon">📞</div>
              <div>
                <p><strong>Phone</strong></p>
                <p>+91 85003 52005 (WhatsApp)</p>
                <p>+91 98765 43210 (Reception)</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="icon">✉️</div>
              <div>
                <p><strong>Email</strong></p>
                <p>info@powerfitindia.com</p>
                <p>managalgiri@powerfitindia.com</p>
              </div>
            </div>

            <button className="whatsapp-contact-btn" onClick={handleWhatsApp}>
              <span>📱</span> Chat on WhatsApp
            </button>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-grid">
                <div className="hours-item"><span>Mon-Fri:</span> 6:00 AM - 10:00 PM</div>
                <div className="hours-item"><span>Saturday:</span> 7:00 AM - 9:00 PM</div>
                <div className="hours-item"><span>Sunday:</span> 7:00 AM - 8:00 PM</div>
                <div className="hours-item"><span>Holidays:</span> 8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
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
              Open Daily • Free Parking Available • State-of-the-art Equipment
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;