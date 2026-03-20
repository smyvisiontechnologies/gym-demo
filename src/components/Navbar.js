import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: sticky;
          top: 0;
          background: #0a0a0a;
          padding: 1rem 5%;
          z-index: 1000;
          border-bottom: 2px solid #ff4d4d;
          font-family: 'Poppins', sans-serif;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-logo {
          font-size: 1.8rem;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          letter-spacing: 2px;
        }

        .logo-dot {
          color: #ff4d4d;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background: #fff;
          margin: 3px 0;
          transition: 0.3s;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          margin: 0;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 1rem;
        }

        .nav-link:hover {
          color: #ff4d4d;
        }

        .join-btn {
          background: #ff4d4d;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
          font-family: inherit;
        }

        .join-btn:hover {
          background: #e63e3e;
        }

        @media (max-width: 768px) {
          .nav-toggle {
            display: flex;
          }

          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #0a0a0a;
            flex-direction: column;
            padding: 2rem 0;
            gap: 1.5rem;
            transform: translateY(-150%);
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
            pointer-events: none;
            border-top: 1px solid #333;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-text">POWERFIT</span>
            <span className="logo-dot">.</span>
          </Link>

          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className="nav-link" onClick={() => setIsOpen(false)}>Programs</Link>
            </li>
            <li className="nav-item">
              <Link to="/trainers" className="nav-link" onClick={() => setIsOpen(false)}>Trainers</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <button className="join-btn" onClick={() => alert('Join Now')}>Join Now</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;