import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[hsla(245,92%,5%,0.984)] text-gray-300 font-roboto py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-green-500 mb-3">
            Erick O. Ondiwa
          </h2>
          <p className="text-sm text-gray-400">
            Software Developer | AI & ML Enthusiast  
          </p>
        </motion.div>

        {/* Quick Links with Smooth Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={-70} // adjust for navbar height
                className="hover:text-green-500 transition cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-green-500 transition cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-green-500 transition cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex md:justify-end justify-center items-start gap-5"
        >
          <a
            href="https://github.com/erick-ondiwa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black hover:bg-green-500 hover:text-black transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/erick-ondiwa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black hover:bg-green-500 hover:text-black transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black hover:bg-green-500 hover:text-black transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:erickondiwaz01@gmail.com"
            className="p-2 rounded-full bg-black hover:bg-green-500 hover:text-black transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Erick O. Ondiwa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
