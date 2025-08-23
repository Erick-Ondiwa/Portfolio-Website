// src/sections/Experience.jsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Agile Business Solutions Limited",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Developed and modernized a full-stack School Management System using React, .NET Core, and SQL Server.",
      "Implemented role-based authentication, token-based redirection, and secure API integration.",
      "Collaborated with senior engineers in an Agile environment using GitHub for version control.",
    ],
  },
  {
    role: "Technical Lead",
    company: "PODEx Project",
    period: "2025 – Present",
    description: [
      "Leading the development of PODEx, an AI-powered educational platform.",
      "Coordinating a modular, phase-based approach to ensure scalability and security.",
      "Integrating intelligent features: mentorship matching, dream mapping, and personalized learning paths.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <section
      id="experience"
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
        Experience
        <span
          className="block w-24 h-1 mt-2 mx-auto rounded"
          style={{ backgroundColor: "hsl(200, 90%, 50%)" }}
        ></span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 w-full max-w-3xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-6 relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border border-gray-600">
              <Briefcase size={16} className="text-green-400" />
            </span>

            {/* Card */}
            <div
              className="bg-gray-900/60 p-6 rounded-xl shadow-lg"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-green-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
