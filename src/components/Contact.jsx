import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4"
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/santanu-pramanik-290b66229/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300"
        >
          <FaLinkedin size={40} className="text-blue-700" />
          <p className="mt-2">LinkedIn</p>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/SantanuPra64579"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300"
        >
          <FaTwitter size={40} className="text-sky-500" />
          <p className="mt-2">Twitter</p>
        </a>

        {/* Email */}
        <a
          href="mailto:prasantanu00@gmail.com"
          className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300"
        >
          <FaEnvelope size={40} className="text-red-500" />
          <p className="mt-2">Email</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
