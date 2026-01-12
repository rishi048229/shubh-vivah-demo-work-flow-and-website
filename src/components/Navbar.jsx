import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* ---------- LOGO ---------- */
const Swastik = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
    <path d="M50 10V90M10 50H90" stroke={color} strokeWidth="8" />
    <circle cx="30" cy="30" r="4" fill={color} />
    <circle cx="70" cy="30" r="4" fill={color} />
    <circle cx="70" cy="70" r="4" fill={color} />
    <circle cx="30" cy="70" r="4" fill={color} />
  </svg>
);

/* ---------- NAVBAR ---------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9999,
        padding: scrolled ? "0.75rem 2rem" : "1.4rem 2rem",
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(0,0,0,0.45)",
        backdropFilter: "blur(14px)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            fontWeight: "800",
            fontSize: "1.6rem",
            color: "#FFD54F",
          }}
        >
          <Swastik color="#FFD54F" />
          Shubh <span style={{ color: "#fff" }}>Vivah</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="desktop-menu">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link className="nav-link" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </ul>

        {/* MOBILE ICON */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mobile-menu"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={() => navigate("/login")}>Login</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style>{`
        .desktop-menu {
          display: none;
          gap: 2rem;
          align-items: center;
          list-style: none;
        }

        .nav-link {
          color: ${scrolled ? "#333" : "#FFD54F"};
          font-weight: 600;
          text-decoration: none;
        }

        .nav-link:hover {
          color: white;
        }

        .login-btn {
          padding: 0.55rem 1.6rem;
          background: #d32f2f;
          color: white;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .mobile-menu-btn {
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          background: white;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
