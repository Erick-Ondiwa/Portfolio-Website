// src/sections/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Greeting */}
      <p className="text-lg text-gray-300 mb-2 animate-fadeIn">
        👋 Hi, my name is
      </p>

      {/* Name */}
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-4 animate-slideUp"
        style={{ color: "hsl(145, 90%, 49%)" }}
      >
        Erick Ondiwa
      </h1>

      {/* Tagline */}
      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-slideUp delay-200">
        Software Developer | AI & ML Enthusiast
      </h2>

      {/* Expanded Description */}
      <p className="max-w-2xl text-gray-400 mb-6 animate-fadeIn delay-300">
        I’m a third-year Computer Science student and software developer
        passionate about building intelligent systems and modern web
        applications. Skilled in React, Django, and Python, I love solving
        real-world problems through AI, machine learning, and full-stack
        development.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mb-8 animate-fadeIn delay-400">
        <a
          href="https://github.com/erick-ondiwa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/erick-ondiwa-5a39b52a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:erickondiwaz01@gmail.com"
          className="text-gray-300 hover:text-green-400 transition text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Skill Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fadeIn delay-500">
        <span className="px-4 py-1 rounded-full text-sm border border-green-400 text-green-400">
          React
        </span>
        <span className="px-4 py-1 rounded-full text-sm border border-green-400 text-green-400">
          Django
        </span>
        <span className="px-4 py-1 rounded-full text-sm border border-green-400 text-green-400">
          Python
        </span>
        <span className="px-4 py-1 rounded-full text-sm border border-green-400 text-green-400">
          AI & ML
        </span>
      </div>

      {/* Call to Actions */}
      <div className="flex space-x-4 animate-fadeIn delay-600">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
          style={{
            backgroundColor: "hsl(145, 90%, 49%)",
            color: "black",
          }}
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium border transition transform hover:scale-105"
          style={{
            borderColor: "hsl(145, 90%, 49%)",
            color: "hsl(145, 90%, 49%)",
          }}
        >
          Download CV
        </a>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-6 animate-bounce">
        <a href="#projects" className="text-gray-400 text-sm">
          ↓ Scroll to see my work
        </a>
      </div>
    </section>
  );
};

export default Hero;
