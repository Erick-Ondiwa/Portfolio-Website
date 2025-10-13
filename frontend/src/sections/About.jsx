// src/sections/About.jsx
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-20"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-100 mb-12 relative text-center">
        About Me
        <span
          className="block w-20 h-1 mt-2 mx-auto rounded bg-green-400"
        ></span>
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Profile Image */}
        <div className="mb-8 md:mb-0 relative">
          <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-green-500 blur-2xl opacity-30 animate-pulse"></div>
          <img
            src="images/profile.png"
            alt="Erick Ochieng"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-400 shadow-xl relative z-10 transform transition hover:scale-105"
          />
        </div>

        {/* Bio */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Hi, I'm <span className="text-green-400 font-semibold">Erick Ondiwa</span>,  
            a passionate <strong>Software Developer</strong> and  
            <strong> AI & ML Enthusiast</strong>.  
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Currently pursuing Computer Science at Maseno University. I thrive on building intelligent, scalable, and secure systems through hands-on experience and collaboration.  
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I have hands-on experience with 
            <span className="font-medium text-gray-200"> React, Django, .NET, SQL Server</span>,  
            and integrating AI/ML models. My vision is to create solutions that 
            bridge technology with human needs.  
          </p>

          {/* Key Highlights */}
          <ul className="text-gray-300 mb-8 space-y-2">
            <li>✔ Internship at <span className="text-green-400">Agile Business Solutions Ltd</span></li>
            <li>✔ Technical Lead for <span className="text-green-400">PODEx Project</span></li>
            <li>✔ Organizing Secretary of <span className="text-green-400">Ajira Digital Club</span></li>
          </ul>

          {/* CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-medium text-gray-900 bg-green-400 transition transform hover:scale-105 hover:bg-green-500"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
