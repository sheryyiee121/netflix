import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../../assets/netflix_logo.PNG";

const Navbar = ({ showSignIn = true }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background color
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-black/90" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={netflixLogo} alt="Netflix" className="h-10" />
        </Link>

        {showSignIn && (
          <Link to="/Signup">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded text-white text-sm font-medium">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
