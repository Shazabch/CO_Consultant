import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { label: "Services", id: "services" },
    { label: "Why Data Matters", id: "data-matters" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Our Workflow", id: "workflow" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-primary border-t border-white/10 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div>
            <img
              src="/assets/horizontallogo1.png"
              alt="COTECH Logo"
              className="h-14 md:h-16 w-auto max-w-[200px] object-contain mb-4"
              loading="lazy"
            />


            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Precision Location Intelligence
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Advanced BLE RTLS technology delivering real-time location
              intelligence for enterprise operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6">
    Quick Links
  </h3>
  <ul className="space-y-4">
    {menuItems.map((item) => (
      <li key={item.id}>
        <button
          onClick={() => scrollToSection(item.id)}
          className="text-gray-400 hover:text-accent transition-all duration-300 text-sm flex items-center gap-2 group"
        >
          {/* Small dot on hover */}
          <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          {item.label}
        </button>
      </li>
    ))}
  </ul>
</div>


          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              {/* Location */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Dubai, UAE</span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:admin@thecoconsultants.com"
                  className="hover:text-accent transition-colors"
                >
                  admin@thecoconsultants.com
                </a>
              </li>

              {/* Time */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>Mon–Fri: 8AM–6PM</p>
                  <p>Sat: 9AM–4PM</p>
                </div>
              </li>
            </ul>
          </div>


          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6">
              Connect
            </h3>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@COConsultants"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/coconsultants"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/coconsultants/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/show/0Xkr8G48haqRPfJCqVeemU?si=28ef06c120d4431d"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.488 17.316a.75.75 0 01-1.033.248c-2.83-1.73-6.392-2.123-10.587-1.17a.75.75 0 11-.332-1.463c4.57-1.04 8.47-.593 11.546 1.31a.75.75 0 01.406 1.075zm1.474-3.288a.938.938 0 01-1.29.31c-3.24-1.994-8.18-2.57-12.01-1.4a.938.938 0 11-.547-1.793c4.38-1.33 9.82-.69 13.57 1.61a.938.938 0 01.277 1.273zm.126-3.413c-3.882-2.307-10.29-2.52-14.01-1.39a1.125 1.125 0 01-.652-2.152c4.27-1.296 11.36-1.045 15.82 1.57a1.125 1.125 0 01-1.158 1.972z" />
                </svg>
              </a>
            </div>

            {/* Company */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://thecoconsultants.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent text-sm flex items-center gap-2"
              >
                Part of <span className="font-semibold text-accent">CO Consultants</span>
                <ChevronRight />
              </a>


            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} COTech. All rights reserved. An extension of the CO
              Consultants group.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 mt-4 md:mt-0 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>

              <span className="text-gray-500 hidden md:inline">|</span>

              <Link
                to="/terms-and-conditions"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:underline underline-offset-4"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
