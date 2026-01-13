import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const checkAuth = () => {
      const user = localStorage.getItem("currentUser");
      setIsLoggedIn(!!user);
    };

    window.addEventListener("scroll", onScroll);
    checkAuth();

    // Listen for storage events (optional, good for multi-tab sync)
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/");
    alert("Logged out successfully");
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim()) {
        navigate(`/dashboard?search=${searchQuery}`);
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Partners", path: "/#partners" },
    { name: "Contact", path: "/#contact" },
  ];

  if (isLoggedIn) {
    navLinks.push({ name: "My Profile", path: "/my-profile" });
    navLinks.push({ name: "Dashboard", path: "/dashboard" });
    navLinks.push({ name: "Plans", path: "/membership" });
    navLinks.push({ name: "Shortlisted", path: "/shortlist" });
  }

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
              {item.path.includes('#') ? (
                <a className="nav-link" href={item.path}>
                  {item.name}
                </a>
              ) : (
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* SEARCH ICON */}
          {isLoggedIn && (
            <div className="search-container">
              <input
                type="text"
                className={`search-input ${isSearchOpen ? 'open' : ''}`}
                placeholder="Search Name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <Search
                size={20}
                color={scrolled ? "#333" : "#FFD54F"}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>
          )}

          {isLoggedIn ? (
            <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
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
            {isLoggedIn && (
              <div className="mobile-search" style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Search Name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                  }}
                />
              </div>
            )}

            {navLinks.map((item) => (
              item.path.includes('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "black",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1.2rem"
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "black",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1.2rem"
                  }}
                >
                  {item.name}
                </Link>
              )
            ))}
            {isLoggedIn ? (
              <button onClick={() => { handleLogout(); setIsOpen(false); }}>Logout</button>
            ) : (
              <button onClick={() => { navigate("/login"); setIsOpen(false); }}>Login</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
        
        /* SEARCH BAR */
        .search-container {
            display: flex;
            align-items: center;
            margin-right: 20px;
            position: relative;
        }
        
        .search-input {
            width: 0;
            padding: 8px 0;
            border: none;
            border-bottom: 2px solid #D32F2F;
            background: transparent;
            color: ${scrolled ? "#333" : "#fff"};
            transition: width 0.3s ease, padding 0.3s ease;
            outline: none;
            font-size: 1rem;
        }
        
        .search-input.open {
            width: 200px;
            padding: 8px 10px;
            background: ${scrolled ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)"};
            border-radius: 4px;
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
