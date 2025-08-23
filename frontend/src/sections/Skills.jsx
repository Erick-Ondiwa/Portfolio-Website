// src/sections/Skills.jsx
import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiDjango, SiDotnet, SiPostgresql, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
  { name: "Python", icon: <FaPython size={40} color="#FFD43B" /> },
  { name: "Django", icon: <SiDjango size={40} color="#092E20" /> },
  { name: ".NET Core", icon: <SiDotnet size={40} color="#512BD4" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:px-20"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-200 mb-12 relative">
        Skills
        <span
          className="block w-16 h-1 mt-2 mx-auto rounded"
          style={{ backgroundColor: "hsl(145, 90%, 49%)" }}
        ></span>
      </h2>

      {/* Grid of Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition transform hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {skill.icon}
            <p className="mt-3 text-gray-300 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
