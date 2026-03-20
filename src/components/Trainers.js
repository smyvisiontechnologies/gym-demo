const Trainers = () => {
  const whatsappNumber = "918500352005"; // India country code + number

  const handleWhatsApp = (trainerName) => {
    const message = encodeURIComponent(`Hi, I'm interested in training with ${trainerName} at PowerFit. Can you provide more details?`);
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

        /* Trainers Hero */
        .trainers-hero {
          min-height: 40vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .trainers-hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .trainers-hero-content p {
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

        /* Trainers Grid */
        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .trainer-card {
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
        }

        .trainer-card:hover {
          transform: translateY(-10px);
        }

        .trainer-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          filter: grayscale(50%);
          transition: filter 0.3s;
        }

        .trainer-card:hover .trainer-img {
          filter: grayscale(0%);
        }

        .trainer-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .trainer-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
          color: #ff4d4d;
        }

        .trainer-specialty {
          font-weight: 600;
          color: #fff;
          background: #ff4d4d20;
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          border-left: 3px solid #ff4d4d;
        }

        .trainer-description {
          color: #ccc;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          flex-grow: 1;
        }

        .trainer-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1rem 0;
          color: #aaa;
          font-size: 0.9rem;
        }

        .trainer-details span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .whatsapp-btn {
          background: #25D366;
          color: #fff;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          width: 100%;
          margin-top: 1rem;
        }

        .whatsapp-btn:hover {
          background: #128C7E;
        }

        .whatsapp-btn i {
          font-size: 1.2rem;
        }

        /* Call to Action */
        .cta-section {
          background: #0f0f0f;
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
          .trainers-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Trainers Hero */}
      <section className="trainers-hero">
        <div className="trainers-hero-content">
          <h1>MEET OUR EXPERT TRAINERS</h1>
          <p>India's finest fitness professionals dedicated to helping you achieve your goals.</p>
        </div>
      </section>

      {/* Trainers List */}
      <section className="section">
        <h2 className="section-title">The PowerFit Family</h2>
        <div className="trainers-grid">
          {/* Trainer 1 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Arjun Singh" />
            <div className="trainer-content">
              <h3>Arjun Singh</h3>
              <div className="trainer-specialty">Strength & Conditioning</div>
              <p className="trainer-description">Former national-level wrestler with 12+ years of experience. Specializes in functional strength, powerlifting, and desi calisthenics (dand, baithak).</p>
              <div className="trainer-details">
                <span>🏆 5x State Wrestling Champion</span>
                <span>📅 Mon/Wed/Fri 6AM-10AM</span>
                <span>📍 Bengaluru</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Arjun Singh')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Priya Sharma" />
            <div className="trainer-content">
              <h3>Priya Sharma</h3>
              <div className="trainer-specialty">Yoga & Holistic Wellness</div>
              <p className="trainer-description">Certified yoga instructor from Rishikesh, trained in Hatha, Ashtanga, and prenatal yoga. Helps clients achieve mental clarity and physical flexibility.</p>
              <div className="trainer-details">
                <span>🧘 5000+ hours of teaching</span>
                <span>📅 Tue/Thu/Sat 7AM-11AM</span>
                <span>📍 Pune</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Priya Sharma')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Trainer 3 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1567013127542-490d757e51b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Ravi Kumar" />
            <div className="trainer-content">
              <h3>Ravi Kumar</h3>
              <div className="trainer-specialty">Martial Arts & HIIT</div>
              <p className="trainer-description">Black belt in Kalaripayattu and certified MMA trainer. Specializes in high-intensity interval training and self-defense for all ages.</p>
              <div className="trainer-details">
                <span>🥋 15 years martial arts experience</span>
                <span>📅 Mon/Wed/Fri 5PM-9PM</span>
                <span>📍 Delhi</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Ravi Kumar')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Trainer 4 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Neha Patel" />
            <div className="trainer-content">
              <h3>Neha Patel</h3>
              <div className="trainer-specialty">Bollywood Dance Fitness</div>
              <p className="trainer-description">Professional choreographer and fitness enthusiast. Creates high-energy dance workouts that burn calories while you groove to Bollywood and Bhangra beats.</p>
              <div className="trainer-details">
                <span>💃 Choreographed for Bollywood films</span>
                <span>📅 Tue/Thu/Sat 6PM-8PM</span>
                <span>📍 Mumbai</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Neha Patel')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Trainer 5 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Vikram Rathore" />
            <div className="trainer-content">
              <h3>Vikram Rathore</h3>
              <div className="trainer-specialty">Personal Transformation Coach</div>
              <p className="trainer-description">Founder of PowerFit, Vikram has helped 1000+ clients transform their bodies through customized nutrition and training plans. Expert in weight loss and muscle gain.</p>
              <div className="trainer-details">
                <span>🔥 15+ years coaching experience</span>
                <span>📅 By appointment</span>
                <span>📍 All locations</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Vikram Rathore')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Trainer 6 */}
          <div className="trainer-card">
            <img className="trainer-img" src="https://images.unsplash.com/photo-1518611012118-696072aa579e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Anjali Desai" />
            <div className="trainer-content">
              <h3>Anjali Desai</h3>
              <div className="trainer-specialty">Pre/Post Natal Fitness</div>
              <p className="trainer-description">Specializes in safe and effective workouts for expecting and new mothers. Certified prenatal and postnatal fitness expert with a gentle approach.</p>
              <div className="trainer-details">
                <span>👶 8+ years specialist experience</span>
                <span>📅 Mon/Wed/Fri 10AM-12PM</span>
                <span>📍 Bengaluru</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Anjali Desai')}>
                <i>📱</i> Connect on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="cta-section">
          <h2>Ready to train with India's best?</h2>
          <p>Book a free consultation with any of our expert trainers. Let's discuss your goals and create a plan that works for you.</p>
          <button 
            className="cta-btn" 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20a%20trainer%20at%20PowerFit.`, '_blank')}
          >
            Book on WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};

export default Trainers;