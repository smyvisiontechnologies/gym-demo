const Programs = () => {
  const whatsappNumber = "918500352005"; // India country code + number

  const handleWhatsApp = (programName) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${programName} program at PowerFit.`);
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

        /* Programs Hero */
        .programs-hero {
          min-height: 40vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .programs-hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .programs-hero-content p {
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

        /* Programs Grid */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .program-card {
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
        }

        .program-card:hover {
          transform: translateY(-10px);
        }

        .program-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: grayscale(50%);
          transition: filter 0.3s;
        }

        .program-card:hover .program-img {
          filter: grayscale(0%);
        }

        .program-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .program-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #ff4d4d;
        }

        .program-content p {
          color: #ccc;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .program-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 0;
          color: #aaa;
          font-size: 0.9rem;
        }

        .program-details span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
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

        /* Schedule Section */
        .schedule-section {
          background: #0f0f0f;
          padding: 4rem 5%;
          text-align: center;
        }

        .schedule-btn {
          background: #ff4d4d;
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s, background 0.3s;
          display: inline-block;
          margin-top: 2rem;
        }

        .schedule-btn:hover {
          background: #e63e3e;
          transform: translateY(-3px);
        }

        /* FAQ */
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .faq-item {
          background: #1a1a1a;
          padding: 1.5rem;
          border-radius: 10px;
        }

        .faq-item h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #ff4d4d;
        }

        .faq-item p {
          color: #ccc;
        }

        @media (max-width: 768px) {
          .programs-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Programs Hero */}
      <section className="programs-hero">
        <div className="programs-hero-content">
          <h1>OUR FITNESS PROGRAMS</h1>
          <p>Choose the perfect program to kickstart your fitness journey – all designed with an Indian touch.</p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section">
        <h2 className="section-title">What We Offer</h2>
        <div className="programs-grid">
          {/* Program 1 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Desi Strength" />
            <div className="program-content">
              <h3>Desi Strength</h3>
              <p>Build raw power with traditional Indian calisthenics (like dand, baithak) combined with modern weight training. Perfect for functional strength.</p>
              <div className="program-details">
                <span>⏱️ 45-60 min</span>
                <span>📅 Mon/Wed/Fri</span>
                <span>🔥 Beginner to Advanced</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Desi Strength')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Program 2 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Power Yoga" />
            <div className="program-content">
              <h3>Power Yoga</h3>
              <p>Ancient yoga practices fused with core strengthening and flexibility. Includes surya namaskar, asanas, and pranayama for holistic wellness.</p>
              <div className="program-details">
                <span>⏱️ 60 min</span>
                <span>📅 Tue/Thu/Sat</span>
                <span>🧘 All Levels</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Power Yoga')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Program 3 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Bollywood Beats" />
            <div className="program-content">
              <h3>Super Yoga Beats</h3>
              <p>High-energy dance fitness that tones your body while you groove to the latest Bollywood hits. Burn up to 600 calories per session!</p>
              <div className="program-details">
                <span>⏱️ 45 min</span>
                <span>📅 Mon/Wed/Fri</span>
                <span>💃 Fun & Energetic</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Bollywood Beats')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Program 4 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Martial Arts" />
            <div className="program-content">
              <h3>Martial Arts</h3>
              <p>Learn Kalaripayattu (ancient Indian martial art) along with modern self-defense techniques. Boosts confidence and agility.</p>
              <div className="program-details">
                <span>⏱️ 60 min</span>
                <span>📅 Tue/Thu/Sat</span>
                <span>🥋 All Ages</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Martial Arts')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Program 5 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="HIIT" />
            <div className="program-content">
              <h3>HIIT (High-Intensity)</h3>
              <p>Rapid fat-burning workouts with intervals of intense exercise and rest. Maximize results in minimum time.</p>
              <div className="program-details">
                <span>⏱️ 30 min</span>
                <span>📅 Mon/Wed/Fri</span>
                <span>🔥 Advanced</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('HIIT')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>

          {/* Program 6 */}
          <div className="program-card">
            <img className="program-img" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Personal Training" />
            <div className="program-content">
              <h3>Personal Training</h3>
              <p>One-on-one sessions with our expert trainers. Customized diet and workout plans tailored to your goals – whether weight loss, muscle gain, or maintenance.</p>
              <div className="program-details">
                <span>⏱️ Flexible</span>
                <span>📅 Any day</span>
                <span>👤 Personalized</span>
              </div>
              <button className="whatsapp-btn" onClick={() => handleWhatsApp('Personal Training')}>
                <i>📱</i> Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="schedule-section">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Can't decide? Talk to our experts.</h2>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          Get in touch on WhatsApp for a free consultation. We'll help you pick the perfect program.
        </p>
        <button 
          className="schedule-btn" 
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20help%20choosing%20a%20program%20at%20PowerFit.`, '_blank')}
        >
          Chat on WhatsApp
        </button>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Do I need to be fit to join?</h4>
            <p>Absolutely not! Our programs cater to all levels – from beginners to advanced athletes.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a trial class?</h4>
            <p>Yes! Contact us on WhatsApp to schedule a free trial session.</p>
          </div>
          <div className="faq-item">
            <h4>What are the membership fees?</h4>
            <p>We offer flexible monthly and yearly plans. WhatsApp us for current offers.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer online training?</h4>
            <p>Yes, we have online coaching options with live sessions and diet plans.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;