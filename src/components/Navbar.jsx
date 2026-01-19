import React, { useState, useEffect } from "react";
import { Menu, X, Grid, MessageCircle, Heart, LogOut, LogIn } from "lucide-react";
import { MandapIcon, CoupleIcon, DiyaIcon, KalashIcon, UserTilakIcon } from "./Icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

/* ---------- LOGO ---------- */
const Swastik = ({ color }) => (
  <svg className="swastik-icon" width="32" height="32" viewBox="0 0 100 100" fill="none">
    <path d="M50 10V90M10 50H90" stroke={color} strokeWidth="8" strokeLinecap="round" />
    <circle cx="30" cy="30" r="5" fill={color} />
    <circle cx="70" cy="30" r="5" fill={color} />
    <circle cx="70" cy="70" r="5" fill={color} />
    <circle cx="30" cy="70" r="5" fill={color} />
  </svg>
);

/* ---------- NAVBAR ---------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("currentUser");
      setIsLoggedIn(!!user);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background
      setScrolled(currentScrollY > 20);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // Scrolling down -> Hide
      } else {
        setHidden(false); // Scrolling up -> Show
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuth);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/");
  };

    const handleServicesClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById('services');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

  const navItems = isLoggedIn ? [
    { path: "/dashboard", icon: <Grid size={22} />, label: "Dashboard" },
    { path: "/people", icon: <CoupleIcon size={22} />, label: "People" },
    { path: "/services", icon: <DiyaIcon size={22} />, label: "Services" },
    { path: "/messages", icon: <MessageCircle size={22} />, label: "Messages" },
    { path: "/membership", icon: <KalashIcon size={22} />, label: "Plans" },
    { path: "/shortlist", icon: <Heart size={22} />, label: "Shortlist" },
    { path: "/my-profile", icon: <UserTilakIcon size={22} />, label: "Profile" },
  ] : [
    { path: "/", icon: <MandapIcon size={22} />, label: "Home" },
    { path: "/services", icon: <DiyaIcon size={22} />, label: "Services", onClick: handleServicesClick },
    { path: "/login", icon: <LogIn size={22} />, label: "Login" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        {/* LOGO */}
        <Link to="/" className="logo-link" style={{ color: (location.pathname === "/" && !scrolled) ? "#ffffff" : "var(--color-kumkum)" }}>
          <Swastik color={(location.pathname === "/" && !scrolled) ? "#ffffff" : "var(--color-kumkum)"} />
          <span>Shubh <span style={{ color: (location.pathname === "/" && !scrolled) ? "#ffffff" : "var(--color-kumkum)" }}>Vivah</span></span>
        </Link>

        {/* DESKTOP MENU (ICON BASED) */}
        <div className="desktop-menu">
          {navItems.map((item) => (
            <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-icon-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={item.onClick}
            >
                {item.icon}
                <span className="nav-tooltip">{item.label}</span>
            </Link>
          ))}
          
          {isLoggedIn && (
            <button onClick={handleLogout} className="nav-icon-link" title="Logout">
                <LogOut size={22} />
                <span className="nav-tooltip">Logout</span>
            </button>
          )}
          
          {!isLoggedIn && (
             <Link to="/register" className="btn-primary" style={{ 
                 padding: '0.5rem 1.5rem', 
                 borderRadius: '50px', 
                 background: 'var(--color-kumkum)', 
                 color: 'white', 
                 textDecoration: 'none',
                 fontWeight: '600',
                 fontSize: '0.9rem'
             }}>
                 Register Free
             </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          {navItems.map((item) => (
            <Link 
                key={item.path} 
                to={item.path} 
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
            >
                {item.icon} {item.label}
            </Link>
          ))}
          {isLoggedIn && (
            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="mobile-nav-link" style={{ width: '100%', textAlign: 'left' }}>
                <LogOut size={22} /> Logout
            </button>
          )}
          {!isLoggedIn && (
             <Link to="/register" className="mobile-nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-kumkum)' }}>
                 Register Free
             </Link>
          )}
        </div>
      )}
    </nav>
  );
}
