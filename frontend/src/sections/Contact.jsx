// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // ✅ Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
  
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      console.log("Email sent successfully:", result.text);
      setStatus("SUCCESS ✅ Your message has been sent!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // clear form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("FAILED ❌ Unable to send message. Try again.");
    }
  };  

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-20 bg-gradient-to-b from-gray-950 to-gray-900"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-100 mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-gray-400 text-lg mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        I’m always open to discussing new opportunities, collaborations, or just
        chatting about tech. Drop me a message and I’ll get back to you!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md"
            style={{
              background:
                "linear-gradient(to right, hsl(200, 90%, 50%), hsl(150, 80%, 45%))",
            }}
          >
            Send Message
          </button>

          {/* Status Message */}
          {status === "SUCCESS" && (
            <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
          )}
          {status === "FAILED" && (
            <p className="text-red-400 mt-4">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center space-y-6 text-gray-300"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <Mail className="text-green-400" />
            <a
              href="mailto:erickondiwaz01@gmail.com"
              className="hover:text-green-400 transition"
            >
              erickondiwaz01@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-green-400" />
            <a
              href="tel:+254757096101"
              className="hover:text-green-400 transition"
            >
              +254 757 096 101
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-green-400" />
            <a
              href="https://www.linkedin.com/in/erick-ondiwa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              linkedin.com/in/erick-ondiwa
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="text-green-400" />
            <a
              href="https://github.com/erick-ondiwa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              github.com/erick-ondiwa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
