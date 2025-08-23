// src/sections/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PODEx",
    description:
      "An AI-powered educational platform designed to identify potential, map dreams, expose learners, and create opportunities.",
    image: "/projects/podex.png",
    github: "https://github.com/erick-ondiwa/podex",
    live: "https://podex.example.com",
  },
  {
    title: "School Management System",
    description:
      "A full-stack system with role-based authentication, attendance, results, and course enrollment modules.",
    image: "/projects/schoolms.png",
    github: "https://github.com/erick-ondiwa/school-management",
    live: "https://schoolms.example.com",
  },
  {
    title: "Vibly",
    description:
      "A collaborative project management and productivity platform built with React, Django, and PostgreSQL.",
    image: "/projects/vibly.png",
    github: "https://github.com/erick-ondiwa/vibly",
    live: "https://vibly.example.com",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-20"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-200 mb-12 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
        <span
          className="block w-20 h-1 mt-2 mx-auto rounded"
          style={{ backgroundColor: "hsl(145, 90%, 49%)" }}
        ></span>
      </motion.h2>

      {/* Grid with staggered animations */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  style={{
                    backgroundColor: "hsl(145, 90%, 49%)",
                    color: "black",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
