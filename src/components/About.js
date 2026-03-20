import { Link } from "react-router-dom";

const About = () => {
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

        /* About Hero */
        .about-hero {
          min-height: 50vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .about-hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .about-hero-content p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          color: #ccc;
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

        /* Mission & Vision */
        .mission-vision {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .mission-card, .vision-card {
          background: #1a1a1a;
          padding: 2.5rem;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.3s;
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-10px);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .mission-card h3, .vision-card h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #ff4d4d;
        }

        .mission-card p, .vision-card p {
          color: #ccc;
        }

        /* Story */
        .story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .story-content h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .story-content p {
          color: #ccc;
          margin-bottom: 1rem;
        }

        .story-image img {
          width: 100%;
          border-radius: 10px;
          filter: grayscale(50%);
          transition: filter 0.3s;
        }

        .story-image img:hover {
          filter: grayscale(0%);
        }

        /* Values */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .value-card {
          background: #1a1a1a;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          border-bottom: 3px solid transparent;
          transition: all 0.3s;
        }

        .value-card:hover {
          border-bottom-color: #ff4d4d;
          transform: translateY(-5px);
        }

        .value-card .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .value-card h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .value-card p {
          color: #aaa;
          font-size: 0.95rem;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          background: #1a1a1a;
          padding: 3rem;
          border-radius: 10px;
          margin-bottom: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #ff4d4d;
        }

        .stat-label {
          color: #ccc;
          font-size: 1.1rem;
        }

        /* CTA */
        .cta-section {
          background: #1a1a1a;
          text-align: center;
          padding: 4rem 2rem;
          border-radius: 10px;
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          color: #ccc;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
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

        @media (max-width: 768px) {
          .story {
            grid-template-columns: 1fr;
          }

          .story-image {
            order: -1;
          }

          .stats-grid {
            padding: 2rem;
          }

          .cta-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT POWERFIT INDIA</h1>
          <p>Your trusted partner in fitness since 2012 — blending modern science with traditional Indian wellness.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="mission-vision">
          <div className="mission-card">
            <div className="icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower every Indian to achieve their fitness potential through accessible, expert-led training and a supportive community.</p>
          </div>
          <div className="vision-card">
            <div className="icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To become India's most loved fitness brand, inspiring a healthier, stronger nation by 2030.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: '#0f0f0f', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="story">
          <div className="story-content">
            <h2>Our Journey</h2>
            <p>Founded in 2012 by fitness enthusiast Vikram Rathore in Mumbai, PowerFit started as a small 500 sq. ft. gym with just a few pieces of equipment and a big dream. Inspired by traditional Indian wrestling and modern strength training, Vikram wanted to create a space where people from all walks of life could discover their strength.</p>
            <p>Over the years, we've expanded to 15 locations across Bengaluru, Delhi, and Pune, but our core philosophy remains the same: <strong>fitness is for everyone</strong>. We combine state-of-the-art equipment with time-tested Indian practices like yoga and kalaripayattu to offer a truly unique experience.</p>
            <p>Today, we're proud to have trained over 50,000 members and built a community that supports each other inside and outside the gym.</p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="PowerFit Gym interior" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💪</div>
            <h4>Strength in Unity</h4>
            <p>We believe in growing together – our community is our family.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🧘</div>
            <h4>Holistic Wellness</h4>
            <p>Mind, body, and spirit – fitness is more than just muscles.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🇮🇳</div>
            <h4>Desi at Heart</h4>
            <p>Proudly Indian – we incorporate traditional practices into modern training.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔥</div>
            <h4>Relentless Improvement</h4>
            <p>Always evolving, always learning – we never settle.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">13+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50k+</div>
            <div className="stat-label">Happy Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Locations Across India</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Expert Trainers</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="cta-section">
          <h2>Ready to start your journey?</h2>
          <p>Join the PowerFit family today and transform your life with India's most trusted gym chain.</p>
          <Link to="/contact" className="cta-btn">Join Now</Link>
        </div>
      </section>
    </>
  );
};

export default About;