// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu
    }
  };

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      let current = "hero"; // default section
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 100; // adjust offset
          if (window.scrollY >= sectionTop) {
            current = link.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "black", fontFamily: "Roboto, sans-serif" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          style={{ color: "hsl(145, 90%, 49%)" }}
          onClick={() => scrollToSection("hero")}
        >
          Erick Ondiwa
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 font-bold">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer transition"
              style={{
                color:
                  activeSection === link.id
                    ? "hsl(145, 90%, 49%)"
                    : "hsla(0, 0%, 80%, 0.94)",
              }}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={(e) =>
                (e.target.style.color =
                  activeSection === link.id
                    ? "hsl(145, 90%, 49%)"
                    : "hsla(0, 0%, 61%, 0.663)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color =
                  activeSection === link.id
                    ? "hsl(145, 90%, 49%)"
                    : "hsla(0, 0%, 80%, 0.94)")
              }
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
          <span className="w-6 h-0.5 bg-gray-200"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: "black" }}>
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer transition"
                style={{
                  color:
                    activeSection === link.id
                      ? "hsl(145, 90%, 49%)"
                      : "hsla(0, 0%, 80%, 0.94)",
                }}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
